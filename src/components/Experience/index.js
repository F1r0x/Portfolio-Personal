/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_DELAY } from '@lib/constants';
import { StyledExperienceSection, StyledTimeline, StyledTimelineItem, StyledTimelineDot, StyledTimelineContent, StyledTimelineLine } from './styles';
import { NumberedHeading } from '@common/styles';

const Experience = () => {
  const [isMounted, setIsMounted] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const experiences = [
    {
      title: 'Desarrollador de Aplicaciones Web',
      company: 'Freelancer',
      period: 'Julio 2025 - Presente',
      description: 'Diseño y desarrollo de aplicaciones y sitios web a medida para empresas y particulares.',
    },
    {
      title: 'Desarrollador Web Full Stack',
      company: 'Optima Quantum S.L',
      period: 'Marzo 2025 - Julio 2025',
      description: 'Desarrollo de aplicaciones web escalables con React y Node.js, automatización de sistemas con N8N y Make, gestión de bases de datos, auditorías de ciberseguridad...',
    },
    {
      title: 'Técnico de Sistemas Fotovoltaicos',
      company: 'Ruano Energía S.L',
      period: 'Abril 2020 - Agosto 2021',
      description: 'Operario técnico en instalaciones fotovoltaicas, instalación y programación de inversores, actualización y renovación de software, sistemas de redes y conexiones.',
    },
  ];

  return (
    <StyledExperienceSection id="experience">
      <NumberedHeading>Experiencia Laboral</NumberedHeading>
      <StyledTimeline>
        <AnimatePresence>
          {isMounted &&
            experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <StyledTimelineItem>
                  <StyledTimelineDot delay={i * 200 + 100} />
                  <StyledTimelineContent>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <span>{exp.period}</span>
                    <p>{exp.description}</p>
                  </StyledTimelineContent>
                  {i < experiences.length - 1 && <StyledTimelineLine delay={i * 200 + 400} />}
                </StyledTimelineItem>
              </motion.div>
            ))}
        </AnimatePresence>
      </StyledTimeline>
    </StyledExperienceSection>
  );
};

export default Experience;
