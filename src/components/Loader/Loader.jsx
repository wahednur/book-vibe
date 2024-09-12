import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex w-full min-h-[calc(100vh-295px)] justify-center items-center">
      <ScaleLoader color="#23BE0A" size={100} />
    </div>
  );
};

export default Loader;
