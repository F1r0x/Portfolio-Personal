/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHTBSection, StyledProfileCard, StyledStatsGrid, StyledStatItem, StyledWriteupsTitle, StyledWriteupsGrid, StyledWriteupCard, } from './styles';
import { NumberedHeading } from '@common/styles';

const HackTheBox = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);
  // Placeholder data for HTB profile. Replace with your actual data.
  const profile = {
    username: 'TheF1r0x',
    url_profile: 'https://app.hackthebox.com/profile/942935',
    rank: 'Hacker',
    ownedSystems: 79,
    ownedUsers: 81,
    challengesSolved: 13,
    respect: 46,
    // Add more stats as needed, e.g., firstBloods, respect, etc.
  };
  // Placeholder data for machines with WriteUps. Add your actual machines and links.
  const writeups = [
    {
      machine: 'PermX ',
      difficulty: 'Easy',
      os: 'Linux',
      link: 'https://territoriohacker.com/htb-permx/',
      img: '/permx.webp',
    },
    {
      machine: 'Evilcups ',
      difficulty: 'Medium',
      os: 'Linux',
      link: 'https://territoriohacker.com/htb-evilcups/',
      img: '/evilcups.png',
    },
    {
      machine: 'Editorial',
      difficulty: 'Easy',
      os: 'Linux',
      link: 'https://territoriohacker.com/htb-editorial/',
      img: '/editorial.png',
    },
    {
        machine: 'TwoMillion',
        difficulty: 'Easy',
        os: 'Linux',
        link: 'https://territoriohacker.com/htb-twomillion/',
        img: '/twomillion.png',
      },
    {
        machine: 'Blue',
        difficulty: 'Easy',
        os: 'Windows',
        link: 'https://territoriohacker.com/htb-blue/',
        img: '/blue.png',
      },
      {
        machine: 'SwagShop',
        difficulty: 'Easy',
        os: 'Linux',
        link: 'https://territoriohacker.com/htb-swagshop/',
        img: '/swagshop.png',
      },
      
    // Add more as needed
  ];
  return (
    <StyledHTBSection id="hackthebox">
      <NumberedHeading>Hack The Box</NumberedHeading>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fadezoom" timeout={LOADER_DELAY}>
            <StyledProfileCard style={{ transitionDelay: '100ms' }}>
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
          </CSSTransition>
        )}
      </TransitionGroup>
      <StyledWriteupsTitle>WriteUps</StyledWriteupsTitle>
      <StyledWriteupsGrid>
        <TransitionGroup component={null}>
          {isMounted &&
            writeups.map((wu, i) => (
              <CSSTransition key={i} classNames="slideup" timeout={LOADER_DELAY}>
                <StyledWriteupCard style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
                  <h4>{wu.machine}</h4>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                        <p>Difficulty: {wu.difficulty}</p>
                        <p>OS: {wu.os}</p>
                        </div>
                        <div className="cert-wrapper">
                            {wu.img && (
                            <img src={wu.img} alt="Imágen HTB" width="80px" />
                            )}
                        </div>
                    </div>
                  <a href={wu.link} target="_blank" rel="noopener noreferrer">
                    Read WriteUp
                  </a>
                </StyledWriteupCard>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledWriteupsGrid>
    </StyledHTBSection>
  );
};
export default HackTheBox;