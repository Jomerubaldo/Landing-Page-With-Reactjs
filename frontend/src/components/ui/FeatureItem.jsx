const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-lg bg-[#f2eeff]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-5 h-5 fill-current text-indigo-600"
          >
            {icon}
          </svg>
        </span>
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-[#595781]">{description}</p>
      </div>
    </div>
  );
};
export default FeatureItem;
