import Link from "next/link";
import Image from "next/image";
import Style from "./header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [bg, setBg] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter().pathname;

  const handleScroll = () => {
    if (window.scrollY == 0) setShadow(true);
    else setShadow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={shadow ? Style.noShadow : Style.shadow}>
      <nav className={Style.container} onScroll={handleScroll}>
        <div className={Style.logo}>
          <div className={Style.burger} onClick={() => setBg(!bg)}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <div>LOGO</div>
        </div>
        <div className={Style.nav}>
          <div className={bg ? Style.bg : Style.list}>
            <li>
              <Link
                href="/"
                className={router == "/" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/store"
                className={router == "/store" ? Style.active : null} onClick={()=>setBg(false)}
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                href="/baby-care"
                className={router == "/baby-care" ? Style.active : null} onClick={()=>setBg(false)}
              >
                Baby Care
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={router == "/contacts" ? Style.active : null}
                onClick={()=>setBg(false)}>
                Contacts
              </Link>
            </li>
          </div>
          <div className={Style.cart}>
            <Image
              src="/icons/bag.png"
              alt="shopping bag"
              width={25}
              height={25}
            />
            <Link href="/">
              Shopping Bag <span>(0)</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
