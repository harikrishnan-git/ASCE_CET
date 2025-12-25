import "./Testimonials.css";
import { useRef, useState, useEffect } from "react";
import eventsobj from "./eventsData";

const events = Object.values(eventsobj);
const Testimonials = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which slide is currently visible
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const slideWidth = slider.children[0].offsetWidth;
      const index = Math.round(slider.scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to slide when dot clicked
  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.children[0].offsetWidth;
    slider.scrollTo({
      left: slideWidth * index * 1.235, // for proper navigation in phone
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials">
      <h2 className="section-title">Club Events & Highlights</h2>

      <div className="slider" ref={sliderRef}>
        <ul>
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

      {/* 🔘 Slider Indicators */}
      <div className="slider-indicators">
        {events.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
