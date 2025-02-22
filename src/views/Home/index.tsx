import { H5 } from "./h5";
import { PC } from "./pc";

export const Home = () => {
  return (
    <>
      <div className="block md:hidden w-full">
        <H5 />
      </div>
      <div className="hidden md:block">
        <PC />
      </div>
    </>
  );
};
