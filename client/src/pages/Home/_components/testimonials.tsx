export const Testimonials: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white/5"
      id="testimonials"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              "SecretSanta made our family gift exchange so much easier and more
              fun!"
            </p>
            <p className="text-white font-bold">- Sarah J.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              "The wish list feature is a game-changer. No more guessing what to
              buy!"
            </p>
            <p className="text-white font-bold">- Mike T.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              "We use SecretSanta for our office party every year. It's become a
              tradition!"
            </p>
            <p className="text-white font-bold">- Emily R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
