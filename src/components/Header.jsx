import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Dowell_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const targetUrl = "/dowelleducation/workspace-dashboard";

  return (
    <header className="container py-2 md:py-5 px-9 bg-green-800 ">
      {location.pathname === targetUrl ? (
        <img src={Logo} width={56} alt="dowell_logo" className="ml-4 rounded" />
      ) : (
        <ChevronLeftIcon
          className="size-9 md:size-11 text-white cursor-pointer"
          onClick={() => navigate(-1)}
        />
      )}
    </header>
  );
};

export default Header;
