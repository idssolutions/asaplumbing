import React from "react";
export default function Contact() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="mb-8 text-3xl font-bold leading-tight lg:mb-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-heading">
                Questions, Concerns, Need a Quote?
              </h2>
              <h3 className="mb-1 text-2xl font-bold font-heading">
                Address
              </h3>
              <address className="text-lg leading-loose text-blue-500">
                1228 E. McLellan Blvd. Phoenix, AZ 85014
              </address>
              <h3 className="mb-1 text-2xl font-bold font-heading">
                Phone
              </h3>
              <p className="text-lg leading-loose text-blue-500">
                (480) 796-4060
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <form action="#">
              <input
                className="w-full py-3 pl-3 mb-4 border rounded"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full py-3 pl-3 mb-4 border rounded"
                type="email"
                placeholder="E-mail"
              />
              <textarea
                className="w-full p-3 mb-4 border rounded resize-none"
                name="message"
                cols={30}
                rows={10}
                placeholder="Your Message..."
                defaultValue={""}
              />
              <button className="block px-5 py-3 text-sm font-semibold text-white transition duration-200 bg-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:border-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
