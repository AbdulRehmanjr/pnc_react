import { Category } from "../../class/Category";

import style from './Category.module.css'

function Categories() {
  const categories: Category[] = [
    {
      categoryId: 1,
      categoryName: "AutoMobile",
      picture: "src/assets/category/AutoMobile.png",
    },
    {
      categoryId: 2,
      categoryName: "Home Service",
      picture: "src/assets/category/HomeServices.png",
    },
    {
      categoryId: 3,
      categoryName: "Resturant",
      picture: "src/assets/category/Restaurant.png",
    },
  ];
  return (
    <>
      <section id="cards" className="mt-3">
        <div className="grid grid-cols-1 mb-7">
          <div className="col-span-1">
            <h1 className={`text-3xl md:text5xl text-center ${style.heading}`}>Categories</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12">
          {categories.map((category: Category) => (
            <div className="col-span-12 md:col-span-3 my-2 mx-20 md:mx-4" key={category.categoryId}>
              <a className={`${style.card_custom} ${style.link}`} href="#">
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
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
