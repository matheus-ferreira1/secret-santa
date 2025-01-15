import { Gift, Users, Shuffle } from "lucide-react";

const Features = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white/5"
      id="features"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Easy Group Creation
            </h3>
            <p className="text-gray-300">
              Create and manage multiple Secret Santa groups with just a few
              clicks.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shuffle className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Automatic Matching
            </h3>
            <p className="text-gray-300">
              Let our algorithm handle the gift assignments, ensuring fairness
              and surprise.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Gift className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Wish Lists</h3>
            <p className="text-gray-300">
              Create and share wish lists to make gift-giving a breeze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
