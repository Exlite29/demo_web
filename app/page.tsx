'use client';
import ContactPage from "@/components/sections/contact";
import Find from "@/components/sections/find";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import LogoSection from "@/components/sections/logo";
import Navbar from "@/components/sections/nav-bar";
import GalleryPage from "@/components/sections/photogallery";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Navbar />
        <Hero />
        <LogoSection />
        <Find />
        <GalleryPage />
        <Services />
        <ContactPage />
        <Footer />
      </main>
    </div>
  );
}
