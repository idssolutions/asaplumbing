import React, { useState } from "react";
import { toast } from "react-nextjs-toast";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = ({ target }) => {
    setContactData({ ...contactData, [target.name]: target.value });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => {
        setSubmitted(true);
        setContactData({ name: "", email: "", message: "" });
        toast.notify("Your message was sent successfully!", {
          duration: 5,
          type: "success",
        });
      })
      .catch((err) => {
        toast.notify("There was an error when trying to send your message.", {
          duration: 5,
          type: "error",
        });
      });
  };
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="mb-8 text-3xl font-bold leading-tight lg:mb-12 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-heading">
                Questions, Concerns, Need a Quote?
              </h2>
              <h3 className="mb-1 text-2xl font-bold font-heading">Address</h3>
              <address className="text-lg leading-loose text-blue-500">
                1228 E. McLellan Blvd. Phoenix, AZ 85014
              </address>
              <h3 className="mb-1 text-2xl font-bold font-heading">Phone</h3>
              <p className="text-lg leading-loose text-blue-500">
                (480) 796-4060
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                className="w-full py-3 pl-3 mb-4 border rounded"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                className="w-full py-3 pl-3 mb-4 border rounded"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <textarea
                onChange={handleChange}
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
