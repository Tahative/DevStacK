import type { Stack } from "../types/stackType";

type AvailableStacksProps = {
  stacks: Stack[];
};

const AvailableStacks = ({ stacks }: AvailableStacksProps) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-extrabold ">
        Explore the
        <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="text-base font-normal text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* card */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack: Stack) => {
            return (
              <div className="grid cols-span-3 gap-5">
                <div className="card bg-base-100 shadow-sm">
                  <figure>
                    <img src={stack.icon} alt="icon" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Your Stack</h3>
            <p className="text-sm text-gray-400">No technologies selected yet.</p>
            <div className="mt-4 border border-dashed rounded-lg p-6 text-center text-gray-400 text-sm">
              Your stack is empty.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvailableStacks;
