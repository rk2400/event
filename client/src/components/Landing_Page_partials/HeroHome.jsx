import React from 'react';

function HeroHome({ images }) {
    return (
        <section style={{backgroundColor:"black"}} className="">
            <br />
            <br />
            <br />
            {/* <br />
            <br /> */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Hero content */}
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 m-2">
                            {/* {"Charity"}       */}
                            <img
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={images[1].src}
                                    width="540"
                                    height="405"
                                    alt={images[0].title}
                                />                      
                            {/* <span className="text-[color:var(--darker-secondary-color)]">
                                Sphere
                            </span> */}
                            {/* {"Sphere>"} */}
                            <br />
                            <p className="mt-3 text-5xl text-gray-500">
                                {"Volunteering Opportunities and Events"}
                            </p>
                        </h1>
                        {/* <p className="text-2xl text-gray-500 mb-8">
                            "Bringing Joy of Volunteering to Everyone."
                        </p> */}
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div>
                                <a
                                    href="/users/signin"
                                    className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
                                >
                                    Signin
                                </a>
                            </div>
                            <div>
                                <a
                                    className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                    href="/users/signup"
                                >
                                    Signup
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
