import { Link } from "react-router-dom";
import { Category } from "../../../class/Category";

import style from './Category.module.css'

function Categories() {
  const categories: Category[] = [
    {
      _id: '1',
      name: "AutoMobile",
      picture: "/category/Automobile1.png",
    },
    {
      _id: '2',
      name: "Home Service",
      picture: "/category/HomeServices1.png",
    },
    {
      _id: '3',
      name: "Resturant",
      picture: "/category/Restaurant1.png",
    },
    {
      _id:'4',
      name:'Job',
      picture:"/category/Automobile1.png"
    }
  ];
  return (
    <>
      <section id="cards" className="my-10">
        <div className="grid grid-cols-1 mb-14">
          <div className="col-span-1">
            <h1 className={`text-3xl md:text-7xl text-center font-serif underline decoration-green-600 underline-offset-8 `}>Categories</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {categories.map((category: Category) => (
             <Link to="/shop" className="bg-white rounded-lg shadow-sm shadow-black hover:shadow-none hover:outline-double hover:outline-2 hover:outline-green-500  m-5 p-5" key={category._id}>
             <div className="text-center d-flex flex-column m-auto p-3">
               <img
                 className="h-[50px] w-[50px] m-auto"
                 src={category.picture}
                 alt={category.name}
                 style={{ border: "none", borderRadius: "50%" }}
               />
               <br /> 
               <p className={`${style.category_title}`}>{category.name}</p>
             </div>
           </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
