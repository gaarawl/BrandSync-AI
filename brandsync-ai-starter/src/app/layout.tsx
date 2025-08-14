export const metadata = { title: "BrandSync AI" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 20 }}>
        <h1>BrandSync AI — Dashboard (MVP)</h1>
        {children}
      </body>
    </html>
  );
}
