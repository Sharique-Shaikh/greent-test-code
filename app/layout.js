import { DM_Sans } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const inter = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: 'Greentern',
  description: "Welcome to Greentern, where we empower businesses with innovative technology solutions and products to help them grow, sustain, and lead in their industries.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head><link rel="icon" href="/assets/icons/greentern-favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/icons/greentern-favicon.png" /></head>
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}