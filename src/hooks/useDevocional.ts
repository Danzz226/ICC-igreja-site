import { useCallback, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface Devocional {
  versiculo: string;
  referencia: string;
  reflexao: string;
}

/** Versículo de teste: exibido quando a API falha ou enquanto carrega. Às 6h o Gemini gera um novo. */
const DEVOCIONAL_TESTE: Devocional = {
  versiculo: "O Senhor é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes. Leva-me às águas tranquilas; refrigera-me a alma.",
  referencia: "Salmos 23:1-3",
  reflexao: "Assim como o salmista Davi, podemos confiar que Deus cuida de cada detalhe da nossa vida. Quando permitimos que Ele seja o nosso Pastor, encontramos descanso mesmo em dias difíceis. As águas tranquilas falam de paz interior que só Ele pode dar. Que hoje você experimente o refrigério da presença do Senhor e lembre-se: nada nos faltará quando estamos nos seus cuidados.",
};

const CACHE_PREFIX = "devocional_";
const HORA_TROCA = 6; // Novo devocional a partir das 06:00 da manhã
const MAX_CACHE_DAYS = 14;

/**
 * Data do "dia devocional": a partir das 06:00 conta como o novo dia.
 * Antes das 06:00 ainda vale o devocional do dia anterior.
 */
function getDataDevocional(): string {
  const now = new Date();
  const h = now.getHours();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (h < HORA_TROCA) {
    d.setDate(d.getDate() - 1);
  }
  return d.toISOString().split("T")[0];
}

function limparCacheAntigo() {
  try {
    const keysToRemove: string[] = [];
    const hoje = getDataDevocional();
    const hojeDate = new Date(hoje + "T12:00:00");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(CACHE_PREFIX)) {
        const dateStr = key.replace(CACHE_PREFIX, "");
        const [y, m, d] = dateStr.split("-").map(Number);
        const date = new Date(y, m - 1, d);
        const diffDays = Math.floor((hojeDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > MAX_CACHE_DAYS) keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignora falhas de localStorage
  }
}

/** Extrai e parseia JSON da resposta do Gemini (pode vir com markdown ou texto em volta). */
function parseRespostaGemini(text: string): Devocional | null {
  if (!text || typeof text !== "string") return null;
  let raw = text.trim();
  raw = raw.replace(/^.*?```(?:json)?\s*/i, "").replace(/\s*```.*$/s, "").trim();
  const first = raw.indexOf("{");
  const last = raw.lastIndexOf("}");
  if (first === -1 || last === -1 || last <= first) return null;
  try {
    const parsed = JSON.parse(raw.slice(first, last + 1)) as Devocional;
    if (parsed.versiculo && parsed.referencia && parsed.reflexao) return parsed;
  } catch {
    // tenta escapar quebras de linha dentro de strings
    try {
      const fixed = raw.slice(first, last + 1).replace(/\n/g, " ").replace(/\r/g, "");
      const parsed = JSON.parse(fixed) as Devocional;
      if (parsed.versiculo && parsed.referencia && parsed.reflexao) return parsed;
    } catch {
      // ignora
    }
  }
  return null;
}

export function useDevocional() {
  const [devocional, setDevocional] = useState<Devocional | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usandoFallback, setUsandoFallback] = useState(false);

  const fetchDevocional = useCallback(async (ignorarCache = false) => {
    const dataDevocional = getDataDevocional();
    setLoading(true);
    setError(null);
    setUsandoFallback(false);

    try {
      if (!ignorarCache) {
        const cached = localStorage.getItem(`${CACHE_PREFIX}${dataDevocional}`);
        if (cached) {
          const parsed = JSON.parse(cached) as Devocional;
          setDevocional(parsed);
          setLoading(false);
          return;
        }
      } else {
        localStorage.removeItem(`${CACHE_PREFIX}${dataDevocional}`);
      }

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setDevocional(DEVOCIONAL_TESTE);
        setUsandoFallback(true);
        setLoading(false);
        return;
      }

      limparCacheAntigo();

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Você é um pastor que prepara o devocional diário para uma igreja evangélica. A cada dia deve haver apenas UM devocional.

Sua tarefa: escolher UM versículo bíblico real (da Bíblia Sagrada), típico de devocionais diários de igrejas evangélicas, e escrever uma reflexão breve e encorajadora (1 a 2 parágrafos) para o dia de hoje.

Requisitos:
- O versículo deve ser real e correto (livro, capítulo e versículo válidos).
- A reflexão deve ser pastoral, clara e edificante, no estilo de devocionais evangélicos.
- Varie os livros da Bíblia ao longo dos dias (não use sempre os mesmos).

Retorne APENAS um JSON válido, sem explicação antes ou depois, sem markdown (sem \`\`\`):
{"versiculo":"texto do versículo","referencia":"Livro Capítulo:Versículo","reflexao":"Sua reflexão em 1 ou 2 parágrafos."}`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      const parsed = parseRespostaGemini(response);

      if (parsed) {
        localStorage.setItem(`${CACHE_PREFIX}${dataDevocional}`, JSON.stringify(parsed));
        setDevocional(parsed);
      } else {
        throw new Error("Resposta do Gemini não é um JSON válido");
      }
    } catch (err) {
      console.error("Erro ao gerar devocional:", err);
      setError("Não foi possível carregar o devocional. Tente novamente.");
      setDevocional(DEVOCIONAL_TESTE);
      setUsandoFallback(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDevocional(false);
  }, [fetchDevocional]);

  const tentarNovamente = useCallback(() => {
    fetchDevocional(true);
  }, [fetchDevocional]);

  return { devocional, loading, error, usandoFallback, tentarNovamente };
}
