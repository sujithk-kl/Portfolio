import securityAutomationImg from '../../assets/security-automation.jpeg';
import freshfleetImg from '../../assets/Freshfleet.png';
import codexaImg from '../../assets/Codexa.png';

const Projects = () => {
  const projects = [
    {
      title: 'FreshFleet – Online Grocery Shop',
      period: 'Jan - May 2024',
      description: 'Developed an online grocery shopping platform using the MERN stack featuring user authentication, real-time delivery tracking, and secure payments. Enabled vendor and customer management, personalized product recommendations, and direct-farm purchases delivering a smooth, modern shopping experience.',
      technologies: ['MongoDB', 'React', 'Express.js', 'Node.js'],
      features: [
        'User & vendor management',
        'Real-time delivery tracking',
        'Secure online payments',
        'Personalized recommendations',
      ],
      category: 'Full Stack',
      image: freshfleetImg,
    },
    {
      title: 'RealTime SOC Dashboard',
      period: 'Mar 2025 – Oct 2025',
      description: 'Developed a real-time SOC Dashboard for monitoring Windows Security logs, Defender, and SmartScreen events with instant detection of logon attempts, malware activity, and suspicious processes. Integrated alert management, RBAC, ACL control, and threat visualization using secure, encrypted data handling.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
      features: [
        'Real-time threat detection and alerts',
        'RBAC and ACL-based access control',
        'Threat intelligence visualization',
        'Encrypted data transmission',
        'Dashboard for Defender & SmartScreen and Security logs',
      ],
      category: 'Cybersecurity',
      image: securityAutomationImg,
    },
    {
      title: 'Codexa - Next-Gen Secure Cloud-Native Coding Platform',
      period: 'Sep – Oct 2025',
      description: 'Developed a browser-based IDE for fullstack application development entirely in the cloud, supporting real-time code editing, building, and execution without local setup. Integrated Zen Mode, Pomodoro timers, and smart project management tools to enhance developer focus and productivity.',
      technologies: ['React','Node.js', 'Express.js', 'MongoDB', 'Docker',' Kubernetes', 'AWS S3', 'Socket.IO', 'Monaco Editor'],
      features: [
        'Cloud-native execution with live terminal access',
        'Zero-setup development environments',
        'Zen Mode & Pomodoro productivity tools',
        'Real-time collaboration and project management',
        'Secure cloud storage and sandboxed execution',
      ],
      category: 'Fullstack',
      image: codexaImg,
    },
  ];
  const internships = [
    {
      company: 'Digisuraksha Parhari Foundation',
      role: 'Student Intern',
      period: 'Apr 2025',
      description: 'A practical cybersecurity internship focused on ethical hacking, network analysis, and hands-on training using real-world tools and platforms.',
      technologies: ['Linux',' Burp Suite', 'Wireshark', 'TryHackMe', 'GitHub'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Projects Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover object-center"
                  />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {project.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-sm"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Internships
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {internship.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {internship.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {internship.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 