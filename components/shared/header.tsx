"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Svg } from "../other";
import MenuItemsMobile from "@/components/header/menu-items-mobile";
import MenuItems from "@/components/header/menu-items";
import { cn, getValuesIdentifierAppLink } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const appLink = useMemo(() => getValuesIdentifierAppLink(), [])

  return (
    <>
      <div
        className={cn(
          "h-[72px] xl:h-[96px] bg-white shadow-header sticky top-0 py-6 px-5 hd:px-36 flex justify-between items-center z-[2000]",
        )}
      >
        <Link href={"/"} className="h-8 md:h-10 2xl:h-12 hd:h-14">
          <img
            src="/assets/logo.png"
            alt="Values_Identifier_Logo"
            className="object-contain w-full h-full"
          />
        </Link>
        <button
          className="absolute right-0 py-4 px-5 xl:hidden h-[72px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {pathname !== '/for-students' &&
            (!isMenuOpen ? (
              <img
                src="/icons/hamburger.png"
                alt="hamburger_icon"
                className="object-contain w-6 h-6"
              />
            ) : (
              <Svg.Arrow.Close className="text-popover-text" />)
            )}
        </button>
        {pathname !== '/for-students' && (
          <div className="hidden gap-5 xl:flex 2xl:gap-6">
            <MenuItems />
            <div className="gap-3 2xl:gap-4 flex-center z-[100]">
              <Button
                onClick={() => window.open(appLink, '_blank')}
                className={cn(
                  "shadow-[0px_9.43px_56.59px_0px_#EC891752] relative z-50",
                  buttonVariants({ variant: "golden" }),
                )}>
                Get Your Report
              </Button>
              <Button variant="outline" size="sm" className="font-normal"
                onClick={() => window.open(appLink, '_blank')}>
                Sign In
              </Button>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <MenuItemsMobile handleMenuOpen={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
    </>
  );
}

export default Header;
