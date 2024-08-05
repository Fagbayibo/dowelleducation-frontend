import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Bars3Icon } from "@heroicons/react/20/solid";
import QrCard from "../../components/QrCard";
import Qrcode from "../../assets/Qrcode.png"

const WorkspaceScaleDetails = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSidebar = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="max-w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* This is the Sidebar section */}
        <div className="flex">
          <div
            className={`w-64 bg-white transform transition-transform duration-300 ease-in-out ${
              isToggled ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:relative absolute md:block`}
          >
            <Sidebar toggleSidebar={toggleSidebar} isToggled={isToggled} />
          </div>
          <div className="md:hidden p-3 cursor-pointer" onClick={toggleSidebar}>
            {!isToggled && <Bars3Icon className="h-6 w-6" />}
          </div>
        </div>

        {/* This is the main content area */}
        <div className="flex-1  md:p-0 overflow-auto ">
          <div className="flex flex-wrap pl-3 pt-4">
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          <QrCard imgUrl={Qrcode} details="QR Code details:" />
          </div>
          </div>
      </div>
    </div>
  );
};

export default WorkspaceScaleDetails;
