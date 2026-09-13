type Stack = {
  id: string 
  name: string;
};

type AvailableStacksProps = {
  stacks: Stack[];
};

const AvailableStacks = ({ stacks }: AvailableStacksProps) => {
  console.log(stacks, "available stacks");

  return (
    <div>
      {stacks.map((stack) => {
        return (
          <div key={stack.id}>
            <h2>{stack.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableStacks;