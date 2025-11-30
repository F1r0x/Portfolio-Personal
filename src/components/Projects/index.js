/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable no-return-assign */
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@components/Icons';
import { projects } from '@config';
import { srConfig } from '@config/sr';
import { PROJECTS_GRID_LIMIT, IS_PRODUCTION } from '@lib/constants';
import * as gtag from '@lib/gtag';
import { StyledProject, StyledProjectsSection } from './styles';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const firstSix = projects.slice(0, PROJECTS_GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const handleClickProject = (link) => {
    if (IS_PRODUCTION) {
      gtag.event('click_project', 'projects', 'user clicked on project link button', link);
    }
    window.open(link, '_blank');
  };

  return (
    <StyledProjectsSection>
      <div className="title-container" ref={revealTitle}>
        <h2>Otros Proyectos</h2>
        {/*   <Link href="/archive">
          <a className="archive-link inline-link">View all projects</a>
        </Link> */}
      </div>

      <AnimatePresence>
        {projectsToShow &&
          projectsToShow.map((project, i) => {
            const { title, descriptionHtml, github, external, techs } = project;

            return (
              <motion.div
                key={title}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StyledProject
                  ref={(el) => (revealProjects.current[i] = el)}
                  tabIndex="0"
                  style={{ marginBottom: '1rem' }}
                >
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <Icon name="Folder" />
                        </div>
                        <div className="project-links">
                          {github && (
                            <a onClick={() => handleClickProject(github)} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a onClick={() => handleClickProject(external)} aria-label="External Link">
                              <Icon name="External" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="project-title">{title}</h3>

                      <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                      />
                    </header>

                    <footer>
                      {techs && (
                        <ul className="project-tech-list">
                          {techs.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      )}
                    </footer>
                  </div>
                </StyledProject>
              </motion.div>
            );
          })}
      </AnimatePresence>

      {projects && projects.length > 6 && (
        <button type="button" className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
