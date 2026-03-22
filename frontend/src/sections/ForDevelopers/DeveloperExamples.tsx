export interface IllustrativeProjectProps {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  stage: string;
  description: string;
}

const ProjectExamples: IllustrativeProjectProps[] = [
  {
    id: 1,
    name: "Southfield Solar Farm",
    location: "Somerset, UK",
    imageUrl: "https://placehold.co/400x200",
    stage: "Construction",
    description:
      "A 5MW ground-mounted solar PV project serving approximately 1,500 homes. Placeholder — illustrative only.",
  },
  {
    id: 2,
    name: "Cairn Ridge Wind",
    location: "Scottish Borders, UK",
    imageUrl: "https://placehold.co/400x200",
    stage: "Development",
    description:
      "A 10MW onshore wind project at planning stage, targeting grid connection in 2027. Placeholder — illustrative only.",
  },
  {
    id: 3,
    name: "Humber BESS",
    location: "Humberside, UK",
    imageUrl: "https://placehold.co/400x200",
    stage: "Development",
    description:
      "A 20MW battery energy storage system co-located with an existing wind asset. Placeholder — illustrative only.",
  },
];

export default function DeveloperExamples() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-8 pt-6 px-14">
        {ProjectExamples.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl border-gray-200 shadow-xl justify-center p-6"
          >
            <h3>{project.name}</h3>
            <img
              src={project.imageUrl}
              alt="Placeholder image"
              className="w-full object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between">
              <span>{project.location}</span>
              <span>{project.stage}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-light text-gray-500 text-sm mt-6 mx-14">
        Examples are for illustrative purposes only.
      </p>
    </section>
  );
}
