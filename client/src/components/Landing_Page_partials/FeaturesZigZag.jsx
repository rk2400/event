import React from 'react';
import { FaCheck } from "react-icons/fa";

function FeaturesZigzag({ images }) {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <br />
                <div className="py-12 md:py-20 border-t border-gray-800">
                    <br />
                    <br />
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">
                            One Platform, Multiple Opportunities
                        </h1>
                        <p className="text-xl text-gray-500">
                        This platform of CharitySphere Provides a range of volunteering activities and events. 
                        Some Glimpses of our Activities are shown below.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={images[0].src}
                                    width="540"
                                    height="405"
                                    alt={images[0].title}
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="text-xl text-[color:var(--darker-secondary-color)] mb-2">
                                        Cleaning Drive
                                    </div>
                                    <h3 className="h3 mb-3">
                                        Cleaning the Country, One Step At a Time
                                    </h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                    Our campaigns and clean-up drives aim to bring people together to enable them to ultimately move towards sustainable choices that lead to climate action.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                                We Provide all necessary equipments.
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>Easy to sign up for the event.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                                Impactful Drive. Over 100Kgs of waste material collected.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up"
                            >
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={images[1].src}
                                    width="540"
                                    height="405"
                                    alt={images[1].title}
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-[color:var(--darker-secondary-color)] mb-2">
                                        Donation Camps
                                    </div>
                                    <h3 className="h3 mb-3">
                                        Donating Happiness
                                    </h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                    We with the help of generous supporters and volunteers, we arrange free raw and cooked food distribution time to time in slums and orphanages.
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                                100% safe food meeting all standard norms.
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>Making an impact with fullfilled stomachs.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Nobody goes empty hand. We always take surplus with us.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={images[2].src}
                                    width="540"
                                    height="405"
                                    alt={images[2].title}
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-[color:var(--darker-secondary-color)] mb-2">
                                        Plantation Drive
                                    </div>
                                    <h3 className="h3 mb-3">
                                    Helping Our Green Buddies
                                    </h3>
                                    <p className="text-xl text-gray-500 mb-4">
                                     Planting of trees is important to protect our environment against air pollution and global warming. Our young volunteers have been actively involved in organizing tree plantation campaigns. 
                                    </p>
                                    <ul className="text-lg text-gray-500 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                            Trees help to mitigate the effects of climate
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>Improves the Ecological Balance of Earth</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck
                                                className="w-3 h-3 text-green-500 mr-2"
                                            />
                                            <span>
                                                Keeping tracks of all Plants
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesZigzag;