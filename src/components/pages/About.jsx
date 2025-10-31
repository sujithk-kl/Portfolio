import internshipImg from '../../assets/Internship.png';
import tryhackmeImg from '../../assets/tryhackme.png';
import EducationSection from '../about/EducationSection';
import SkillsSection from '../about/SkillsSection';
import AchievementsSection from '../about/AchievementsSection';
import CertificationsSection from '../about/CertificationsSection';


const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Technology',
      institution: 'Bannari Amman Institute of Technology',
      period: '2022–2026',
      details: 'CGPA: 7.22 (up to 6th semester)',
    },
    {
      degree: '12th Grade',
      institution: 'Malar Matric Higher Secondary School',
      period: '2021–2022',
      details: 'Scored 81.8% in Computer-Science group',
    },
    {
      degree: '10th Grade',
      institution: 'Sun Stars Hr. Sec School',
      period: '2019–2020',
      details: 'Scored 82.6%',
    },
  ];

  const skills = {
    languages: ['C','Python', 'HTML', 'CSS','JS','React'],
    tools: ['Figma','Wireshark', 'Burpsuite', 'Metasploit','Nmap','Netcat','SIEM', 'Windows', 'Kali-linux'],
  };

  const achievements = [
    {
      title: 'Cybersecurity & Ethical Hacking Intern',
      description: `Digisuraksha Parhari Foundation (Powered by Infinisec Technologies Pvt. Ltd.) – April 2025

• Completed hands-on labs on TryHackMe, documenting tools, commands, and reasoning.
• Practiced ethical hacking using Linux CLI, Burp Suite, and Wireshark.
• Collaborated on GitHub-based cybersecurity projects and participated in a live final demo.`,
      image: internshipImg,
    },
    {
      title: 'TryHackMe',
      description: `Actively learning on TryHackMe through hands-on cybersecurity labs and real-world CTF challenges.

• Completed 49+ hands-on labs covering real-world cybersecurity and CTF challenges.
• Earned badges like 30-Day Streak, Logging Legend, and cat linux.txt.
• Gained strong skills in Linux, HTTP protocols, and log analysis.`,
      image: tryhackmeImg,
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
      <AchievementsSection achievements={achievements} />
      <CertificationsSection />
    </div>
  );
};

export default About; 