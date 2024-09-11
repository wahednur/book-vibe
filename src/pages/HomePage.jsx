import Books from "../components/Books/Books/Books";
import HomeSlider from "../components/Slider/HomeSlider/HomeSlider";

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <h1 className="text-3xl md:text-5xl text-center font-bold mt-[100px] mb-[36px]">
        Books
      </h1>
      <Books />
    </div>
  );
};

export default HomePage;
