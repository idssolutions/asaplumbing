export default function About() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
            <div className="mx-auto lg:max-w-md">
              <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-heading">
               Plumbing and Drain Service in the Phoenix Metro Area.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-500 lg:text-xl lg:leading-relaxed">
                With this tool, you will get much better results at work and
                develop new skills. Will you take the risk of trying the latest
                version of our application?
              </p>
              <a
                className="inline-block px-5 py-3 mb-3 text-sm font-semibold text-white transition duration-200 bg-blue-500 border border-blue-500 rounded md:mr-3 md:mb-0 hover:bg-blue-600 hover:border-blue-600"
                href="tel:4807964060"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <img
              className="object-cover w-full rounded-lg"
              src="about.jpeg"
              alt="Plumber with his wife and baby daughter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
