import React, { useMemo, useEffect } from "react";
import "./Team.css";

// Load images from PHOTO/<DESIGNATION>/*
const modules = import.meta.glob(
  "/src/assets/People/**/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
  }
);

// 🔒 DO NOT CHANGE — filename filters preserved
const getPersonNameFromFilename = (filenameWithExt) => {
  const dotIndex = filenameWithExt.lastIndexOf(".");
  const filename =
    dotIndex === -1 ? filenameWithExt : filenameWithExt.slice(0, dotIndex);

  const cleaned = filename
    .replace(/[_\-.]+/g, " ")
    .replace(/[^A-Za-z\s]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\b(IMG|photo|WA|SAVE|HDR|PORTRAIT)\b/gi, "")
    .trim();

  return cleaned.length > 0 ? cleaned : "Unknown";
};

const Campus = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const { designationEntries } = useMemo(() => {
    /**
     * {
     *   President: [
     *     { name: "John Doe", src: img }
     *   ],
     *   Treasurer: [
     *     { name: "Alan", src: img }
     *   ]
     * }
     */
    const designationMap = {};

    console.log(modules);
    Object.entries(modules).forEach(([path, mod]) => {
      const parts = path.split("/");
      const designation = parts[parts.length - 2]; // folder name
      const filename = parts[parts.length - 1];

      const name = getPersonNameFromFilename(filename);
      const src = mod?.default ?? mod;

      if (!designationMap[designation]) {
        designationMap[designation] = [];
      }

      designationMap[designation].push({ name, src });
    });

    const DESIGNATION_ORDER = [
      "PRESIDENT",
      "Vice President",
      "Treasurer",
      "Joint treasures",
      "Design head",
      "Documentation head",
      "Management",
      "Membership coordinator",
      "Representatives",
      "Workshops",
      "Media heads",
      "Academic and career support",
      "Content head",
      "Media heads",
      "Publicity head",
      "Quizes and competition",
      "Tech over tea",
      "Site visit",
    ];

    return {
      designationEntries: Object.entries(designationMap).sort((a, b) => {
        const indexA = DESIGNATION_ORDER.indexOf(a[0]);
        const indexB = DESIGNATION_ORDER.indexOf(b[0]);

        // Known designations first, unknown last
        if (indexA === -1 && indexB === -1) {
          return a[0].localeCompare(b[0]); // fallback alphabetical
        }
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
      }),
    };
  }, []);

  console.log("Matched images:", Object.keys(modules));

  return (
    <div className="campus">
      <h2 className="section-title">Our Team</h2>
      {designationEntries.map(([designation, people]) => (
        <div key={designation} className="designation-section">
          {/* 🔹 DESIGNATION HEADING */}
          <h2 className="designation-title">{designation.toUpperCase()}</h2>

          {/* 🔹 PHOTOS UNDER DESIGNATION */}
          <div className="gallery">
            {people.map((person, i) => (
              <div key={i} className="img-card">
                <img src={person.src} alt={person.name.toUpperCase()} />
                <div className="person-name">{person.name.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campus;
