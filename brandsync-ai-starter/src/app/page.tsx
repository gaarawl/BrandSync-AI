import Link from "next/link";
export default function Home() {
  return (
    <div>
      <p>Bienvenue sur votre MVP. Ajoutez des leads, créez des propositions, lancez l'outreach.</p>
      <ul>
        <li><Link href="/api/health">API health</Link></li>
        <li><Link href="/api/leads">GET /api/leads</Link></li>
      </ul>
    </div>
  );
}
