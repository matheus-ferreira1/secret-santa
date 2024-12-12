import { Link } from "react-router-dom";
import { Gift, Users, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4 lg:px-6">
      <div className="container flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Make Secret Santa <br />
            <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
              Magical Again
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Organize your Secret Santa gift exchange effortlessly. Create
            groups, invite friends, and let the holiday magic happen
            automatically.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link to="/register">
            <Button size="lg" variant={"destructive"}>
              Start Your Gift Exchange
            </Button>
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-red-500" />
            <span>Easy Gift Matching</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-green-500" />
            <span>Group Management</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span>Wishlist Sharing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
