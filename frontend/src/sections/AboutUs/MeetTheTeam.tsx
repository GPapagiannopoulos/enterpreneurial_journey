import type { MemberCardProp } from "../../components/MemberCard";
import Nektarios from "../../assets/icons/Nektarios.png";
import Yuanzhen from "../../assets/icons/Yuanzhen.png";
import Elias from "../../assets/icons/Elias.png";
import Zainab from "../../assets/icons/Zainab.png";
import China from "../../assets/icons/China.png";
import George from "../../assets/icons/George.png";
import MemberCard from "../../components/MemberCard";

const members: MemberCardProp[] = [
  {
    image: Nektarios,
    name: "Nektarios",
    role: "Team Leader",
  },
  {
    image: Yuanzhen,
    name: "Yuanzhen",
    role: "Senior UX design and MBA candidate, user centered design and strategic business development.",
  },
  {
    image: Elias,
    name: "Elias",
    role: "Team Member.",
  },
  {
    image: Zainab,
    name: "Zainab",
    role: "Team Member.",
  },
  {
    image: China,
    name: "China",
    role: "Team Member.",
  },
  {
    image: George,
    name: "George",
    role: "Team Member.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="px-30 my-18">
      <h2 className="text-teal-950 text-7xl font-bold font-['DM_sans'] tracking-wide">
        Meet the team
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
