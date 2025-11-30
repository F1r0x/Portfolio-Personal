/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_DELAY } from '@lib/constants';
import { 
  StyledHTBSection, 
  StyledProfileCard, 
  StyledStatsGrid, 
  StyledStatItem, 
  StyledWriteupsTitle, 
  StyledWriteupsGrid, 
  StyledWriteupCard 
} from './styles';
import { NumberedHeading } from '@common/styles';

const HackTheBox = () => {
  const [isMounted, setIsMounted] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const profile = {
    username: 'TheF1r0x',
    url_profile: 'https://app.hackthebox.com/profile/942935',
    rank: 'Hacker',
    ownedSystems: 79,
    ownedUsers: 81,
    challengesSolved: 13,
    respect: 46,
  };

  const writeups = [
    { machine: 'PermX', difficulty: 'Easy', os: 'Linux', link: 'https://territoriohacker.com/htb-permx/', img: '/permx.webp' },
    { machine: 'Evilcups', difficulty: 'Medium', os: 'Linux', link: 'https://territoriohacker.com/htb-evilcups/', img: '/evilcups.png' },
    { machine: 'Editorial', difficulty: 'Easy', os: 'Linux', link: 'https://territoriohacker.com/htb-editorial/', img: '/editorial.png' },
    { machine: 'TwoMillion', difficulty: 'Easy', os: 'Linux', link: 'https://territoriohacker.com/htb-twomillion/', img: '/twomillion.png' },
    { machine: 'Blue', difficulty: 'Easy', os: 'Windows', link: 'https://territoriohacker.com/htb-blue/', img: '/blue.png' },
    { machine: 'SwagShop', difficulty: 'Easy', os: 'Linux', link: 'https://territoriohacker.com/htb-swagshop/', img: '/swagshop.png' },
  ];

  return (
    <StyledHTBSection id="hackthebox">
      <NumberedHeading>Hack The Box</NumberedHeading>

      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StyledProfileCard>
              <h3><a href={profile.url_profile}>{profile.username}</a></h3>
              <p>Rank: {profile.rank}</p>
              <StyledStatsGrid>
                <StyledStatItem>
                  <span>System Owns</span>
                  <strong>{profile.ownedSystems}</strong>
                </StyledStatItem>
                <StyledStatItem>
                  <span>User Owns</span>
                  <strong>{profile.ownedUsers}</strong>
                </StyledStatItem>
                <StyledStatItem>
                  <span>Challenges Progress</span>
                  <strong>{profile.challengesSolved}</strong>
                </StyledStatItem>
                <StyledStatItem>
                  <span>Respect</span>
                  <strong>{profile.respect}</strong>
                </StyledStatItem>
              </StyledStatsGrid>
            </StyledProfileCard>
          </motion.div>
        )}
      </AnimatePresence>

      <StyledWriteupsTitle>WriteUps</StyledWriteupsTitle>
      <StyledWriteupsGrid>
        <AnimatePresence>
          {isMounted &&
            writeups.map((wu, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: (i + 1) * 0.2 }}
              >
                <StyledWriteupCard>
                  <h4>{wu.machine}</h4>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <p>Difficulty: {wu.difficulty}</p>
                      <p>OS: {wu.os}</p>
                    </div>
                    <div className="cert-wrapper">
                      {wu.img && <img src={wu.img} alt="Imágen HTB" width="80px" />}
                    </div>
                  </div>
                  <a href={wu.link} target="_blank" rel="noopener noreferrer">
                    Read WriteUp
                  </a>
                </StyledWriteupCard>
              </motion.div>
            ))}
        </AnimatePresence>
      </StyledWriteupsGrid>
    </StyledHTBSection>
  );
};

export default HackTheBox;
