import "./Testimonials.css";
import nextbtn from "../../assets/nextbtn.png";
import backbtn from "../../assets/backbtn.png";
import { useRef } from "react";
import events from "./eventsData";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -((events.length - 2) * 30)) tx -= 30;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) tx += 30;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section className="testimonials">
      <h2 className="section-title">Club Events & Highlights</h2>

      <img
        src={backbtn}
        alt="Previous"
        className="backbtn"
        onClick={slideBackward}
      />
      <img
        src={nextbtn}
        alt="Next"
        className="nextbtn"
        onClick={slideForward}
      />

      <div className="slider">
        <ul ref={slider}>
          {events.map((event) => (
            <li key={event.id}>
              <div className="slide">
                <img src={event.image} alt={event.title} />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <span>
                    📅 {event.date} | 📍 {event.venue}
                  </span>
                  <p>{event.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
