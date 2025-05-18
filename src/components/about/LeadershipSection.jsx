const LeadershipSection = ({ leadership }) => (
  <section className="py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Leadership Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadership.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection; 