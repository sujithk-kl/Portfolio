import bitHackWinImg from '../../assets/bit-hack-win.jpeg';

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

  const achievements = [
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
      title: 'Leadership Roles',
      description: 'Coordinator – INSIGHT-X Tech Symposium 2023\nPresident – IAENG Technical Society (2023–2024)',
    },
    {
      title: 'Vellamal College',
      description: 'ICA6NT - Best Paper Award',
    },
  ];

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
      {/* Education Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {edu.period}
                </p>
                <p className="text-gray-700 dark:text-gray-200">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.coreAreas.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Achievements & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                {achievement.image && (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 shadow-md border-2 border-blue-400 dark:border-blue-600"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Publications & Research
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {pub.title}
                </h3>
                {pub.items ? (
                  <ul className="list-disc list-inside space-y-2">
                    {pub.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    {pub.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 