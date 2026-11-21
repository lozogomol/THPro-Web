import type { Metadata } from "next";

import "../../public/assets/css/style.css";

export const metadata: Metadata = {
  title: "ClinicMaster - Health & Medical NextJs Template",
  description: "ClinicMaster is a clean and modern Health & Medical Next.js template. Ideal for clinics, hospitals, and healthcare providers, with responsive design, booking system, and customizable components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-1">
       <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body id="bg">
        {children}
      </body>
    </html>
  );
}
