import proifleImage from "../assets/my-profile.jpg";
import About from "./about";
import Experience from "./experience";

function Main() {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center my-20">
        <img
          src={proifleImage}
          alt="dev profile pic"
          className="aspect-[4/5] w-1/6 mr-8 rounded-lg"
        />
        <About />
      </div>
      <Experience />
    </div>
  );
}

export default Main;
