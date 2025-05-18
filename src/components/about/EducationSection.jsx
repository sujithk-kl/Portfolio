const EducationSection = ({ education }) => (
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
);

export default EducationSection; 