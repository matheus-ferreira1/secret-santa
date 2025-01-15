import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const CallToAction: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Ready to Simplify Your Secret Santa?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Join thousands of happy users and make your gift exchanges
            memorable.
          </p>
          <Link
            to="/register"
            className={cn(
              buttonVariants(),
              "bg-purple-600 hover:bg-purple-700"
            )}
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </section>
  );
};
