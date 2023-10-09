/* eslint-disable @typescript-eslint/no-unused-vars */

import { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Badge } from 'primereact/badge';

import { CartPreview } from "../../shop/CartPreview";
import { currentCount, setCartUpdateCallback } from "../../../services/order/CartService";
import { Avatar } from "primereact/avatar";
import { Menu, Transition } from "@headlessui/react";


function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLogged, setIsLogged] = useState(false); // Replace with your login state
  const [count, setCount] = useState<number>(currentCount)
  const [_user,setUser] = useState(undefined)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token)
      setIsLogged(true)
    setCartUpdateCallback((newCount) => {
      setCount(newCount);
    });
    setUser(JSON.parse(localStorage.getItem('user')))
  }, []);

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem('token_pnc')
    localStorage.removeItem('user')
  };

  const toggleCart = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }



  return (
    <>
      <header className="sticky top-0 z-[1100]">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
              <span className="hidden md:gridself-center text-xl font-semibold whitespace-nowrap dark:text-white mx-2">Business365</span>
            </a>
            <div className="flex items-center lg:order-2">
              {
                isLogged &&
                 <button className="mx-4 p-overlay-badge text-2xl" onClick={toggleCart}>
                  <img src="/icons/cart.png" width={30} alt="cart icon" />
                  {count != 0 && <Badge value={count} severity="success"></Badge>}
                </button>
              }
              <Menu as="div" className="relative inline-block">
                {isLogged ? (
                  <Menu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                    <Avatar className="px-2" image={"/icons/expert.png"} size="large" shape="circle" />
                  </Menu.Button>
                ) : (
                  <Menu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                    <img src="/icons/user.png" width={30} alt="user icon" />
                  </Menu.Button>
                )}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 p-1 w-40 origin-top-right rounded-md bg-white text-black font-serif font-bold">
                    <div className="p-2">
                      <Menu.Item> 
                        {isLogged ? <button onClick={handleLogout}>Logout</button> : <Link to="/login" className="p-2">Login</Link>}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Stores</a>
                </li>
                <li>
                  <Link to="/become-seller" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Become Seller</Link>
                </li>
                <li>
                  <Link to="/admin-dashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Admin</Link>
                </li>
                <li>
                <Link to="/seller-dashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Seller</Link>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isOpen && <CartPreview isOpen={isOpen} toggleCart={toggleCart} />}
    </>


  );
}

export default Header;
