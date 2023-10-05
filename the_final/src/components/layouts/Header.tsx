import { Space } from "antd";
import { Avatar, Popover } from "components";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import '../../sass/main.scss'
const Header = () => {
  const [Popup, setPopup] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // content popup
  const content = (
    <div>
      <p>User Information</p>
      <p>Content</p>
    </div>
  );
  const handlePopup = () => {
    if (Popup == true) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleClickOutside = (event) => {
      const popup = document.getElementById("navbar-user");
      const button = document.getElementById("buttonPopup");
      if (
        popup &&
        !popup.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setPopup(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handlePlacement = () => {
    if (windowWidth >= 768) {
      // Trả về giá trị khi màn hình ở mức md
      return "bottom";
    } else {
      // Trả về giá trị khi màn hình không ở mức md
      return "bottomRight";
    }
  };
  return (
    <nav className="bg-[var(--quaternary)] border-gray-200 dark:bg-gray-900 Header">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center">
          <img src="/public/image/logo.gif" className="h-[80px] mr-3 w-[80px] scale-110" alt="Logo" />
        </a>
        <div className="flex items-center md:order-2 bg-none">
          <button className="w-[40px] h-[40px] rounded-full focus:outline-4 focus:outline-none focus:ring-4 focus:ring-white mr-2 hidden ">
            <Popover
              content={content}
              title="Title"
              trigger={"click"}
              className=""
              placement={handlePlacement()}
            >
              <Space className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-none ">
                <Avatar
                  size={40}
                  icon={<img src="/public/image/avatar.svg" alt="avatar" />}
                />
              </Space>{" "}
            </Popover>
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Log In
          </button>

          {/* <!-- Dropdown menu --> */}
          <button
            // data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            // aria-controls="navbar-user"
            onClick={handlePopup}
            id="buttonPopup"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            Popup ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="md:flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[var(--quaternary)] bg-[var(--tertiary)]">
            <li className="text-center relative dropdown">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6ddcde] md:p-0"
              >
                <MenuOutlined />
                <span> MENU</span>
              </a>
              <ul className="dropdown_menu dropdown_menu-1">
                <li className="dropdown_item-1 rounded-t-[10px]">Item 1</li>
                <li className="dropdown_item-2">Item 2</li>
                <li className="dropdown_item-3">Item 3</li>
                <li className="dropdown_item-4">Item 4</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6ddcde] md:p-0 "
              >
                COURSE
              </a>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6ddcde] md:p-0"
              >
                BLOG
              </a>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6ddcde] md:p-0 "
              >
                EVENT
              </a>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6ddcde] md:p-0 "
              >
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
