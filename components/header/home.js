import styles from "./styles.module.scss";
import Image from "next/image";
import jpgHero from "../../public/assets/home/desktop/image-hero.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <Image src={jpgHero} layout="fill" />
      </div>
      <div className={`container`}>
        <div className={styles.content}>
          <div className="overline">new product</div>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p className="body-text">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="btn">see product</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
