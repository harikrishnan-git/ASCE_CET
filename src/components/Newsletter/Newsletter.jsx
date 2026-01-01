import React, { useMemo } from "react";
import "./Newsletter.css";

// Load all PDFs from assets/newsletters
const pdfModules = import.meta.glob("../../assets/ASCE_NEWSLETTER/*.pdf", {
  eager: true,
});

const getTitleFromFile = (path) => {
  const file = path.split("/").pop();
  return file.replace(".pdf", "").replace(/[_-]/g, " ");
};

const Newsletter = () => {
  const pdfList = useMemo(() => {
    return Object.entries(pdfModules).map(([path, module]) => ({
      title: getTitleFromFile(path),
      url: module.default,
    }));
  }, []);

  return (
    <section className="newsletter">
      <h2 className="newsletter-title">Newsletters & Publications</h2>

      <div className="newsletter-grid">
        {pdfList.map((pdf, index) => (
          <a
            key={index}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-card"
          >
            <div className="pdf-icon">📄</div>
            <h3>{pdf.title}</h3>
            <span>View PDF</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Newsletter;
