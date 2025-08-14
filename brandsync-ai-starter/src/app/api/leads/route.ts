import { prisma } from "@/lib/db";
export async function GET() {
  const leads = await prisma.lead.findMany({ take: 50, orderBy: { createdAt: "desc" } });
  return new Response(JSON.stringify(leads), { headers: { "content-type": "application/json" } });
}
export async function POST(req: Request) {
  const body = await req.json();
  const lead = await prisma.lead.create({ data: body });
  return new Response(JSON.stringify(lead), { headers: { "content-type": "application/json" } });
}
