export interface WhyCard {
  title: string;
  description: string;
}

export default function BenefitsCard({ title, description }: WhyCard) {
  return (
    <div className="w-full lg:min-h-25.5 flex flex-col gap-6 bg-[#BDDBCD5C] rounded-lg p-6 lg:p-8">
      <h3 className="text-teal-950 text-3xl font-semibold font-['DM_Sans']">
        {title}
      </h3>
      <p className=" text-teal-950 text-2xl font-normal font-['Inter'] leading-9">
        {description}
      </p>
    </div>
  );
}
