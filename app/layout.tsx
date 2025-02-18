import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/modal";
import LoginModal from "./components/modals/login-modal";
import SignupModal from "./components/modals/signup-modal";
import AddPropertyButton from "./components/navbar/add-property-button";
import AddPropertyModal from "./components/modals/add-property-modal";
import SearchModal from "./components/modals/search-modal";
import ProfileModal from "./components/modals/profile-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-32">
          {children}
        </div>
        <LoginModal/>
        <SearchModal/>
        <SignupModal/>
        <ProfileModal/>
        <AddPropertyModal/>

      </body>
    </html>
  );
}
