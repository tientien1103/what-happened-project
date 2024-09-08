"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import Container from "@/components/common/container";
import Menu from "./menu";
import { HEADER_NAVIGATION } from "../../../const/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isStickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    if (window.scrollY > 0) {
      setStickyHeader(true);
    }
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [mobileMenuOpen]);

  const onChangeMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={clsx(
        "inset-x-0 top-0 z-50 transition-colors duration-200 bg-black",
        {
          fixed: isStickyHeader || mobileMenuOpen,
          absolute: !isStickyHeader && !mobileMenuOpen,
        }
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between py-8"
          aria-label="Global"
        >
          <Link className="hidden md:block" href="/">
            <Image
              className={clsx({
                "invert-1 brightness-[300]": isStickyHeader,
              })}
              loading="eager"
              priority
              src={"/logo@2x.webp"}
              alt="what-happened-logo"
              width={226}
              height={26}
            />
          </Link>

          <Menu
            isOpen={mobileMenuOpen}
            onChangeMobileMenu={onChangeMobileMenu}
          />
          <Link className="block md:hidden" href="/">
            <Image
              className={clsx({
                "invert-1 brightness-150": isStickyHeader,
              })}
              loading="eager"
              priority
              src={"/logo@2x.webp"}
              alt="what-happened-logo"
              width={150}
              height={28}
            />
          </Link>
          <div className="flex">
            <ul
              className={clsx(
                "hidden items-center md:gap-x-4 lg:gap-x-16 whitespace-nowrap text-white md:static md:flex md:h-auto md:flex-row md:bg-transparent md:px-0 md:pt-0",
                {
                  "absolute left-0 right-0 top-[54px] !flex h-screen flex-col bg-black px-4 pt-4":
                    mobileMenuOpen,
                }
              )}
            >
              {HEADER_NAVIGATION.slice(0, 3).map((item) => {
                return (
                  <li
                    className={clsx(
                      "relative w-full whitespace-nowrap border-b border-b-white py-2.5 text-sm text-left uppercase md:border-none md:py-0 md:uppercase md:underline-offset-[7px] after:md:absolute after:md:-bottom-0.5 after:md:left-0 after:md:h-0.5 after:md:w-0 after:md:bg-white after:md:transition-all after:md:duration-300 after:md:hover:w-full",
                      {
                        "md:underline": pathname === item.href,
                      }
                    )}
                    key={item.href}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            <span className="hidden sm:block border border-r-2 md:mx-4 lg:mx-12" />
            <ul
              className={clsx(
                "hidden items-center md:gap-x-4 lg:gap-x-16 whitespace-nowrap text-white md:static md:flex md:h-auto md:flex-row md:bg-transparent md:px-0 md:pt-0",
                {
                  "absolute left-0 right-0 top-[200px] !flex h-screen flex-col bg-black px-4":
                    mobileMenuOpen,
                }
              )}
            >
              {HEADER_NAVIGATION.slice(3, 5).map((item) => {
                return (
                  <li
                    className={clsx(
                      "relative w-full whitespace-nowrap border-b border-b-white py-2.5 text-sm text-left uppercase md:border-none md:py-0 md:uppercase md:underline-offset-[7px] after:md:absolute after:md:-bottom-0.5 after:md:left-0 after:md:h-0.5 after:md:w-0 after:md:bg-white after:md:transition-all after:md:duration-300 after:md:hover:w-full",
                      {
                        "md:underline": pathname === item.href,
                      }
                    )}
                    key={item.href}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}
