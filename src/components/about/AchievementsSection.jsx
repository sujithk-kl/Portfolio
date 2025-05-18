const AchievementsSection = ({ achievements }) => (
  <section className="py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          let badge = null;
          let badgeColor = '';
          if (achievement.title === 'BIT Internal Hackathon 2023') {
            badge = 'Winner';
            badgeColor = 'bg-blue-500 text-white';
          } else if (achievement.title === 'E-Bike Challenge (EDBC) 2022') {
            badge = '4th Place';
            badgeColor = 'bg-green-500 text-white';
          } else if (achievement.title === 'Coordinator' || achievement.title === 'President') {
            badge = 'Leadership';
            badgeColor = 'bg-indigo-500 text-white';
          } else if (achievement.title === 'Velammal Institute of Technology, Chennai,') {
            badge = 'Best Paper Award';
            badgeColor = 'bg-yellow-400 text-yellow-900';
          }
          return (
            <div key={index} className="flex flex-col">
              {badge && (
                <span className={`inline-block mb-2 self-start ${badgeColor} text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {badge}
                </span>
              )}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
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
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AchievementsSection; 