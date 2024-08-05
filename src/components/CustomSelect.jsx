import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { WorkspaceData } from "./WorkspaceData";

// eslint-disable-next-line react/prop-types
const CustomSelect = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState("Select workspace");

  const handleSelect = (workspaceName) => {
    setSelectedWorkspace(workspaceName);
    setIsOpen(false);
    if (onChange) {
      onChange(workspaceName);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-[330px]">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer bg-gray-50 border flex items-center justify-between font-semibold p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {selectedWorkspace}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </div>
      {isOpen && (
        <div className="bg-gray-300 absolute top-11 flex flex-col items-start rounded-b-lg p-2 w-full">
          {WorkspaceData.map((workspace) => (
            <div
              key={workspace.id}
              className="flex w-full justify-start hover:bg-gray-100 p-2 cursor-pointer rounded-sm"
              onClick={() => handleSelect(workspace.name)}
            >
              <h3>{workspace.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
