import "./globals.css";

export const metadata = {
  title: "Gabriela | Portfolio",
  description: "Personal portfolio website for Gabriela, senior computer science major.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}