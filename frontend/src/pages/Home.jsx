import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20">
          <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-2 gap-12 items-center">
            {/*this area for breakpoints */}
            <div>
              <span className="text-[#4364FF] font-bold mb-4 block">
                Productivity Redefined
              </span>
              <h1 className="text-6xl font-bold mb-8 font-['Manrope']">
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
                  className=" bg-[#D0CDFF] text-[#3E37A0] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                  label="Watch Demo"
                />
              </div>
            </div>
            {/*this area for breakpoints */}
            <div>
              <div className="relative bg-[#DCD9FF] rounded-3xl p-4 shadow-2xl scale-100 translate-x-12 rotate-1 ">
                <img
                  className="rounded-2xl w-full h-auto object-cover"
                  alt="Tasker Dashboard Mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBICrobd3pha3tZTKGCExrg_iORqzM_IOV3MDOChK8bgrIzTZoCiLtDKkr51dqkX_Mah24zHpfA2FDOnMoTzaaTj1NoloVXo-sViwxuxQgrxIjn4JFiz65nOAmX1W2RCY_A6GcT-X-1SFFuIRGw6dv-lFnzZJuCsDB_cacNfZjVTCWY9Vk9GiqqIK83mmucmejCCsPcRPrRQgRY1o3rmyiinZ1dTK-ZhXxThQC7gy4eh0vx7We9dyrgh2ArSZs1svPh745mTEqu96dP"
                />
                <div className="absolute -bottom-9.5 -left-9.5 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="w-10 h-10 fill-current text-[#4364FF]"
                      >
                        <path d="M192 192C192 174.3 206.3 160 224 160C241.7 160 256 174.3 256 192L256 199.8C256 227.5 253.6 255.1 248.9 282.3L164.5 307.6C123.9 319.8 96.1 357.2 96.1 399.6L96.1 432L24.1 432C10.8 432 .1 442.7 .1 456C.1 469.3 10.8 480 24.1 480L96.6 480C100.8 516 131.4 544 168.6 544C194.6 544 218.6 530.1 231.5 507.5L245.4 483.2C272.2 436.2 291.9 385.5 303.8 332.7L398.2 304.4L385.7 341.9C382.4 351.7 384.1 362.4 390.1 370.7C396.1 379 405.7 384 416 384L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L460.4 320L478.4 266.1C482.2 254.8 479.3 242.3 471 233.7C462.7 225.1 450.3 221.9 438.8 225.3L316.4 262.1C318.8 241.4 320 220.7 320 199.8L320 192C320 139 277 96 224 96C171 96 128 139 128 192L128 224C128 241.7 142.3 256 160 256C177.7 256 192 241.7 192 224L192 192zM182.8 369L231.8 354.3C221.4 388.1 207.3 420.7 189.7 451.5L175.8 475.8C174.3 478.4 171.5 480.1 168.4 480.1C163.7 480.1 159.9 476.3 159.9 471.6L159.9 399.7C159.9 385.6 169.2 373.1 182.7 369zM616 480C629.3 480 640 469.3 640 456C640 442.7 629.3 432 616 432L323.1 432C316.6 448.3 309.4 464.3 301.5 480L616 480z" />
                      </svg>
                    </span>
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
        </section>

        <section className="bg-[#f2eeff] py-22">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex justify-between pb-14">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                  Designed for the <br />
                  next generation of work.
                </h2>
              </div>
              <p className="text-lg max-w-md pb-6">
                We've removed the borders of noise of legacy software to give
                you a fluid canvas for collaboration.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <Card
                headline="Hyper-Speed Engine"
                body="Zero latency interactions. Every click is instant, every transition is fluid. Built on our proprietary sync engine."
              />
              <Card
                headline="Intelligent Layering"
                body="Organize work in contextual depth. Tasks live where they belong, not just in a list. Drag, drop, and nest infinitely."
              />
              <Card
                headline="Unified Velocity"
                body="Collaborate without collisions. Live presence and real-time cursor tracking ensure your team stays in perfect rhythm."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
