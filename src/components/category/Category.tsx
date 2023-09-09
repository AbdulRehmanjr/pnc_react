import { Category } from "../../class/Category";

import "./Category.css";

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
      <section id="cards" className="m-5">
        <div className="row mb-4">
          <div className="text-center">
            <h1 className="heading">Categories</h1>
          </div>
        </div>
        <div className="row">
          {categories.map((category: Category) => (
            <div className="col-md-3 my-2" key={category.categoryId}>
              <a className="card-custom" href="#">
                <div className="bg">
                  <div className="text-center d-flex flex-column m-auto p-3">
                    <img
                      src={category.picture}
                      alt={category.categoryName}
                      style={{ border: "none", borderRadius: "50%" }}
                    />
                    <br /> <p className="title">{category.categoryName}</p>
                  </div>
                </div>
                <div className="blob"></div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
