import "./directory.style.scss";
import CategoryItem from "../category-container/category-item.component";
import { useNavigate } from "react-router-dom";
const Directory = ({ categories }) => {

  return (
    <div className="directory-container">
      {categories.map((category, idx) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
      ;
    </div>
  );
};
export default Directory;
