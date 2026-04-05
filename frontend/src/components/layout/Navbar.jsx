import Button from '../ui/Button';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-xl font-black text-indigo-600">
            Langding Page
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a
            className="text-indigo-600 dark:text-slate-400 font-semibold"
            href="#"
          >
            Product
          </a>
          <a
            className="text-indigo-600 dark:text-slate-400 font-semibold hover:text-indigo-500 transition-colors duration-200"
            href="#"
          >
            Features
          </a>
          <a
            className="text-indigo-600 dark:text-slate-400 font-semibold hover:text-indigo-500 transition-colors duration-200"
            href="#"
          >
            Pricing
          </a>
        </div>
        <Button
          className="bg-indigo-600 px-5 py-2 rounded-full font-medium text-sm hover:scale-95 active:scale-90 transition-transform"
          label="Get Started"
        />
      </nav>
    </header>
  );
};
export default Navbar;
