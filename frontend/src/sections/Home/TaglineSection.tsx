export default function TaglineSection() {
  return (
    <section className="py-43 bg-gray-50">
      <div className="text-black text-7xl font-bold font-raleway">
        Why we're different.
      </div>

      <div className="pt-25 flex flex-cols justify-center gap-24 text-center">
        <div className="bg-green-100 border rounded-[40px] w-full flex flex-col items-center p-12">
          <div className="pb-10 text-black text-4xl font-bold font-raleway">
            Returns that Actually Return
          </div>
          <div className="text-neutral-500 text-lg font-inter">
            6-10% annual returns. No hidden fees <br />
            Just honest growth while you sleep
          </div>
          <img
            className="w-147.25 h-161.5"
            src="https://placehold.co/589x646"
          />
        </div>
        <div className="bg-green-100 border rounded-[40px] w-full flex flex-col items-center p-12">
          <div className="pb-10 text-black text-4xl font-bold font-raleway">
            Impact You Can Share
          </div>
          <div className="text-neutral-500 text-lg font-inter">
            Track your CO₂ savings, share your impact <br />
            story, and actually feel good about investing.
          </div>
          <img
            className="w-147.25 h-161.5 "
            src="https://placehold.co/589x646"
          />
        </div>
      </div>
    </section>
  );
}
