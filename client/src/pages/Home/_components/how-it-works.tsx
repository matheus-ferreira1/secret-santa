export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Create a Group
            </h3>
            <p className="text-gray-300">
              Set up your Secret Santa group and invite participants.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Draw Names</h3>
            <p className="text-gray-300">
              Our system randomly assigns gift recipients to each participant.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Exchange Gifts
            </h3>
            <p className="text-gray-300">
              Enjoy the excitement of giving and receiving gifts!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
