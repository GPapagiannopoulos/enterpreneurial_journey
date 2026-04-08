import LearnHeroIcon from "../../components/icons/learn_hero_icon";

export default function Hero() {
  return (
    <section className="pt-28 pb-20.5 border-b">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-10.5 justify-center">
          <h2 className="text-8xl font-bold font-raleway">
            Everything you need to know.
          </h2>
          <p className="text-neutral-500 text-2xl font-inter">
            New to green investing? Start with the basics. <br />
            Already experienced? Dive into the detail.
          </p>
        </div>
        <div className="w-174 h-153.25 relative shrink-0">
          <div className="w-full h-full bg-green-100 rounded-[40px] absolute inset-0" />
          <LearnHeroIcon className="absolute -top-38.5 left-40" />
        </div>
      </div>
    </section>
  );
}
