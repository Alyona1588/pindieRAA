"use client";


import Link from "next/link";
import Styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

export const Footer = () => {

  const pathname = usePathname();
  console.log("pathname из Хедера");
  console.log(pathname);

  return (
    <footer className={Styles["footer"]}>


{
  pathname === "/" ?  
<a className={Styles["footer__logo"]}>
<span className={Styles["footer__logo-name"]}>pindie</span>
<span className={Styles["footer__logo-copy"]}>, XXI век</span>
</a>

: 
<Link href="/" className={Styles["footer__logo"]}>
<span className={Styles["footer__logo-name"]}>pindie</span>
<span className={Styles["footer__logo-copy"]}>, XXI век</span>
</Link>
}


{/* <Link href="/" className={Styles["footer__logo"]}>
<span className={Styles["footer__logo-name"]}>pindie</span>
<span className={Styles["footer__logo-copy"]}>, XXI век</span>
</Link>  */}
 


      
      {/* <Link href="/" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </Link> */}
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a href="https://www.youtube.com/" className={`button ${Styles["social-list__link"]}`}>
            YT
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
        <a href="https://vk.com/" className={`button ${Styles["social-list__link"]}`}>
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
        <a href="https://web.telegram.org/a/" className={`button ${Styles["social-list__link"]}`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
