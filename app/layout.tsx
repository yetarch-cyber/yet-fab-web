import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
    template: "%s | YET:FAB",
  },
  description:
    "YET:FAB is the fabrication studio of YET Architecture, developing 3D-printed objects, lighting, furniture interventions, prototypes, and custom architectural components in Tel Aviv.",
  keywords: [
    "3D printing",
    "digital fabrication",
    "3D printed objects",
    "architectural components",
    "YET:FAB",
    "YET Architecture",
    "Tel Aviv",
    "bespoke fabrication",
    "design studio",
    "sustainable design",
    "furniture design Israel",
  ],
  metadataBase: new URL("https://www.yet-fab.com"),
  alternates: { canonical: "https://www.yet-fab.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yet-fab.com",
    siteName: "YET:FAB",
    title: "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
    description:
      "YET:FAB is the fabrication studio of YET Architecture, developing 3D-printed objects, lighting, furniture interventions, prototypes, and custom architectural components in Tel Aviv.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
    description:
      "YET:FAB is the fabrication studio of YET Architecture, developing 3D-printed objects, lighting, furniture interventions, prototypes, and custom architectural components in Tel Aviv.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="bg-[#EDEDEB] text-[#0A0A0A] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
