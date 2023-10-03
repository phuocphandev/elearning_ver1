import { Space } from "antd";
import { Avatar, Popover } from "components";
import {MenuOutlined} from "@ant-design/icons"

const Header = () => {
  const content = (
    <div>
      <p>User Information</p>
      <p>Content</p>
    </div>
  );
  return (
    <nav className="bg-[var(--quaternary)] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center">
          <img
            src="/public/image/logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Ehub
          </span>
        </a>
        <div className="flex items-center md:order-2 bg-none">
          <button className="w-[40px] h-[40px] rounded-full focus:outline-4 focus:outline-none focus:ring-4 focus:ring-white mr-2">
            <Popover
              content={content}
              title="Title"
              trigger={"click"}
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center border-none outline-none"
            >
              <Space className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-none">
                <Avatar
                  size={40}
                  icon={<img src="/public/image/avatar.svg" alt="avatar" />}
                />
              </Space>{" "}
            </Popover>
          </button>
          
          {/* <!-- Dropdown menu --> */}
          <button
            // data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[var(--quaternary)]">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                <MenuOutlined />
                 <span> MENU</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                COURSE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                EVENT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
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
