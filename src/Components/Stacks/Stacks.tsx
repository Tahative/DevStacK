import { use } from "react";
import type { Stack } from "../../types/stackType";
import AvailableStacks from "../AvailableStacks";

interface StacksProps {
  stacksPromise: Promise<Stack[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
  const stacks = use(stacksPromise);
  console.log(stacks, "stacks");
  return (
    <div>
      <AvailableStacks stacks={stacks}/>
    </div>
  );
};

export default Stacks;