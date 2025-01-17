import './globals.css';

export const metadata = {
  title: 'Routing Test from Panit',
  description: 'Routing Test for Partnerhub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
