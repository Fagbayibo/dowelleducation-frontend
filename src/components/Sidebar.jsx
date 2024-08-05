import { SquaresPlusIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/20/solid";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleSidebar, isToggled }) => {
  return (
    <div className={`w-64 h-screen bg-[#E0F1E5] flex flex-col items-center justify-center relative`}>
      {isToggled && (
        <div className="absolute top-3 right-2 cursor-pointer" onClick={toggleSidebar}>
          <XMarkIcon className="h-6 w-6 md:hidden" />
        </div>
      )}
      <ul className="font-bold text-[16px] text-green-900 w-full text-center items-center">
        <li className="mb-6 mx-3 rounded bg-white  shadow-md shadow-green-500/50 hover:bg-green-900 py-2 border border-green-900 group transition duration-300 ease-in-out">
          <a
            href="/dowelleducation/workspace-Report"
            className="px-3 text-green-850 group-hover:text-white flex items-center justify-center"
          >
            <UserCircleIcon className="h-6 w-6 text-green-900 group-hover:text-white mr-2" />
            User Details
          </a>
        </li>
        <li className="mb-2 mx-3 rounded bg-green-900 shadow-md shadow-green-500/50 hover:bg-white py-2 border border-green-900 group transition duration-300 ease-in-out">
          <a
            href="/dowelleducation/workspace-scale-details"
            className="px-3 text-white group-hover:text-green-900 flex items-center justify-center"
          >
            <SquaresPlusIcon className="h-6 w-6 text-white group-hover:text-green-900 mr-2" />
            Scale Details
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
