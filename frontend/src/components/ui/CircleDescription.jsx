const CircleDescription = ({ number, title, description }) => {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-[#FFFFFF] flex items-center justify-center border-4 border-[#2048e5] shadow-xl mb-8">
        <span className="text-2xl font-extrabold text-[#2048e5]">{number}</span>
      </div>
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      <p className="text-[#595781]">{description}</p>
    </div>
  );
};
export default CircleDescription;
