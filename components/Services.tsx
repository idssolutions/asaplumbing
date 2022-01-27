import React from "react";

export default function Services() {
  const services = [
    {
      icon: (
        <img src="/water-heater.png" alt="Water Heater" className="w-12 h-12" />
      ),
      heading: "Water Heater Installation",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/running-toilet.png" alt="Running Toilets" className="w-12 h-12" />
      ),
      heading: "Running Toilets",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
       <img src="/toilet-replacement.png" alt="Toilet Replacement" className="w-12 h-12" />
      ),
      heading: "Toilet Replacement",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/dripping-faucet.png" alt="Dripping Faucet" className="w-12 h-12" />
      ),
      heading: "Dripping Faucets",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/faucet-replacement.png" alt="Faucet Replacement" className="w-12 h-12" />
      ),
      heading: "Faucet Replacement",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/dripping-shower.png" alt="Dripping Shower" className="w-12 h-12" />
      ),
      heading: "Dripping Shower",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/water-treatment.png" alt="Wate Treatment" className="w-12 h-12" />
      ),
      heading: "Water Treatment",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/reverse-osmosis.png" alt="Reverse Osmosis" className="w-12 h-12" />
      ),
      heading: "Reverse Osmosis",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: <img src="/clog.png" alt="Clogs" className="w-12 h-12" />,
      heading: "Clogs",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/water-pressure.png" alt="Water Pressure" className="w-12 h-12" />
      ),
      heading: "High Water Pressure",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
    {
      icon: (
        <img src="/leaky-pipes.png" alt="Leaky Pipes" className="w-12 h-12" />
      ),
      heading: "Leaking Water Pipes",
      content:
        "Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center -mx-4 -mb-16">
          {services.map(({ icon, heading, content }) => (
            <div className="flex items-center justify-center m-3 border border-blue-500 rounded xs:w-full sm:w-full md:w-auto lg:w-auto xl:w-auto ">
              <div className="flex items-center justify-center">
                <span className="m-3">{icon}</span>
                <div className="m-3">
                  <h3 className="text-xl font-bold md:text-2xl font-heading">
                    {heading}
                  </h3>
                  {/* <p className="text-lg leading-loose text-gray-500 md:text-lg md:leading-loose">
                    {content}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
