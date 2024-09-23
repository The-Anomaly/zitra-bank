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
  team12,
  team13,
  team14,
} from "assets";

const Team = () => {
  const members: MemberProps[] = [
    {
      image: team12,
      name: "Professor Akpan Hogan Ekpo",
      role: "Chairman Board of Directors",
    },
    {
      image: team13,
      name: "Kufre Ekpo Udeme",
      role: "Managing Director",
      linkedinURL: "https://www.linkedin.com/in/kufre-ekpo-udeme-aa4ba624b/",
    },
    {
      image: team1,
      name: "Tunde Obadero",
      role: "Non Executive Director",
      linkedinURL: "https://www.linkedin.com/in/babatundeobadero/",
    },
    {
      image: team2,
      name: "Femi Okuyelu",
      role: "Non Executive Director",
      linkedinURL: "https://www.linkedin.com/in/femi-okuyelu-24576046/",
    },
    {
      image: team3,
      name: "Olaotan Olumuyiwa",
      role: "Non Executive Director",
      linkedinURL: "https://www.linkedin.com/in/olaotan-olamuyiwa-30ba59112/",
    },
    {
      image: team14,
      name: "Olufemi Akinrotimi",
      role: "Independent Non-Executive Director",
      linkedinURL: "https://www.linkedin.com/in/olufemi-akinrotimi-4122892b/",
    },
    // {
    //   image: team4,
    //   name: "Obiora Onyekwelu",
    //   role: "Head of Finance",
    //   linkedinURL: "https://www.linkedin.com/in/obiora-onyekwelu-bb424476/",
    // },
    // {
    //   image: team5,
    //   name: "John Usang",
    //   role: "Head, Zitra Microbusiness",
    //   linkedinURL: "https://www.linkedin.com/in/john-usang-98367016b/",
    // },
    // {
    //   image: team6,
    //   name: "Adebola Shotinola PHRi™️",
    //   role: "Lead, People Operations",
    //   linkedinURL: "https://www.linkedin.com/in/adebola-shotinola-phri%E2%84%A2-408828144/",
    // },
    // {
    //   image: team7,
    //   name: "Emmanuel Njoku",
    //   role: "Head, Sales and Lending",
    //   linkedinURL: "http://www.linkedin.com/in/emmanuel-njoku-a79a86a8",
    // },
    // {
    //   image: team8,
    //   name: "Ugochukwu Okere",
    //   role: "Head of Funding",
    //   linkedinURL: "https://www.linkedin.com/in/ugo-okere-4b7b02bb/",
    // },
    // {
    //   image: team9,
    //   name: "Nkechi Oseke",
    //   role: "Head, Corporate Services",
    //   linkedinURL: "https://www.linkedin.com/in/nkechi-oseke-747587318/",
    // },
    // {
    //   image: team10,
    //   name: "Obra Felix",
    //   role: "Head Marketing, Strategy and Coms",
    //   linkedinURL: "https://www.linkedin.com/in/obra-felix-436aa6154/",
    // },
    // {
    //   image: team11,
    //   name: "Oloriegbe Sheme",
    //   role: "Head, Internal Control and Risk",
    //   linkedinURL: "https://www.linkedin.com/in/sheme-oloriegbe-65218524a/",
    // },
  ];
  return (
    <>
      <section className={styles.bg}>
        <div className={`container ${styles.teamSec}`}>
          <h3 className={styles.ttl}>Meet our team</h3>
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
  linkedinURL?: string;
}
const Member = ({ image, name, role, linkedinURL }: MemberProps) => {
  return (
    <div className={styles.member}>
      <img className={styles.member__img} src={image} />
      <p className={styles.member__name}>{name}</p>
      <p className={styles.member__role}>{role}</p>
      {linkedinURL ? (
        <a className={styles.member__link} href={linkedinURL} target="_blank">
          <LinkedinIcon2 />
        </a>
      ) : null}
    </div>
  );
};

export { Team };
