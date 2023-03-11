import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Container from "../utils/Container";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dropdown from "../menus/Dropdown";
import ServicesMenu from "../menus/ServicesMenu";

const navigation = {
  links: [
    { link: "/", name: "Home" },
    { menuLink: "/", name: "Services", menu: ServicesMenu },
    // { link: "/about", name: "About" },
    // { link: "/contact", name: "contact" },
  ],
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="bg-navbar shadow fixed w-full top-0 z-40">
        <header className="py-4">
          <Container>
            <div className="relative flex items-center justify-between">
              <div>
                <Link href="/" className="block relative h-8 w-56">
                  <Image
                    width={240}
                    height={130}
                    src="/assets/images/logo.gif"
                    alt=".."
                  />
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-end">
                <ul className="hidden items-center lg:flex gap-3 xl:gap-8">
                  {navigation.links.map((item, index) => (
                    <li key={`links-${index}`}>
                      {item.menu && (
                        <Dropdown title={item.name} link={item.menuLink}>
                          <item.menu onClick={closeMenu} />
                        </Dropdown>
                      )}
                      {item.link && (
                        <Link
                          href={item.link}
                          className={`
                         ${
                           router.pathname == item.link
                             ? "text-opacity-100 border-white"
                             : "text-opacity-80 border-transparent"
                         }
                           text-white text-base font-medium hover:text-opacity-100 border hover:border-white py-2 px-6 rounded-md capitalize
                       `}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:flex gap-3 items-center lg:ml-12">
                <Link
                  href="/support"
                  className="bg-g-primary text-white text-lg font-semibold rounded-lg py-3 px-12 hover:opacity-90 transition-all duration-300"
                >
                  Support
                </Link>
              </div>
              <div className="mt-2 md:mt-0 lg:hidden pl-6 ml-auto">
                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </Container>

          <div
            className={`${
              open ? "block" : "hidden"
            } h-screen md:h-auto lg:hidden pt-8 pb-4`}
          >
            <Container>
              <ul className="flex flex-col md:flex-row gap-8">
                {navigation.links.map((item, index) => (
                  <li key={`links-${index}`}>
                    {item.menu && (
                      <Dropdown title={item.name} link={item.menuLink}>
                        <item.menu onClick={closeMenu} />
                      </Dropdown>
                    )}
                    {item.link && (
                      <Link
                        href={item.link}
                        onClick={closeMenu}
                        className={`
                         ${
                           router.pathname == item.link
                             ? "text-opacity-100 border-white"
                             : "text-opacity-80 border-transparent"
                         }
                         text-white text-base font-medium hover:text-opacity-100 border hover:border-white py-2 px-6 rounded-md capitalize
                       `}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="block md:hidden mt-4">
                  <Link
                    onClick={closeMenu}
                    href="/support"
                    className=" bg-g-primary text-white text-lg font-semibold rounded-lg py-3 px-12 hover:opacity-90 transition-all duration-300"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
