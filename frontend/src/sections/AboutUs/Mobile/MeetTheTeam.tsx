import type { MemberCardProp } from "../../../components/ui/MemberCard";
import Nektarios from "../../../assets/icons/AboutUs/Nektarios.png";
import Yuanzhen from "../../../assets/icons/AboutUs/Yuanzhen.png";
import Elias from "../../../assets/icons/AboutUs/Elias.png";
import Zainab from "../../../assets/icons/AboutUs/Zainab.png";
import China from "../../../assets/icons/AboutUs/China.png";
import George from "../../../assets/icons/AboutUs/George.png";
import MemberCard from "../../../components/ui/MemberCard";

const members: MemberCardProp[] = [
  {
    image: Nektarios,
    name: "Nektarios",
    role: "Business Analytics",
  },
  {
    image: Yuanzhen,
    name: "Yuanzhen",
    role: "UX Designer",
  },
  {
    image: Elias,
    name: "Elias",
    role: "Business Analytics",
  },
  {
    image: Zainab,
    name: "Zainab",
    role: "UX Designer, Business Analytics",
  },
  {
    image: China,
    name: "China",
    role: "UX Designer",
  },
  {
    image: George,
    name: "George",
    role: "Software Engineer",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="px-5.5">
      <h2 className="text-[#063B27] text-4xl font-['DM_Sans'] font-bold">
        Meet the team
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
