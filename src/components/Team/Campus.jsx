import React, { useMemo } from "react";
import "./Campus.css";

// Try both nested and top-level globs to be robust
const modulesNested = import.meta.glob(
  "../../assets/PHOTO/*.{jpg,jpeg,png,svg}",
  {
    eager: true,
  }
);
const modulesTop = import.meta.glob("../../assets/PHOTO/*.{jpg,jpeg,png,svg}", {
  eager: true,
});

// Merge the two (keys in modulesNested take precedence)
const modules = { ...modulesTop, ...modulesNested };

const getPersonNameFromFilename = (filenameWithExt) => {
  const dotIndex = filenameWithExt.lastIndexOf(".");
  const filename =
    dotIndex === -1 ? filenameWithExt : filenameWithExt.slice(0, dotIndex);

  // Treat underscores/dashes/dots as spaces, remove non-letters except space, collapse spaces
  const cleaned = filename
    .replace(/[_\-.]+/g, " ")
    .replace(/[^A-Za-z\s]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\b(IMG|photo|WA|SAVE|HDR|PORTRAIT)\b/gi, "")
    .trim();

  return cleaned.length > 0 ? cleaned : "Unknown";
};

const Campus = () => {
  const { peopleEntries, matchedKeys } = useMemo(() => {
    const peopleMap = {};
    const keys = Object.keys(modules);

    Object.entries(modules).forEach(([path, mod]) => {
      // path example: '../assets/PHOTO/John Doe/John_Doe-1.jpg'
      const segments = path.split("/");
      const filenameWithExt = segments[segments.length - 1];

      const personName = getPersonNameFromFilename(filenameWithExt);
      const src = mod && mod.default ? mod.default : mod;

      if (!peopleMap[personName]) peopleMap[personName] = [];
      peopleMap[personName].push(src);
    });

    const entries = Object.entries(peopleMap).sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    return { peopleEntries: entries, matchedKeys: keys };
  }, []);

  // If no matches, show debug info on page
  if (!matchedKeys || matchedKeys.length === 0) {
    return (
      <div className="campus debug">
        <h3>No images found by import.meta.glob</h3>
        <p>Common causes:</p>
        <ul>
          <li>
            Folder must be <code>src/assets/PHOTO</code> (case-sensitive)
          </li>
          <li>
            Images must be inside the <code>src</code> directory
          </li>
          <li>Extensions must be .jpg/.jpeg/.png/.svg</li>
          <li>Restart dev server if you added files while it was running</li>
        </ul>

        <div style={{ marginTop: 18 }}>
          <strong>Glob tried paths (for debugging):</strong>
          <pre className="glob-keys">
            {
              "../../assets/PHOTO/*.{jpg,jpeg,png,svg}\n../assets/PHOTO/**/*.{jpg,jpeg,png,svg}"
            }
          </pre>
          <strong>Matched module keys (none found):</strong>
          <pre className="glob-keys">
            No keys matched — check folder path and case sensitivity.
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="campus">
      {peopleEntries.map(([person, images]) => (
        <div key={person} className="gallery-group">
          <div className="gallery">
            {images.map((src, i) => (
              <div key={i} className="img-card">
                <img src={src} alt={`${person} ${i}`} />
                <div className="person-name">{person}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Optional debug: small list of grouped names */}
      <div style={{ marginTop: 18, fontSize: 13, color: "#444" }}>
        Showing {peopleEntries.length} people/groups.
      </div>
    </div>
  );
};

export default Campus;
