import { Filter } from "./Filter"
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Products } from "./Product"
import InfiniteScroll from 'react-infinite-scroll-component'
import { classNames } from "primereact/utils"
import { useState, useEffect, Fragment } from "react"
import { Product } from "../../class/Product"
import { getAllProducts } from "../../services/ProductService"


export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [sortBy, setSortBy] = useState<string>("");
  const itemsPerPage = 10;

  const loadMoreProducts = () => {
    getAllProducts(page, itemsPerPage)
      .then((response) => {
        const newProducts = response['data'];
        if (newProducts.length > 0) {
          setProducts([...products, ...newProducts]);
          setPage(page + 1);
        } else {
          setHasMore(false)
        }

      })
      .catch((error) => console.error(error));
  };

  const sortOptions = [
    { name: "Most Popular", value: "popularity" },
    { name: "Best Rating", value: "rating" },
    { name: "Newest", value: "createdAt" },
    { name: "Price: Low to High", value: "priceLowToHigh" },
    { name: "Price: High to Low", value: "priceHighToLow" },
  ];


   // Use useEffect to handle sorting whenever sortBy changes
   useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      let result = 0;

      switch (sortBy) {
        case "createdAt":
          result = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          break;
        case "priceLowToHigh":
          result = a.price - b.price;
          break;
        case "priceHighToLow":
          result = b.price - a.price;
          break;
        default:
          result = 0; 
      }

      return result;
    });

    setProducts(sortedProducts);
  }, [sortBy]);

  useEffect(() => {
    loadMoreProducts();
  }, []);
  return (
    <>
      <div className="hidden md:block col-span-2 bg-slate-200 px-6">
        <div className=" sticky top-0">
          <Filter />
        </div>

      </div>
      <div className="col-span-8 md:col-span-6">
        <div className="grid grid-cols-span-4 gap-2">
          <div className="col-span-4  flex flex-row justify-between bg-slate-100 p-4">
            <h1 className="text-black text-2xl md:text-3xl font-bold font-serif">Products</h1>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="m-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.value}>
                        {({ active }) => (
                          <button
                            onClick={() => setSortBy(option.value)} // Call handleSortChange when clicked
                            className={classNames(
                              option.value === sortBy ? "font-medium text-gray-900" : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm cursor-pointer"
                            )}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          {products.map((product) => (
                <Products product={product} key={product._id} />
              ))}
        </div>
      </div>
    </>

  )
}