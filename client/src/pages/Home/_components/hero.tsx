import { Link } from "react-router-dom";
import { Gift, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="w-full pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24"
      id="hero"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="relative w-20 h-20 mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 rounded-full blur-xl opacity-50" />
            <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-4">
              <Gift className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Make Secret Santa <br />
              <span className="bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent">
                Magical Again
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
              Create groups, invite friends, and manage your gift exchange with
              ease. Let the holiday spirit begin!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-lg blur opacity-25" />
              <Link to="/register">
                <Button
                  className="relative w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0"
                  size="lg"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
