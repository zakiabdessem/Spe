import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import speLogo from "./assets/navbar/SPE_White_Logo.png";
import o2r_logo from "./assets/O2R.png";
import arrows from "./assets/arrows.svg";
import sec3_1 from "./assets/sec3-1.svg";
import sec3_2 from "./assets/sec3-2.svg";
import person_1 from "./assets/person-1.jpg";
import person_2 from "./assets/person-2.jpg";
import trainer_1 from "./assets/trainer-1.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      <nav className="flex flex-wrap justify-between items-center mx-4 md:mx-20 my-4">
        <a href="/" className="w-28 h-28">
          <img className="" src={speLogo} />
        </a>

        <button
          className="block md:hidden text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-10 w-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8999 13.558L12 21.457L4.10002 13.558C2.80002 12.257 2 10.488 2 8.55401C2 6.62 2.80002 4.851 4.10001 3.55001C5.40001 2.24901 7.16899 1.449 9.103 1.449C11.037 1.449 12.8059 2.24901 14.1059 3.55001C15.4059 4.851 16.206 6.62 16.206 8.55401C16.206 10.489 15.406 12.257 14.1059 13.558L12 15.663L9.89394 13.558C8.59394 12.257 7.82494 10.488 7.82494 8.55401C7.82494 6.62 8.59394 4.851 9.89394 3.55001C11.1939 2.24901 12.9629 1.449 14.897 1.449C16.831 1.449 18.6 2.24901 19.9 3.55001C21.2 4.851 22 6.62 22 8.55401C22 10.488 21.2 12.257 19.8999 13.558Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
              />
            )}
          </svg>
        </button>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:justify-between w-full md:w-auto`}
        >
          <li className="text-white m-5 font-poppins">HOME</li>
          <li className="text-white m-5 font-poppins">ABOUT</li>
          <li className="text-white m-5 font-poppins">AGENDA</li>
          <li className="text-white m-5 font-poppins">SPEAKERS</li>
          <li className="text-white m-5 font-poppins">SPONSORS</li>
          <li className="text-white m-5 font-poppins">CONTACT</li>
        </ul>
      </nav>

      <div className="bg-svg">
        <section className="flex flex-col justify-center items-center">
          <img src={o2r_logo} className="w-auto max-h-[650px] bg-transparent" />
          <h1 className="text-white relative bottom-36 text-4xl font-montserrat font-bold">
            18 to 21 June, 2023
          </h1>
          <img
            src={arrows}
            className="m-5 bg-transparent relative bottom-56 h-80 w-80"
          />
          <button className="m-5 px-6 py-2 border-2 border-[rgb(177,128,21)] text-4xl text-white font-light font-DMSans h-20 w-auto relative bottom-[310px]">
            Register Here
          </button>
        </section>

        <section className="relative bottom-52 md:bottom-72">
          <div className="flex flex-col md:flex-row items-center mx-4 md:mx-auto">
            <div className="text-white m-4 md:m-10">
              <h1 className="text-2xl md:text-4xlfont-poppins font-bold mb-4 md:mb-8">
                Who are we?
              </h1>
              <div className="text-md md:text-lg font-poppins font-normal leading-relaxed">
                <div className="my-3">
                  The Society of Petroleum Engineers (SPE) is a global
                  organization established in 1957 for professionals in the oil
                  and gas industry.
                </div>
                <div className="my-3">
                  With over 156,000 members across 154 countries, the SPE
                  provides technical resources, networking events, and
                  professional development opportunities to its members.
                </div>
                <div className="my-3">
                  The organization is dedicated to promoting safety standards,
                  best practices, innovation, and technical excellence in the
                  energy industry.
                </div>
                <div className="my-3">
                  The SPE student chapters, located in universities worldwide,
                  focus on raising awareness about careers and opportunities in
                  the energy industry among students and young professionals.
                  SPE student chapters organize events such as conferences,
                  workshops, and competitions to help students develop technical
                  skills and connect with industry professionals.
                </div>
                <div className="my-3">
                  The SPE and its student chapters are instrumental in enhancing
                  safety, quality, and sustainability in the energy industry.
                </div>
              </div>
            </div>
            <img
              className="h-80 md:h-auto m-4 md:m-10"
              src={speLogo}
              alt="spe logo"
            />
          </div>
        </section>

        <section className="relative bottom-52 md:bottom-96">
          <div
            className="relative md:absolute md:top-[450px] md:left-0 w-full h-full flex flex-col justify-center items-center"
            style={{ position: "relative", bottom: "52px" }}
          >
            <div className="images-wrapper">
              <img
                src={sec3_2}
                className="justify-start w-auto h-96 object-cover absolute left-0 mt-4"
              />
              <img
                src={sec3_1}
                className="justify-end w-auto h-96 object-cover absolute right-0 mt-2 "
              />
            </div>
          </div>

          <style>
            {`@media (max-width: 767px) {
  .images-wrapper {
    display: none;
  }
}`}
          </style>
          <div className="flex flex-col justify-center items-center">
            <img
              src={o2r_logo}
              className="w-auto max-h-[650px] bg-transparent"
            />
            <h1 className="text-white relative bottom-36 text-4xl font-montserrat font-semibold">
              18 to 21 June, 2023
            </h1>
            <p className="m-5 relative bottom-28 text-center text-white text-md md:text-lg font-poppins font-normal leading-relaxed md:px-64">
              <span className="text-[#FAB41E]">Oil2Renewables</span> is an event
              that will take place in Batna, Algeria, with the aim of finding
              solutions toaddress the challenges of the{" "}
              <span className="text-[#FAB41E]">energy sector</span> and{" "}
              <span className="text-[#FAB41E]">climate change</span>. The event
              will bring together experts, researchers, and industry
              representatives to discuss the energy transition to renewable
              sources, greenhouse gas emissions reduction, and the promotion of
              environmental sustainability in the energy sector. Topics to be
              addressed will include{" "}
              <span className="text-[#FAB41E]">New technologies</span>,{" "}
              <span className="text-[#FAB41E]">innovations</span> in renewable
              energy sources, energy security and economic competitiveness, as
              well as public-private partnership opportunities to support the
              energy transition. The event will last for 5 days and will gather
              over <span className="text-[#FAB41E]">100 participants</span> from
              various universities, schools, and{" "}
              <span className="text-[#FAB41E]">national</span> and{" "}
              <span className="text-[#FAB41E]">international</span> institutes.
            </p>
          </div>
        </section>

        <section class="relative bottom-52 md:bottom-64 m-10">
          <h1 class="text-white relative bottom-36 text-6xl font-montserrat font-semibold">
            Our Conference Speakers
          </h1>
          <div class="relative bottom-24 flex flex-col justify-evenly items-center md:flex-row">
            <div class="m-2 flex flex-col">
              <img class="max-w-xl max-h-64 rounded-lg" src={person_1} alt="" />

              <div>
                <h1 class="m-2 text-white text-2xl font-poppins  font-medium">
                  Speaker 1
                </h1>
                <p class="m-2 max-w-xl text-white text-2xl font-montserrat font-medium">
                  Uses a general purpose laptop with average performance, mostly
                  to browse the Internet, send emails, and pictures.
                </p>
              </div>
            </div>
            <div class="m-2 flex flex-col">
              <img class="max-w-xl max-h-64 rounded-lg" src={person_2} alt="" />

              <div>
                <h1 class="m-2 text-white text-2xl font-poppins  font-medium">
                  Speaker 2
                </h1>
                <p class="m-2 max-w-xl text-white text-2xl font-montserrat font-medium">
                  Uses a general purpose laptop with average performance, mostly
                  to browse the Internet, send emails, and pictures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="relative bottom-52 md:bottom-64 m-10 flex flex-col justify-evenly items-center md:flex-row">
          <h1 class="text-white relative bottom-36 text-6xl font-montserrat font-semibold">
            Our <span className="block m-4">Trainers</span>
          </h1>
          <div
            class="relative bottom-24 flex
          flex-col justify-evenly items-center"
          >
            <div class="flex flex-row items-center justify-between m-2">
              <img
                class="max-w-md max-h-96 rounded-lg"
                src={trainer_1}
                alt=""
              />

              <div>
                <h1 class="m-2 text-white text-2xl font-poppins font-medium">
                  Trainer
                </h1>
                <p class="m-2 max-w-xl text-white text-lg md:text-2xl leading-relaxed font-montserrat font-medium">
                  Ms. Dina Djeghar is a dedicated professional in the field of Industrial Engineering, with a strong focus on occupational health and safety. She holds a Ph.D. in Industrial Engineering from the University of BATNA 2, where she also completed her Bachelor's degree in Computer Systems and obtained a Master's degree in Industrial Engineering.
                </p>
              </div>
              
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
