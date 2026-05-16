export interface MemberCardProp {
  image: string;
  name: string;
  role: string;
}

export default function MemberCard({ image, name, role }: MemberCardProp) {
  return (
    <div className="py-10 flex flex-col gap-4">
      <img src={image} alt={name} className="aspect-[3/4] object-cover" />
      <div className="text-[#063B27] font-inter">
        <h2 className="font-bold font-xl">{name}</h2>
        <p className="font-normal font-base">{role}</p>
      </div>
    </div>
  );
}
