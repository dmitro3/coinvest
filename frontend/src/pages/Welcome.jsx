import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import { MdArrowRightAlt } from "react-icons/md";
import { BsShieldFillCheck,BsEmojiWinkFill,BsLightbulbFill } from "react-icons/bs";
const Welcome = () => {
  return (
    <PageLayout>
      <HeroSection />
      <Section>
        <div className="flex justify-between items-center pt-2 w-full mb-12">
          <div className="w-full flex-1">
            <h1 className="text-5xl flex-1 max-w-md">
              We Secure and Protect you
            </h1>
          </div>
          <div className="w-full flex-1 flex-col justify-end items-end space-y-3">
            <p className="text-gray-400 text-xl">
              How do P2P Escrow Service of Crypto Exchange Protect <br />
              Users from Scammers?
            </p>
            <div className="flex space-x-3 items-center">
              <Link
                to="/app"
                className="flex items-center space-x-3 font-semibold rounded-xl text-green-500"
              >
                <span>Learn More</span>
                <MdArrowRightAlt className="mt-1 text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
            <div className="hover:bg-gray-700 bg-opacity-25 p-8 duration-150 transition-transform rounded-2xl flex flex-col space-y-3 max-w-sm">
                <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
                    <BsShieldFillCheck/>
                </div>
                <p className="text-white text-xl font-semibold">Truly Secure</p>
                <p className="text-gray-400 text-sm">
                    Escoin system will keep your funds truly secure during the entire transaction process.
                </p>
            </div>

            <div className="hover:bg-gray-700 bg-opacity-25 p-8 duration-150 transition-transform rounded-2xl flex flex-col space-y-3 max-w-sm">
                <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
                    <BsLightbulbFill/>
                </div>
                <p className="text-white text-xl font-semibold">Fully Compliant</p>
                <p className="text-gray-400 text-sm">
                    Good to know who you're dealing with, so we verify each and every user ensuring transactions are fully compliant.
                </p>
            </div>

            <div className="hover:bg-gray-700 bg-opacity-25 p-8 duration-150 transition-transform rounded-2xl flex flex-col space-y-3 max-w-sm">
                <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
                    <BsEmojiWinkFill/>
                </div>
                <p className="text-white text-xl font-semibold">Totally Awesome</p>
                <p className="text-gray-400 text-sm">
                    We designed the Escoin platform with everything needed so it can make your transaction experience totally awesome.
                </p>
            </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Welcome;
