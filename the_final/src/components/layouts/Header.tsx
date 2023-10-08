import { Space } from "antd";
import { Avatar, Input, Modal, Popover } from "components";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect, Fragment } from "react";
import "../../sass/main.scss";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { manageCourse } from "services";
import * as Components from "./LoginModalComp";
const Header = () => {
  const [Popup, setPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signIn, toggle] = useState(true);
  console.log(signIn);

  // content popup
  const content = (
    <div>
      <p>User Information</p>
      <p>Content</p>
    </div>
  );
  // Login-Regis modal handle
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
  useEffect(() => {
    (async () => {
      try {
        const data = await manageCourse.getCourseMenu();
        setMenu(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="relative">
      <nav className="!bg-[var(--quaternary)] border-gray-200 dark:bg-gray-900 Header">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center">
            <img
              src="/public/image/logo.gif"
              className="h-[80px] mr-3 w-[80px] scale-110"
              alt="Logo"
            />
          </a>
          <div className="flex items-center md:order-2 bg-none">
            <button
              className="w-[40px] h-[40px] rounded-full focus:outline-4 focus:outline-none focus:ring-4 focus:ring-white mr-2 hidden "
              onClick={() => {
                setOpen(!open);
              }}
            >
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
              onClick={showModal}
            >
              Log In
            </button>
            {/* <!-- Dropdown menu --> */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={() => {
                setPopup(!Popup);
              }}
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
                  {menu?.map((e, index) => (
                    <li
                      key={e.maDanhMuc}
                      className={`dropdown_item-${index + 1} ${
                        index == 0 ? "rounded-t-[10px]" : ""
                      }`}
                    >
                      {e.tenDanhMuc}
                    </li>
                  ))}
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
      {/* Slide-over */}
      <div className="absolute top-0 left-0 w-full z-60">
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden  ">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-[-100%]"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[-100%]"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-[100vh] flex-col overflow-hidden bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Panel title
                          </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Your content */}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/* Login/Regis modal */}
      <Modal
        closeIcon={false}
        open={isModalOpen}
        centered
        footer={null}
        onCancel={handleCancel}
        width={windowWidth >= 768 ? "70vw" : "90vw"}
        bodyStyle={{
          height: windowWidth < 768 && signIn ? "50vh" : signIn ? "50vh" : "80vh",
        }}
      >
        <Components.Container signingIn={signIn}>
          <Components.SignUpContainer signingIn={signIn} className="box">
            <Components.Form className="content">
              <Components.Title>Create Account</Components.Title>
              <Input name="taiKhoan" type="text" placeholder="Username" />
              <Input name="hoTen" type="text" placeholder="Full Name" />
              <Input name="email" type="email" placeholder="Email" />
              <Input name="matKhau" type="password" placeholder="Password" />
              <Input name="soDT" type="phone" placeholder="Phone" />
              <Input
                name="maNhom"
                type="text"
                placeholder="Group (From GP00 to GP09)"
              />
              {windowWidth < 768 && signIn == false ? (
                <div>
                  <p
                    style={{
                      marginTop: "10px",
                      marginBottom: "5px",
                      border: "2px dashed #fff",
                      borderRadius: "5px",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      <Components.Title style={{ fontSize: "14px" }}>
                        Already have an account?
                      </Components.Title>
                    </span>
                    <span>
                      <Components.Anchor
                        href="#"
                        onClick={() => toggle(true)}
                        style={{ marginLeft: "4px" }}
                      >
                        Sign in
                      </Components.Anchor>
                    </span>{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
              <Components.Button>Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>
          <Components.SignInContainer signingIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Input name="taiKhoan" type="text" placeholder="Username" />
              <Input name="matKhau" type="password" placeholder="Password" />
              <Components.Anchor style={{ margin: "0 0" }} href="#">
                Forgot your password?
              </Components.Anchor>
              {windowWidth < 768 ? (
                <div>
                  <p
                    style={{
                      marginTop: "10px",
                      marginBottom: "5px",
                      border: "2px dashed #fff",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    <span>
                      <Components.Title style={{ fontSize: "14px" }}>
                        Don't have an account?
                      </Components.Title>
                    </span>
                    <span>
                      <Components.Anchor href="#" onClick={() => toggle(false)}>
                        Sign up
                      </Components.Anchor>
                    </span>
                  </p>
                </div>
              ) : (
                ""
              )}
              <Components.Button>Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </Modal>

      {/* Login/Regis modal for mobile */}
    </div>
  );
};

export default Header;
