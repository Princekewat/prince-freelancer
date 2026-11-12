import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Prince Kewat | Full-Stack Developer & Next.js Freelancer",
  description:
    "Prince Kewat is a full-stack developer and Next.js freelancer building fast, modern websites and web applications with React and TypeScript.",
  keywords: [
    "Prince Kewat",
    "Prince Kewat developer",
    "Prince Kewat freelancer",
    "Next.js developer",
    "full-stack developer",
    "React developer",
    "TypeScript developer",
    "freelance web developer",
  ],
  authors: [{ name: "Prince Kewat" }],
  creator: "Prince Kewat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}