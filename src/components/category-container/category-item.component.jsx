import { useNavigate } from "react-router-dom";
import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const handleChange = (title) => {
    navigate(`/shop/${title}`);
    console.log("sdsdsd");
  };
  const { title, imageUrl } = category;
  return (
    <div className="category-container" onClick={() => handleChange(title)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
