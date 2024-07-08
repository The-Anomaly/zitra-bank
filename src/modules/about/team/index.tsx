import styles from "./styles.module.scss";
import {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
  team9,
  team10,
  team11,
  LinkedinIcon2,
} from "assets";

const Team = () => {
  const members: MemberProps[] = [
    {
      image: team1,
      name: "Tunde Obadero",
      role: "Chief Executive Officer",
      linkedinURL: "",
    },
    {
      image: team2,
      name: "Femi Okuyelu",
      role: "Director, Business Development",
      linkedinURL: "",
    },
    {
      image: team3,
      name: "Olaotan Olumuyiwa",
      role: "Chief Information Officer",
      linkedinURL: "",
    },
    {
      image: team4,
      name: "Obiora Onyekwelu",
      role: "Head of Finance",
      linkedinURL: "",
    },
    {
      image: team5,
      name: "John Usang",
      role: "Head, Zitra Microbusiness",
      linkedinURL: "",
    },
    {
      image: team6,
      name: "Adebola Shotinola PHRi™️",
      role: "Lead, People Operations",
      linkedinURL: "",
    },
    {
      image: team7,
      name: "Emmanuel Njoku",
      role: "Head, Sales and Lending",
      linkedinURL: "",
    },
    {
      image: team8,
      name: "Ugochukwu Okere",
      role: "Head of Funding",
      linkedinURL: "",
    },
    {
      image: team9,
      name: "Nkechi Oseke",
      role: "Head, Corporate Services",
      linkedinURL: "",
    },
    {
      image: team10,
      name: "Obra Felix",
      role: "Head Marketing, Strategy and Coms",
      linkedinURL: "",
    },
    {
      image: team11,
      name: "Oloriegbe Sheme",
      role: "Head, Internal Control and Risk",
      linkedinURL: "",
    },
  ];
  return (
    <>
      <section className={styles.bg}>
        <div className={`container ${styles.teamSec}`}>
          <h2 className={styles.ttl}>Meet our team</h2>
          <p className={styles.txt}>
            Our team is built of exceptional professionals with years experience
            suited to meet your every needs
          </p>
          <div className={styles.members}>
            {members.map((member) => (
              <Member {...member} key={member.name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
interface MemberProps {
  image: string;
  name: string;
  role: string;
  linkedinURL: string;
}
const Member = ({ image, name, role, linkedinURL }: MemberProps) => {
  return (
    <div className={styles.member}>
      <img className={styles.member__img} src={image} />
      <p className={styles.member__name}>{name}</p>
      <p className={styles.member__role}>{role}</p>
      <a className={styles.member__link} href={linkedinURL} target="_blank">
        <LinkedinIcon2 />
      </a>
    </div>
  );
};

export { Team };
