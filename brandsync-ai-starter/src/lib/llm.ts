import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function negotiate(message: string, context: Record<string, any>) {
  // Minimal stub — add system prompt + context as needed
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un manager d'influenceurs senior. Respecte les planchers de prix et escalade si nécessaire." },
      { role: "user", content: JSON.stringify({ message, context }) }
    ]
  });
  return completion.choices[0].message?.content ?? "";
}
