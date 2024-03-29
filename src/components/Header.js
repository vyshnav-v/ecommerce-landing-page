import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const cart = useSelector((state) => state.cart);
  const { items, totalQuantity, totalPrice } = cart;
  const cartItems = items.product;
  console.log("cart", items, totalQuantity, totalPrice);
  const handleRemoveToCart = (product, quantity ) => {
    dispatch(removeItem( product, quantity ));
  };
  return (
    //    <!-- component -->
    <>
      <header className='bg-white sticky top-0 z-10 shadow'>
        <div className='container mx-auto px-4 py-8 flex items-center'>
          {/* <!-- logo --> */}
          <div className='mr-auto md:w-48 flex-shrink-0'>
            <img
              className='h-8 md:h-10'
              src='https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png'
              alt=''
            />
          </div>

          {/* <!-- search --> */}
          <div className='w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center'>
            <select
              className='bg-transparent uppercase font-bold text-sm p-4 mr-4'
              name=''
              id=''
            >
              <option>all categories</option>
            </select>
            <input
              className='border-l border-gray-300 bg-transparent font-semibold text-sm pl-4'
              type='text'
              placeholder="I'm searching for ..."
            />
            <svg
              className='ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x'
              aria-hidden='true'
              focusable='false'
              data-prefix='far'
              data-icon='search'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z'
              ></path>
            </svg>
          </div>

          {/* <!-- phone number --> */}
          <div className='ml-auto md:w-48 hidden sm:flex flex-col place-items-end'>
            <span className='font-bold md:text-xl'>8 800 332 65-66</span>
            <span className='font-semibold text-sm text-gray-400'>
              Support 24/7
            </span>
          </div>

          {/* <!-- buttons --> */}
          <nav className='contents'>
            <ul className='ml-4 xl:w-48 flex items-center justify-end'>
              <li className='ml-2 lg:ml-4 relative inline-block'>
                <span className=''>
                  <svg
                    className='h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='user'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'
                    ></path>
                  </svg>
                </span>
              </li>
              <li className='ml-2 lg:ml-4 relative inline-block'>
                <span className=''>
                  <div className='absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm'>
                    3
                  </div>
                  <svg
                    className='h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-heart fa-w-16 fa-9x'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='heart'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'
                    ></path>
                  </svg>
                </span>
              </li>
              <li
                className='ml-2 lg:ml-4 relative inline-block'
                onClick={openCart}
              >
                <span className=''>
                  <div className='absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm'>
                    {totalQuantity}
                  </div>
                  <svg
                    className='h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-shopping-cart fa-w-18 fa-9x'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='shopping-cart'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z'
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          </nav>

          {/* <!-- cart count --> */}
          <div className='ml-4 hidden sm:flex flex-col font-bold'>
            <span className='text-xs text-gray-400'>Your Cart</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <hr />
      </header>
      {isCartOpen && (
        <div
          className='relative z-10 '
          aria-labelledby='slide-over-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <div className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <h2
                          className='text-lg font-medium text-gray-900'
                          id='slide-over-title'
                        >
                          Shopping cart
                        </h2>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            onClick={closeCart}
                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                          >
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Close panel</span>
                            <svg
                              className='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {items.map((product) => (
                              <li
                                className='flex py-6 '
                                key={product.product.id}
                              >
                                <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                  <img
                                    src={product.product.image}
                                    alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
                                    className='h-full w-full object-cover object-center'
                                  />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col'>
                                  <div>
                                    <div className='flex justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                        <a href='#'>{product.product.title}</a>
                                      </h3>
                                      <p className='ml-4'>
                                        ${product.product.price.toFixed(2)}
                                      </p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      Salmon
                                    </p>
                                  </div>
                                  <div className='flex flex-1 items-end justify-between text-sm'>
                                    <p className='text-gray-500'>
                                      Qty {product.quantity}
                                    </p>

                                    <div className='flex'>
                                      <button
                                        type='button'
                                        onClick={() =>
                                          handleRemoveToCart(
                                            product,
                                            product.quantity
                                          )
                                        }
                                        className='font-medium text-indigo-600 hover:text-indigo-500'
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}

                            {/* <!-- More products... --> */}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>${totalPrice.toFixed(2)}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                        <a
                          href='#'
                          className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                          Checkout
                        </a>
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
