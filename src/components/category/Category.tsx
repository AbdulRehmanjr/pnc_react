import { Link } from "react-router-dom";
import { Category } from "../../class/Category";

import style from './Category.module.css'

function Categories() {
  const categories: Category[] = [
    {
      categoryId: 1,
      categoryName: "AutoMobile",
      picture: "/category/Automobile1.png",
    },
    {
      categoryId: 2,
      categoryName: "Home Service",
      picture: "/category/HomeServices1.png",
    },
    {
      categoryId: 3,
      categoryName: "Resturant",
      picture: "/category/Restaurant1.png",
    },
  ];
  return (
    <>
      <section id="cards" className="my-10">
        <div className="grid grid-cols-1 mb-14">
          <div className="col-span-1">
            <h1 className={`text-3xl md:text-4xl text-center ${style.heading} underline decoration-green-600 underline-offset-8 `}>Categories</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {categories.map((category: Category) => (
            <div className="my-2 mx-20 md:mx-10" key={category.categoryId}>
              <Link to="/shop" className={`${style.card_custom} ${style.link}`} >
                <div className={`${style.category_bg}`}>
                  <div className="text-center d-flex flex-column m-auto p-3">
                    <img
                    className={`${style.category_img}`}
                      src={category.picture}
                      alt={category.categoryName}
                      style={{ border: "none", borderRadius: "50%" }}
                    />
                    <br /> <p className={`${style.category_title}`}>{category.categoryName}</p>
                  </div>
                </div>
                <div className={`${style.blob}`}></div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
