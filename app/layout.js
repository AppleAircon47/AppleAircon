import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap", // ✅ SEO & performance
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://digitalaircon.com"),

  title: {
    default:
      "Digital Aircon – AC & Appliance Repair, Servicing & Installation in Navi Mumbai",
    template: "%s | Digital Aircon",
  },

  description:
    "Digital Aircon offers expert repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai. Trusted and reliable solutions for homes, offices, and industries.",

  keywords: [
    "AC repair Mumbai",
    "AC repair Navi Mumbai",
    "AC installation Mumbai",
    "AC servicing Mumbai",
    "Split AC service",
    "Window AC repair",
    "Refrigerator repair Mumbai",
    "Washing machine repair Mumbai",
    "Microwave oven repair Mumbai",
    "Deep freezer repair Mumbai",
    "PCB repair AC",
    "PCB repair refrigerator",
    "Buying and selling ACs",
    "Buying and selling refrigerators",
    "Buying and selling washing machines",
    "Buying and selling microwaves",
    "Buying and selling deep freezers",
    "New and old appliance sales Mumbai",
    "Digital Aircon",
  ],

  authors: [{ name: "Digital Aircon" }],

  openGraph: {
    title: "Digital Aircon – Trusted AC & Appliance Services",
    description:
      "Professional repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai.",
    url: "https://www.digitalaircon.com",
    siteName: "Digital Aircon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Aircon – AC & Appliance Repair & Services",
    description:
      "Expert repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NNF4QZ4KG3"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NNF4QZ4KG3');
          `}
        </Script>
      </head>

      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
