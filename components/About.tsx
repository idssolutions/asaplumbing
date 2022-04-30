export default function About() {
    return (
        <section className="py-20" id="about">
            <div className="container px-2 mx-auto">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full px-2 mb-12 md:w-1/2 md:mb-0">
                        <div className="w-full ">
                            <h1 className="w-full p-0 mt-0 mb-6 ml-0 mr-0 text-3xl font-bold leading-tight md:leading-tight lg:text-4xl lg:leading-tight font-heading">
                                Plumbing and Drain Service in Phoenix, Arizona
                            </h1>
                            <h2 className="mb-6 text-lg font-bold leading-tight md:text-4xl md:leading-tight lg:text-2xl lg:leading-tight font-heading">
                                Plumbing is about to get simpler.
                            </h2>
                            <p className="mb-8 text-base text-left text-gray-500 lg:w-2/3 lg:text-md lg:mx-auto">
                                "We have used many other plumbers only to find
                                out they did the job incorrectly or had no idea
                                what they were doing. Tzvi [of ASA Plumbing]
                                really knows his trade and has resolved all our
                                plumbing issues. His pricing is great and his
                                knowledge even greater."
                                <br />
                                <a
                                    href="https://goo.gl/maps/J2QQRdSDGmZtSGSW9"
                                    target="_blank"
                                    className="inline-block mt-2 ml-8"
                                >
                                    - Ariella Khosh Google Review
                                </a>
                                .
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
