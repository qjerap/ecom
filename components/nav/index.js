import Image from "next/image";
import Link from "next/link";
import svgLogo from "../../public/assets/shared/desktop/logo.svg";
import svgCart from "../../public/assets/shared/desktop/icon-cart.svg";
import svgHamburger from "../../public/assets/shared/tablet/icon-hamburger.svg";
import styles from "./styles.module.scss";

const links = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "headphones",
    href: "/headphones",
  },
  {
    title: "speakers",
    href: "/speakers",
  },
  {
    title: "earphones",
    href: "/earphones",
  },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.flex} container`}>
        <div className={styles.hamburger}>
            <Image
              src={svgHamburger}
              alt="mobile menu"
            />
        </div>
        <Image src={svgLogo} alt="audiophile" />
        <ul>
          {links.map((link) => {
            return (
              <li>
                <Link href={link.href}>
                  <a className="subtitle">{link.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.cart}>
            <Link href="/cart" >
              <a>
                <Image src={svgCart} alt="cart" />
              </a>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
