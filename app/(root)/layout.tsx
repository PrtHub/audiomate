import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import { Menu } from "lucide-react";
import Image from "next/image";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3 text-white-1">
        <LeftSidebar />
        <section className="flex flex-1  flex-col min-h-screen px-4 sm:px-14">
          <div className="w-full max-w-5xl flex flex-col max-sm:px-4 mx-auto">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Menu />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">{children}</div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
};

export default RootLayout;
