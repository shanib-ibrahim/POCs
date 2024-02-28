import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const Breadcrumbs = location.pathname
    .split("/")
    .filter((crumb) => decodeURIComponent(crumb) !== "")
    .map((crumb) => {
      currentLink = +`/${decodeURIComponent(crumb)}`;
      return (
        <div key={decodeURIComponent(crumb)} className="flex gap-2">
          <span className="text-[#C1C8CE] ml-2">/</span>
          <span>{decodeURIComponent(crumb)}</span>
        </div>
      );
    });

  return (
    <div className="flex justify-center items-center text-xl w-full h-[50px] bg-[#FBFBFB]">
      <Link to={"/"}>
        <span className="text-[#40BFFF]">Home</span>
      </Link>
      {Breadcrumbs}
    </div>
  );
};

export default Breadcrumbs;
