const Card = ({ headline, body }) => {
  return (
    <div className="group bg-white p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
        <span className="text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-10 h-10 fill-current text-white"
          >
            <path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" />
          </svg>
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{headline}</h3>
      <p className="leading-relaxed mb-6">{body}</p>
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
