export default function DeveloperHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-18 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="font-extrabold text-6xl text-gray-900 leading-tight">
            Leave nothing to <br />
            <span className="text-green-600">chance</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-md">
            In a time when actions speak louder than words, we are here to help
            you make the change you want to see in the world.
          </p>
          <p className="text-lg text-gray-500 max-w-md">
            We take green projects from the drawing world and turn them into
            real impact by making sure the right eyes see them.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 w-120 border border-gray-200">
          <p>Something should go in here</p>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
            alt="some pretty flowers"
            className="w-full h-80 object-cover rounded-xl mb-4"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}
