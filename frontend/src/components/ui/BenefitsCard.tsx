export interface WhyCard {
  title: string;
  description: string;
}

export default function BenefitsCard({ title, description }: WhyCard) {
  return (
    <div className="w-auto lg:w-full lg:min-h-25.5 flex flex-col gap-2 lg:gap-6 bg-[#BDDBCD5C] rounded-sm lg:rounded-lg p-4 lg:p-8">
      <h3 className="text-[#063B27] text-sm lg:text-3xl font-semibold font-['DM_Sans']">
        {title}
      </h3>
      <p className=" text-[#063B27] text-sm lg:text-2xl font-normal font-['Inter'] leading-4">
        {description}
      </p>
    </div>
  );
}
