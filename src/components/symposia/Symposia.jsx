import React from "react";
import "./Symposia.css";
import canoe from "/src/assets/symposium/canoe.jpeg";
import uesi from "/src/assets/symposium/uesi.jpeg";
import d3 from "/src/assets/symposium/3d.jpeg";
import design from "/src/assets/symposium/design.jpeg";
import sustainable from "/src/assets/symposium/sustainable.jpeg";
import ci from "/src/assets/symposium/ci.jpeg";

const symposiaEvents = [
  {
    title: "Concrete Canoe Competition",
    description:
      "The ASCE Concrete Canoe Competition offers students a unique opportunity to gain hands-on practical experience in civil engineering by designing, constructing, and testing a concrete canoe. The competition challenges participants to apply their knowledge of concrete mix design, structural behavior, and material optimization while managing real-world project constraints. In addition, students develop essential project management skills, including planning, teamwork, time management, and problem-solving, making the competition a comprehensive learning experience that bridges academic concepts with practical application.",
    logo: canoe,
  },
  {
    title: "UESI SURVEYING COMPETITION",
    description:
      "The ASCE UESI Surveying Competition is designed with strong educational and professional objectives, emphasizing the critical role of fundamental surveying principles in all civil engineering projects. The competition requires students to apply standard field and office equipment, along with established procedures, to solve practical problems commonly encountered in the civil engineering industry. By developing a clear understanding of basic surveying concepts and their applications, participants are better prepared to effectively communicate and collaborate with surveying professionals during both the design phase and on-site execution of engineering projects.",
    logo: uesi,
  },
  {
    title: "3D PRINTING COMPETITION",
    description:
      "The ASCE 3D Printing Competition encourages the application of advanced 3D printing technology within the field of civil engineering. For the year 2026, the ASCE 3D Printing: Bridging the Future Competition is centered on bridge structures. Students are challenged to design and fabricate a 3D-printed bridge that is aesthetically appealing, structurally strong, and sufficiently stiff, while also requiring minimal assembly time and strictly adhering to the specified geometric requirements.",
    logo: d3,
  },
  {
    title: "Timber-Strong Design Build Competition",
    description:
      "This competition invites student teams to design and construct an artistically creative two-story light-framed timber building that emphasizes sustainability, aesthetic appeal, and structural durability. The competition enables students to gain experience in performing aspects of common structural engineering design and practice as well as gain exposure to the management and building practices used in construction environments.",
    logo: design,
  },
  {
    title: "Sustainable Solutions Competition",
    description:
      "The ASCE Sustainable Solutions Competition (SSC) motivates students to address realistic challenges within the field of civil engineering by fostering the development of knowledge in sustainable practices through a platform that promotes multidisciplinary collaboration. The SSC encourages innovation and creativity, enabling students to utilize all available resources to develop impactful sustainable solutions that seamlessly integrate engineering and natural systems, working in harmony for the betterment of humanity.",
    logo: sustainable,
  },
  {
    title: "Construction Institute Student Symposium Competition",
    description:
      "Each year, the Construction Institute (CI) Student Symposium Competition presents students with a real-world construction engineering challenge, enabling them to simulate the role of a professional construction firm responding to an owner’s request. Within a timed environment, participants are required to develop well-structured professional, technical, and creative solutions. The competition encourages teamwork, innovation, and the practical application of civil and construction engineering principles. It also enhances student interaction with the construction industry while fostering awareness of the Construction Institute’s value throughout a student’s academic journey and future professional career.",
    logo: ci,
  },
];

const Symposia = () => {
  return (
    <section className="symposia">
      <h2 className="section-title">Symposia Events</h2>
      <p className="section-subtitle">
        Explore our technical and non-technical symposia events designed to
        inspire innovation and collaboration.
      </p>

      <div className="symposia-grid">
        {symposiaEvents.map((event, index) => (
          <div className="symposia-card" key={index}>
            <img src={event.logo} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Symposia;
