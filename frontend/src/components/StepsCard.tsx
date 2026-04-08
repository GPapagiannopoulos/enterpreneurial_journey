export interface StepsCardProps {
  stepNumber: number;
  stepName: string;
  stepDescription: string;
}

export default function StepsCard({
  stepNumber,
  stepName,
  stepDescription,
}: StepsCardProps) {
  return (
    <div className="px-[52.5px] py-[61.5px] bg-white rounded-3xl shadow-sm outline-1 -outline-offset-1 outline-green-600/10 inline-flex flex-col justify-center items-center gap-2.5 z-10">
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl outline-1 -outline-offset-1 outline-green-600 flex items-center justify-center">
          <span className="text-green-700 text-2xl font-bold font-inter leading-8 tracking-tight">
            {stepNumber}
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <h2 className="text-neutral-800 text-2xl font-semibold font-inter leading-8 tracking-tight">
            {stepName}
          </h2>
          <p className="text-neutral-500 text-base font-normal font-inter leading-6">
            {stepDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
