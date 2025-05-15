"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Briefcase, Upload, Users, Settings, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Upload CVs", href: "/upload", icon: Upload },
  { name: "Matches", href: "/matches", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative min-h-screen w-64 border-r bg-[#F6F6F6] p-4 z-40 transition-transform",
          isMobile && !isOpen && "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
                  <Link
          href="/"
          className="flex flex-col items-center mb-8 no-underline decoration-none"
        >
          <Image
            src="/cv-finder3.jpg"
            alt="Recruitment AI Logo"
            width={140}
            height={70}
            className="object-contain mb-4"
          />
        </Link>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} onClick={() => isMobile && setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-blue-50 text-black font-medium border-l-4 border-black"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}