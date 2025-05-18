const PublicationsSection = ({ publications }) => (
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
);

export default PublicationsSection; 