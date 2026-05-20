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
    <div className="w-full lg:max-w-131.25 lg:min-h-113.25 px-6 py-8 lg:px-10 lg:py-12 bg-teal-950 rounded-lg flex flex-col">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <div className="size-22 bg-gray-200 rounded-[57px] outline-1 -outline-offset-1 flex items-center justify-center">
          {icon}
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <h2 className="text-white text-4xl font-semibold font-['DM_Sans'] leading-8 tracking-tight">
            {stepName}
          </h2>
          <p className="text-white text-3xl font-light font-inter leading-9">
            {stepDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
