import type { Stack } from "../types/stackType";
import rating from "../assets/star-solid-full.svg";

type AvailableStacksProps = {
  stacks: Stack[];
};

const getBadgeClass = (badge: string): string => {
  if (badge === "Popular") {
    return "badge badge-outline badge-info";
  } else if (badge === "Essential") {
    return "badge badge-outline badge-success";
  } else if (badge === "Fast") {
    return "badge badge-outline badge-warning";
  } else if (badge === "Enterprise") {
    return "badge badge-outline badge-secondary";
  } else if (badge === "") {
    return "badge badge-outline badge-neutral";
  } else if (badge === "Top SQL") {
    return "badge badge-outline badge-primary";
  } else {
    return "badge badge-outline badge-error";
  }
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
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stacks.map((stack: Stack) => {
            return (
              <div className="grid cols-span-3 border- border-[#cab6b6]  ">
                <div className="card bg-base-100 py-[21px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]  ">
                  <div className="flex justify-between mx-[25px]">
                    <figure>
                      <img className="w-7 h-7 " src={stack.icon} alt="icon" />
                    </figure>
                    <div>
                      {" "}
                      <div className={getBadgeClass(stack.badge)}>
                        {stack.badge}
                      </div>
                    </div>
                  </div>

                  <div className="card-body ">
                    <h2 className="card-title text-lg">{stack.name}</h2>
                    <p className="text-sm font-normal text-[#64748B] text-justify">
                      {stack.description}
                    </p>

                      <div className="divider divider-end my-1 "></div>
                    <div className="card-actions w-[full]">
                      <div className="flex  justify-items-stretch ">
                        <p className="text-[#475569] bg-[#dce1e6cc] rounded-sm px-2  ">{stack.category}</p>
                        <p className="pr-6">{stack.difficulty}</p>
                        <div className="flex">
                          <img src={rating} alt="" className="w-4 h-4 pr-0.5 " />{" "}
                          {stack.rating}
                        </div>
                      
                        
                        
                      </div>
                      <button className="btn gap-0 btn-primary border-0 rounded-lg bg-[#000006] text-white shadow-none overflow-hidden w-full ">
                        Buy Now
                      </button>
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
            <p className="text-sm text-gray-400">
              No technologies selected yet.
            </p>
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
