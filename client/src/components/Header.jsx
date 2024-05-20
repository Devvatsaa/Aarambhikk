import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 gap-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white">
          <span style={{ fontSize: "80%" }}>आ</span>rambhik
        </span>
      </Link>
      <TextInput
        type="text"
        placeholder="Search an opportunity.."
        rightIcon={AiOutlineSearch}
        className="hidden lg:inline"
      />
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Link
          to="/sign-in"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
        >
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign In
            </span>
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/investor"} as={"div"}>
          <Link to="/sign-up">Register as an Investor</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/pitcher"} as={"div"}>
          <Link to="/sign-up-pitcher">Register as a Pitcher</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
