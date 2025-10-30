import FCP from '../../assets/FCP.png';
import FCF from '../../assets/FCF.png';
import FCA from '../../assets/FCA.png';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Fortinet Certified Professional (FCP)',
      description: 'Network Security Expert',
      image: FCP,
      date: '2024',
    },
    {
      title: 'Fortinet Certified Fundamentals (FCF)',
      description: 'Cybersecurity',
      image: FCF,
      date: '2024',
    },
    {
      title: 'Fortinet Certified Associate (FCA)',
      description: 'Network Security',
      image: FCA,
      date: '2024',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 h-full flex flex-col">
                {cert.image && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-32 object-contain rounded-lg shadow-md border-2 border-blue-400 dark:border-blue-600"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.description}
                </p>
                <div className="mt-auto pt-2 text-sm text-gray-500 dark:text-gray-400">
                  Issued: {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
