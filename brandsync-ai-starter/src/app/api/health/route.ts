export function GET() {
  return new Response(JSON.stringify({ ok: true, service: "brandsync-ai" }), { headers: { "content-type": "application/json" } });
}
