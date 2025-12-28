import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://musk-appliance.vercel.app/"), // ✅ change to real domain
  title: {
    default: "Digital Aircon | AC Repair & Installation Services",
    template: "%s | Digital Aircon",
  },
  description:
    "Digital Aircon provides professional AC repair, installation, servicing, and maintenance in Navi Mumbai and Mumbai.",
  keywords: [
    "AC repair Navi Mumbai",
    "AC installation Mumbai",
    "Digital Aircon",
    "Split AC service",
    "Window AC repair",
  ],
  authors: [{ name: "Digital Aircon" }],
  openGraph: {
    title: "Digital Aircon",
    description:
      "Trusted AC repair, servicing & installation experts in Navi Mumbai.",
    url: "https://www.appleaircon.in",
    siteName: "Digital Aircon",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
