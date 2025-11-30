/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledEducationSection, StyledTimeline, StyledTimelineItem, StyledTimelineDot, StyledTimelineContent, StyledTimelineLine, StyledIcon } from './styles';
import { NumberedHeading } from '@common/styles';

const Education = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  // Aquí van los datos de tus estudios. Cada objeto representa una entrada educativa.
  // Añade o modifica según tus datos reales. La cronología se asume de más reciente a más antigua.
  const educations = [
    {
      title: 'Grado Superior en Desarollo de Aplicaciones Web',
      institution: 'Instituto Fomento Ocupacional FOC',
      period: '2023 - 2025',
      description: 'Formación técnica orientada al desarrollo completo de aplicaciones web, abarcando el diseño de interfaces, programación backend y frontend, gestión de bases de datos y administración de sistemas informáticos. Incluye también programación multimedia y móvil, así como el uso de herramientas y frameworks modernos para crear soluciones empresariales y entornos de gestión.',
      icon: '🎓', // Puedes reemplazar con un icono real de una librería como FontAwesome
    },
    {
        title: 'Introduction to Cybersecurity',
        institution: 'CISCO Networking Academy',
        period: '17 de Octubre de 2024',
        description: 'Formación introductoria en los principios fundamentales de la ciberseguridad, incluyendo los tipos de amenazas más comunes, métodos de protección de sistemas y redes, y conceptos clave como el análisis de riesgos y la seguridad en entornos digitales. El curso también fortalece la comprensión del funcionamiento de los ciberataques y las prácticas recomendadas para prevenirlos.',
        id_cert: 'c55c7f49-31a6-45f2-aa63-e8f02a215d5b',
        url_verification: 'https://www.credly.com/badges/c55c7f49-31a6-45f2-aa63-e8f02a215d5b/public_url',
        img_cert: '/cert002.png',
        icon: '💻',
      },
    {
        title: 'Certificado de Introducción a Linux',
        institution: 'Hack4u Academy',
        period: '23 de Mayo de 2023',
        description: 'Curso orientado a desarrollar una base sólida en el sistema operativo Linux, abordando desde la gestión de archivos y permisos hasta la administración básica del sistema. Incluye prácticas reales en consola, automatización mediante scripts y conceptos esenciales de seguridad en entornos Linux.',
        id_cert: '1415-2849-3000-2722',
        url_verification: 'https://hack4u.io/check-certificate/',
        img_cert: '/cert001.png',
        icon: '💻',
      },
    {
        title: 'Grado Superior en Automoción',
        institution: 'CIPFP Canastell',
        period: '2016 - 2018',
        description: 'Formación especializada en el mantenimiento, diagnóstico y reparación de vehículos, abarcando sistemas mecánicos, eléctricos y electrónicos. Incluye el uso de herramientas de diagnóstico avanzado, interpretación de esquemas técnicos y gestión eficiente de procesos en el taller.',
        icon: '💻',
      },
    {
      title: 'Bachillerato en Ciencias y Tecnología',
      institution: 'IES María Blasco Ibáñez',
      period: '2013 - 2015',
      description: 'Bachillerato orientado a la rama de Ciencias y Tecnología, con asignaturas como Matemáticas, Física, Química, Dibujo Técnico, Informática e Inglés. Me proporcionó una buena base general para continuar estudiando en áreas técnicas.',
      icon: '📚',
    },
    // Añade más estudios aquí si es necesario
  ];

  return (
    <StyledEducationSection id="education">
            <NumberedHeading>Estudios</NumberedHeading>
      <StyledTimeline>
        <TransitionGroup component={null}>
          {isMounted &&
            educations.map((edu, i) => (
              <CSSTransition key={i} classNames="zoomfade" timeout={LOADER_DELAY}>
                <StyledTimelineItem style={{ transitionDelay: `${i * 300}ms` }} rightAligned>
                  <StyledTimelineDot delay={i * 300 + 200}>
                {/**    <StyledIcon>{edu.icon}</StyledIcon>**/}
                  </StyledTimelineDot>
                  <StyledTimelineContent delay={i * 300 + 400}>
                    <h3>{edu.title}</h3>
                    <h4>{edu.institution}</h4>
                    <span>{edu.period}</span>
                    <p>{edu.description}</p><br />
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                            { edu.id_cert && (
                            <span>[+] ID de la Certificación: <p><a href={edu.url_verification}>{edu.id_cert}</a></p></span>
                            )}
                            {edu.url_verification && (
                            <span>[+] URL de Verificación: <p><a href={edu.url_verification}>{edu.url_verification}</a></p></span>
                            )}
                        </div>
                        <div className="cert-wrapper">
                            {edu.img_cert && (
                            <img src={edu.img_cert} alt="Certificado" width="300px" />
                            )}
                        </div>
                    </div>
                  </StyledTimelineContent>
                  {i < educations.length - 1 && <StyledTimelineLine delay={i * 300 + 600} />}
                </StyledTimelineItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledTimeline>
    </StyledEducationSection>
  );
};

export default Education;