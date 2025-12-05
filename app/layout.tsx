import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JDES Banner Generator',
  description: 'Banner Generator for Football School',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
