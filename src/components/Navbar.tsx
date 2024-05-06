import React from "react"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="hidden md:block md:p-0 fixed w-full bg-white border-gray-200 z-[100] shadow-md">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto md:px-5 md:pr-0 lg:px-14 lg:py-2 lg:pr-0">
          <a
            className="flex items-center px-[20px] md:py-0 md:px-0"
            href="/"
          >
            <img
              className="object-cover w-[50px] sm:w-[70px] lg:w-[90px]"
              src="https://statics.cdn.200lab.io/f/20230830172851/200lab-logo-beta.png"
              alt="200Lab Logo"
            />
          </a>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-primary md:bg-transparent px-[30px] md:py-0 md:px-0">
            <ul className="flex flex-col mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 items-center">

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-main hover:border-b-2 hover:border-main">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-main border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-main md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/">Home</a>
                  </p>
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit border-main hover:border-b-2 hover:border-main">
                <a
                  className="font-RobotoMedium uppercase block text-main text-[14px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-10 border-none sm:border-b border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-main md:py-4 lg:py-6"
                  href="/"
                >
                  TodoList
                </a>
              </li>

            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
