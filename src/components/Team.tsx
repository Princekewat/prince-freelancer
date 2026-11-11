import Image from "next/image";

const teamMembers = [
  {
    name: "Prince Kewat",
    position: "full stack Developer",
    photo: "/prince-photo.jpg",
    alt: "Portrait of Prince Kewat",
  },
  {
    name: "Teammate Name",
    position: "Your position",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    alt: "Sample teammate portrait",
  },
  {
    name: "Teammate Name",
    position: "Your position",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    alt: "Sample teammate portrait",
  },
];

export default function Team() {
  return (
    <section id="team" className="section team-section" aria-labelledby="team-heading">
      <div className="section-heading">
        <p>MY TEAM</p>
        <h2 id="team-heading">The people behind the work</h2>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <article className="team-member" key={`${member.name}-${index}`}>
            <div className={`team-member-photo${index === 0 ? " team-member-photo-prince" : ""}`}>
              <Image
                src={member.photo}
                alt={member.alt}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 900px) 42vw, 26vw"
              />
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
