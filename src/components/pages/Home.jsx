import { Link } from 'react-router-dom';
import sujithImg from '../../assets/Sujithk.png';

const Home = () => {
  const quickLinks = [
    {
      title: 'About Me',
      description: 'Learn more about my background, education, and skills',
      path: '/about',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Projects',
      description: 'Explore my technical projects and achievements',
      path: '/projects',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Contact',
      description: 'Get in touch with me for opportunities or collaborations',
      path: '/contact',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mx-auto mb-6 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 z-0"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 group">
              <img
                src={sujithImg}
                alt="Sujith K"
                className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-300"
                style={{
                  objectPosition: 'top',
                  transform: 'scale(1.1)'
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm SUJITH K
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Technology Student | Cybersecurity Enthusiast & Frontend Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1Tv3cdgbBecqjEMoo-SJ4-FYJblKlLpkk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Cybersecurity', 'Computer Networks', 'Security Protocols', 'Web Development'].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 