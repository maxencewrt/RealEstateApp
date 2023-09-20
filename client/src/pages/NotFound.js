import React from "react";

const NotFound = () => {
  return (
    <div class=" mb-4 rounded bg-gray-50 dark:bg-gray-800">
      <p class=" items-center p-2 text-gray-900 rounded-lg dark:text-white">
        <div className=" items-center justify-center">
          <section className="bg-white dark:bg-gray-900 text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <img className="mx-auto my-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="" />
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <a href="/" className="inline-flex text-gray-900 dark:text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
          </section>
        </div>
      </p>
    </div>
  );
};

export default NotFound;