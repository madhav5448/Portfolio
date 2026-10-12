import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "../data/site";

const description = `${site.name}: ${site.role} in ${site.location}. React, Node.js, Express, MySQL and AWS, with deep experience in payment integrations and webhooks.`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description,
  keywords: [
    site.name,
    "Full Stack Developer",
    "MERN developer",
    "Node.js developer",
    "React developer",
    "Next.js",
    "MySQL",
    "AWS",
    "Indore",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description,
    url: site.url,
    siteName: site.name,
    type: "profile",
    images: [{ url: site.photo, width: 800, height: 999, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description,
    images: [site.photo],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
  ],
};

// Sets the saved theme before the page paints, so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
