import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-6 py-3 shadow-md ">
      <div className="flex flex-wrap justify-between align-middle">
        <div className=" max-w-xs">
          <h1 className=" text-3xl font-bold text-pink-600">TweetX</h1>
        </div>

        <div className=" max-w-xl my-auto">
          <div className="flex flex-wrap gap-5 align-middle">
            {Menu.map((menu) => (
              <MenuList menu={menu} key={menu.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = [
  {
    name: "Feed",
    linkTo: "/",
  },
  {
    name: "Users",
    linkTo: "/users",
  },
  {
    name: "Profile",
    linkTo: "/profile",
  },
];

const MenuList = ({ menu }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={menu.linkTo}
      className={`text-lg font-medium ${
        pathname === menu.linkTo ? " text-pink-600" : "text-slate-300"
      }`}
    >
      {menu.name}
    </Link>
  );
};

MenuList.propTypes = {
  menu: {
    name: PropTypes.string,
    linkTo: PropTypes.string,
  },
};

export default Header;
