import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-6 mx-auto text-white bg-gray-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            联系我们
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            如果您有任何问题，可以通过邮箱联系。
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#contact"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-gray-900 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            联系我们
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;