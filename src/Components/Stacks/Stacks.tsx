import { use } from "react";
import type { Stack } from "../../types/stackType";

interface StacksProps {
  stacksPromise: Promise<Stack[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
  const stacks = use(stacksPromise);
  console.log(stacks, "stacks");
  return (
    <div>

    </div>
  );
};

export default Stacks;