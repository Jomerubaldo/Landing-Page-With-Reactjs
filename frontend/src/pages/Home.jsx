import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FeatureItem from '../components/ui/FeatureItem';
import CircleDescription from '../components/ui/CircleDescription';

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
              <p className="text-xl text-[#75739E] mb-10 leading-relaxed">
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
              <div className="relative bg-[#DCD9FF] rounded-3xl p-4 shadow-2xl scale-100 translate-x-10 rotate-1 ">
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
              <p className="text-lg text-[#75739E] max-w-md pb-6">
                We've removed the borders of noise of legacy software to give
                you a fluid canvas for collaboration.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-10 h-10 fill-current text-white"
                  >
                    <path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" />
                  </svg>
                }
                headline="Hyper-Speed Engine"
                body="Zero latency interactions. Every click is instant, every transition is fluid. Built on our proprietary sync engine."
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-10 h-10 fill-current text-white"
                  >
                    <path d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z" />
                  </svg>
                }
                headline="Intelligent Layering"
                body="Organize work in contextual depth. Tasks live where they belong, not just in a list. Drag, drop, and nest infinitely."
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-10 h-10 fill-current text-white"
                  >
                    <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
                  </svg>
                }
                headline="Unified Velocity"
                body="Collaborate without collisions. Live presence and real-time cursor tracking ensure your team stays in perfect rhythm."
              />
            </div>
          </div>
        </section>

        <section className="relative pt-32 pb-20">
          <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
                One command center
                <br />
                for everything.
              </h2>
              <p className="text-xl text-[#75739E] leading-relaxed mb-12">
                Stop tab-switching. Tasker integrates with your existing tech
                stack - Slack, Github, Figma, and Notion - to provide a single,
                unified source of truth.
              </p>
              <div className="space-y-6">
                <FeatureItem
                  icon={
                    <path d="M64 176C64 149.5 85.5 128 112 128L528 128C554.5 128 576 149.5 576 176L576 257.4C551.6 246.2 524.6 240 496 240C408.3 240 334.3 298.8 311.3 379.2C304.2 377.9 297.2 375 291.2 370.4L83.2 214.4C71.1 205.3 64 191.1 64 176zM304 432C304 460.6 310.2 487.6 321.4 512L128 512C92.7 512 64 483.3 64 448L64 260L262.4 408.8C275 418.2 289.3 424.2 304.1 426.7C304.1 428.5 304 430.2 304 432zM352 432C352 352.5 416.5 288 496 288C575.5 288 640 352.5 640 432C640 511.5 575.5 576 496 576C416.5 576 352 511.5 352 432zM553.4 371.1C546.3 365.9 536.2 367.5 531 374.6L478 447.5L451.2 420.7C445 414.5 434.8 414.5 428.6 420.7C422.4 426.9 422.4 437.1 428.6 443.3L468.6 483.3C471.9 486.6 476.5 488.3 481.2 487.9C485.9 487.5 490.1 485.1 492.9 481.4L556.9 393.4C562.1 386.3 560.5 376.2 553.4 371.1z" />
                  }
                  title="Bi-directional Sync"
                  description="Update a task in Tasker, and it reflects in your Jira board instantly."
                />
                <FeatureItem
                  icon={
                    <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" />
                  }
                  title="Enterprise Security"
                  description="SOC2 Type II compliant with end-to-end encryption for all enterprise data."
                />
              </div>
            </div>
            <div className="relative">
              <img
                alt="work-context"
                className="rounded-[2.5rem] shadow-2xl h-150 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApUijnM32xokQXBaQWA8DfkquZ0GcoHwgJGfKgQbxz3TPmS4pMWT1HsRefYypYTLWWsAmYrm5iQuAdZUPDt9p4Z9jEU3kUeTPJZNKXtsPjxwXPFZ00aHtqy9viiWCWNf-bjKF_8GmgYuGiTILwMYhbiwyb6vBclGj4MwMIjqlretwze2FsVmgGu29a8tDD63JrfS_8GQxVtmvaVx3GZ580p_Hqql-CmWkN78iqlrbpsDqdbO0r2zYdeQWPo9Az-hKYjhgAVWc00__c"
              />
              <div className="absolute top-12 -right-10  bg-[#FFFFFF] p-8 rounded-2xl shadow-2xl max-w-sm block">
                <p className="text-lg font-medium italic mb-4">
                  "Tasker didn't just organize our tasks; it changed how we
                  think about productivity entirely."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-bold">Sarah Chen</p>
                    <p className="text-sm tex-[#595781]">
                      Design Lead, Apex Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9e5ff] py-32">
          <div className="max-w-screen-2xl mx-auto px-12 text-center">
            <h2 className="text-5xl font-extrabold tracking-tight mb-20">
              The 3-step evolution
            </h2>
            <div className="grid grid-cols-3 gap-16 relative">
              {/* Connector line */}
              <div className="bg-[#aba8d7]/30 absolute top-1/3 left-0 w-full h-0.5 block z-0"></div>
              <CircleDescription
                number="01"
                title="Integrate"
                description="Connect your tools and import your existing workflows in under 5 minutes."
              />
              <CircleDescription
                number="02"
                title="Accelerate"
                description="Use our AI-assisted sorting to prioritize high-impact actions automatically."
              />
              <CircleDescription
                number="03"
                title="Dominate"
                description="Execute at scale with real-time analytics and team momentum tracking."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
