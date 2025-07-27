"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: string) => {
    if (lang === "bn") {
      router.push("/");
    } else {
      router.push(`?lang=${lang}`);
    }
  };

  return (
    <header className=" fixed top-0 w-full z-50 backdrop-blur-md bg-blue-100/20 border-b border-white/20">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div></div>
        <button
          onClick={() => setLanguage(lang === "bn" ? "en" : "bn")}
          className="px-5 py-2 cursor-pointer rounded-lg bg-white/80 hover:bg-white/90 duration-200 backdrop-blur-sm text-gray-800 font-medium text-sm border border-gray-300"
        >
          {pathname === "/" ? "BN" : "EN"}
        </button>
      </div>
    </header>
  );
}
