import styles from "./styles.module.scss";
import Image from "next/image";

const Category = (props) => {
  return (
    <div className={styles.category}>
      <div className={styles.img}>
        <Image src={props.img} width={240} height={260} layout="fixed"/>
      </div>
      <div className={styles.content}>
        <h6>{props.type}</h6>
        <button className="btn btn--3">shop</button>
      </div>
    </div>
  );
};

export default Category;
