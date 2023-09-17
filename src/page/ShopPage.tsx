import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Filter } from '../components/shop/Filter'
import { Products } from '../components/shop/Product'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Product } from '../class/Product'
import { getAllProducts } from '../services/ProductService'
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ShopPage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  const loadMoreProducts = () => {
    getAllProducts(page, itemsPerPage)
      .then((response) => {
        const newProducts = response['data'];
        if (newProducts.length > 0) {
          setProducts([...products, ...newProducts]);
          setPage(page + 1);
        }
      })
      .catch((error) => console.error(error));
  };


  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    loadMoreProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-8">
        <div className="col-span-8 bg-[url('/shop/banner.jpg')] bg-cover bg-center bg-no-repeat h-[250px]">
          <h1 className="text-white text-4xl md:text-7xl font-bold font-serif p-20">Let Do Shopping</h1>
        </div>
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
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <InfiniteScroll
              dataLength={products.length}
              next={loadMoreProducts}
              hasMore={true} // Set this to true by default
              loader={<h4 className="col-span-8 text-xl font-bold font-serif">Loading...</h4>}
            >
               <div className="grid grid-cols-4">
                {products.map((product) => (
                  <div className="col-span-1" key={product._id}>
                    <Products product={product} key={product._id} />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>

    </div >
  )
}

export default ShopPage