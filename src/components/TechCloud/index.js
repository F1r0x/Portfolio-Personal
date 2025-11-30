import { TechWrapper, TechCloudContainer, TechItem } from "./styles";

const skills = [
  "Linux",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Bash",
  "TypeScript",
  "Git",
  "VSCode",
  "Docker",
  "VirtualBox",
  "VMware",
  "Active Directory",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Burp Suite",
  "WordPress",
  "Elementor",
  "MySQL",
  "N8N",
  "Make",
  "OpenAI API",
  "Photoshop",
  "Excel"
];

const TechCloud = () => {
  return (
    <TechWrapper id="skills">
      <TechCloudContainer>
        {skills.map((skill, i) => (
          <TechItem key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            {skill}
          </TechItem>
        ))}
      </TechCloudContainer>
    </TechWrapper>
  );
};

export default TechCloud;
