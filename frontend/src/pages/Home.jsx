import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20">
          <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-2 gap-12 items-center">
            {/*this area for breakpoints */}
            <div>
              <span className="text-[#4364FF] font-bold mb-4 block">
                Productivity Redefined
              </span>
              <h1 className="text-6xl font-bold">
                The kinetic core of your
                <span className="text-[#4364FF]">workflow.</span>
              </h1>
              <p className="text-xl mb-10 leading-relaxed">
                Tasker orchestrates your team's chaos into a symphony of
                execution. Built for modern high-performers who demand speed and
                depth.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  className=" bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                  label="Start Building Free"
                />
                <Button
                  className=" bg-[#534db6] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                  label="Watch Demo"
                />
              </div>
            </div>
            {/*this area for breakpoints */}
            <div>
              <div className="relative bg-[#6963d792] rounded-3xl p-4 shadow-2xl scale-100 translate-x-12 rotate-1 ">
                <img
                  className="rounded-2xl w-full h-auto object-cover"
                  alt="Tasker Dashboard Mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBICrobd3pha3tZTKGCExrg_iORqzM_IOV3MDOChK8bgrIzTZoCiLtDKkr51dqkX_Mah24zHpfA2FDOnMoTzaaTj1NoloVXo-sViwxuxQgrxIjn4JFiz65nOAmX1W2RCY_A6GcT-X-1SFFuIRGw6dv-lFnzZJuCsDB_cacNfZjVTCWY9Vk9GiqqIK83mmucmejCCsPcRPrRQgRY1o3rmyiinZ1dTK-ZhXxThQC7gy4eh0vx7We9dyrgh2ArSZs1svPh745mTEqu96dP"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
                  <div className="flex items-center space-x-3 mb-10">
                    <span className="text-white">auto_grap</span>
                    <span className="font-bold">Momentum Up 24%</span>
                  </div>
                  <p>
                    Your team completed 42 more tasks than last week. Keep the
                    streak!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -z-10 opacity-20">
            <div className="w-200 h-200 bg-[#879aff] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
