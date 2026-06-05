export interface StepsCardProps {
  icon: React.ReactNode;
  stepName: string;
  stepDescription: string;
}

export default function StepsCard({
  icon,
  stepName,
  stepDescription,
}: StepsCardProps) {
  return (
    <div className="w-full lg:max-w-131.25 lg:min-h-113.25 px-4 pt-3.5 pb-5 lg:px-10 lg:py-12 bg-[#063B27] rounded-lg flex flex-col">
      <div className="w-full flex flex-col justify-start items-start gap-2 lg:gap-10">
        <div className="size-6 lg:size-22 bg-gray-200 text-[#063B27] rounded-[57px] outline-1 -outline-offset-1 flex items-center justify-center">
          {icon}
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2 lg:gap-8 pr-9 lg:pr-0">
          <h2 className="text-white text-sm lg:text-4xl font-semibold font-['DM_Sans'] lg:leading-8 tracking-tight">
            {stepName}
          </h2>
          <p className="text-white text-sm lg:text-3xl font-inter lg:leading-9">
            {stepDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
