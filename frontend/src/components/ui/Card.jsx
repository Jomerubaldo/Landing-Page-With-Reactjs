const Card = ({ icon, headline, body }) => {
  return (
    <div className="group bg-white p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{headline}</h3>
      <p className="leading-relaxed text-[#75739E] mb-6">{body}</p>
      <a
        className="text-[#4364FF] font-bold flex items-center group-hover:gap-2 transition-all"
        href="#"
      >
        Learn more
        <span className=" ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-4 h-4 fill-current text-[#4364FF]"
          >
            <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
          </svg>
        </span>
      </a>
    </div>
  );
};
export default Card;
