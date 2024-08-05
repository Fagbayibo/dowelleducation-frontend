// eslint-disable-next-line react/prop-types
const QrCard = ({ imgUrl, details }) => {
    return (
      <div className="py-3 pl-5 flex flex-row gap-6 flex-wrap">
        <div className="flex justify-between items-center bg-[#E0F1E5] shadow-sm shadow-black border-x-1 border-green-700 rounded-md py-3 px-6">
          <img src={imgUrl} alt="QR Code" width={120} height={120} />
          <p className="ml-5 font-semibold">{details}</p>
        </div>
      </div>
    );
  };
  
  export default QrCard;
  