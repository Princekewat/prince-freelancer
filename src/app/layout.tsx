import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Prince Kewat | Next.js Freelancer",
  description:
    "Prince Kewat - Next.js Developer and Freelancer"
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

      </body>

    </html>
  );
}