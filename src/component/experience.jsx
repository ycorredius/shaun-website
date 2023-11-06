import data from "../data/experience";
import ExperienceCard from "./experienceCard";

export default function Experience() {
  return (
    <div className="flex flex-col mx-28">
      <h1 className="text-3xl font-bold text-center">What Have I done?</h1>
      {data.map((value, index) => {
        return <ExperienceCard experience={value} key={index} />;
      })}
    </div>
  );
}
