export default function ExperienceCard({ experience }) {
  return (
    <div className="my-6 mx-auto w-3/4">
      <div className="flex justify-between text-2xl font-semibold mb-4">
        <h3 className="">{experience.title}</h3>
        <p>{experience.timeLine}</p>
      </div>
      <article className="mb-4">
        <h3 className="text-lg mb-2 font-medium">Overview</h3>
        <span>{experience.overview}</span>
      </article>
      <article className="mb-2">
        <h3 className="text-lg mb-2 font-medium">Highlights</h3>
        <ul>
          {experience.highlights.map((element, index) => {
            return <li key={`highlight-${index + 1}`}>{element}</li>;
          })}
        </ul>
      </article>
      <article className="mb-4">
        <h3 className="text-lg mb-2 font-medium">Skills</h3>
        <ul className="grid grid-cols-2">
          {experience.skills.map((element, index) => {
            return <li key={`highlight-${index + 1}`}>{element}</li>;
          })}
        </ul>
      </article>
      <article>
        <h3 className="text-lg mb-2 font-medium">
          Web apps worked at {experience.title}
        </h3>
        <ul className="grid grid-cols-2">
          {experience.skills.map((element, index) => {
            return <li key={`highlight-${index + 1}`}>{element}</li>;
          })}
        </ul>
      </article>
    </div>
  );
}
