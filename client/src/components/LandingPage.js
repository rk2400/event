import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
import Header from "@/components/Landing_Page_partials/Header";
import HeroHome from "@/components/Landing_Page_partials/HeroHome";
import LandingPageDevelopers from "@/utils/landing_page_developers";
import LandingLogos from "@/utils/landinglogo";
import React from "react";
import { useEffect } from "react";

const [logo1, logo2] = LandingLogos;
const [feature1, feature2, feature3] = LandingPageDevelopers;

function LandingPage() {

    // run the server when a user enters the site
    const fetchAllEvents = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
        );
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    };

    useEffect(() => {
        fetchAllEvents();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col min-h-screen overflow-x-hidden ">
                <Header className="overflow-x-hidden" />

                <main className="grow">
                    <HeroHome images={[logo1, logo2]} />
                    <FeaturesZigZag images={[feature1, feature2, feature3]} />
                    {/* { <Developers images={[dev1, dev2, dev3, pm1]} /> } */}
                </main>
            </div>
        </div>
    );
}

export default LandingPage;
