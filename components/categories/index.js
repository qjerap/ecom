import Category from "./category/index";
import styles from "./styles.module.scss";
import svgHeadphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import svgSpeakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import svgEarphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Categories = () => {
  return (
    <div className="container section">
      <div className={styles.categories}>
        <Category type={"Headphones"} img={svgHeadphones} />
        <Category type={"Speakers"} img={svgSpeakers} />
        <Category type={"Earphones"} img={svgEarphones} />
      </div>
    </div>
  );
};

export default Categories;
