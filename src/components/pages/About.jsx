import bitHackWinImg from '../../assets/bit-hack-win.jpeg';
import EducationSection from '../about/EducationSection';
import SkillsSection from '../about/SkillsSection';
import AchievementsSection from '../about/AchievementsSection';
import LeadershipSection from '../about/LeadershipSection';
import PublicationsSection from '../about/PublicationsSection';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Bannari Amman Institute of Technology',
      period: '2021–2025',
      details: 'CGPA: 8.33 (up to 4th semester)',
    },
    {
      degree: '12th Grade',
      institution: 'Vailankanni Matric Hr. Sec School',
      period: '2020–2021',
      details: 'Scored 95% in Biology-Math group',
    },
    {
      degree: '10th Grade',
      institution: 'Vailankanni Matric Hr. Sec School',
      period: '2018–2019',
      details: 'Scored 96%',
    },
  ];

  const skills = {
    languages: ['C', 'Java (OOPs)', 'Python', 'HTML', 'CSS'],
    coreAreas: ['AI', 'ML', 'Data Visualization', 'DB Admin', 'Mobile/Web Dev'],
    tools: ['Android Studio', 'MySQL', 'Power BI', 'Colab', 'Windows', 'Ubuntu'],
  };

  const allAchievements = [
    {
      title: 'BIT Internal Hackathon 2023',
      description: '1st Place (Rs.15,000) – Open Innovation',
      image: bitHackWinImg,
    },
    {
      title: 'E-Bike Challenge (EDBC) 2022',
      description: '4th Place',
    },
    {
      title: 'Coordinator',
      description: 'INSIGHT-X Tech Symposium 2023',
    },
    {
      title: 'President',
      description: 'IAENG Technical Society (2023–2024)',
    },
    {
      title: 'Velammal Institute of Technology, Chennai,',
      description: `5th International Conference on Artificial Intelligence, 6G Communications and Network Technologies (ICA6NT 2025)

Best Paper Award for the paper:
LLM BASED RESOURCE ALLOCATION FOR BEYOND 5G WIRELESS COMMUNICATION`,
    },
  ];

  const achievements = allAchievements.filter(a =>
    !['Coordinator', 'President'].includes(a.title)
  );
  const leadership = allAchievements.filter(a =>
    ['Coordinator', 'President'].includes(a.title)
  );

  const publications = [
    {
      title: 'Patent',
      description: 'IoT-based Automated Smart Irrigation (Jul 2022)',
    },
    {
      title: 'Product',
      description: 'Wildlife Security System (Filed Nov 2023)',
    },
    {
      title: 'Papers Presented',
      items: [
        'Human-AI Interaction, MIT, SAMHITA-22',
        'IoT-based Soil & Weather Report, IIRM – Aug 2022',
        'Edge Computing and Applications, SIMATS – Oct 2023',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
      <AchievementsSection achievements={achievements} />
      <LeadershipSection leadership={leadership} />
      <PublicationsSection publications={publications} />
    </div>
  );
};

export default About; 