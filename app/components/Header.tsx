"use client";
import { useRouter } from "next/navigation";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";

export default function Header({ lang }: { lang: string }) {
  const router = useRouter();

  const setLanguage = (lang: string) => {
    if (lang === "bn") {
      router.push("/");
    } else {
      router.push(`?lang=${lang}`);
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-300">
      <div className=" p-4 container mx-auto h-14 flex items-center justify-between">
        <div>
          <Image
            src={logo}
            alt="10 Minutes School"
            width={100}
            height={50}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <button
          onClick={() => setLanguage(lang === "bn" ? "en" : "bn")}
          className="px-5 py-2 cursor-pointer rounded-md bg-white/80 hover:bg-white/90 duration-200 backdrop-blur-sm text-gray-800 font-medium text-sm border border-gray-300 hover:shadow-md"
        >
          {lang === "bn" ? "EN" : "BN"}
        </button>
      </div>
    </header>
  );
}
