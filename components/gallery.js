import React from "react";
import "./gallery.css";

import GalleryProject from "./gallery-project";
import { motion, AnimatePresence } from "framer-motion";

function Gallery({ category, projects, onProjectClick }) {
  function handleProjectClick(id) {
    onProjectClick(id);
  }

  const filteredProjects = category
    ? projects.filter((project) => project.categories.includes(category))
    : projects;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className="Gallery"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {filteredProjects.map((project) => (
          // <motion.div transition={transition} variants={thumbnailVariants}>
          <GalleryProject
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
          // </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default Gallery;
