const Button = ({ label }) => {
  return (
    <button className="bg-indigo-600 px-5 py-2 rounded-full font-medium text-sm hover:scale-95 active:scale-90 transition-transform">
      {label}
    </button>
  );
};
export default Button;
