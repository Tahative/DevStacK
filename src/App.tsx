import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import type { Stack } from "./types/stackType";
import Stacks from "./Components/Stacks/Stacks";



const stacksFetch = async (): Promise<Stack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const stacksPromise = stacksFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Stacks stacksPromise ={stacksPromise} />
      </Suspense>
    </>
  );
}

export default App;
