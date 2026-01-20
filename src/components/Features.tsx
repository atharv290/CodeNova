import { Users, Briefcase, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Learn from industry professionals with years of real-world experience in top tech companies.',
  },
  {
    icon: Briefcase,
    title: 'Hands-on Projects',
    description: 'Build real-world applications and gain practical experience that employers value.',
  },
  {
    icon: Award,
    title: 'Verified Certificates',
    description: 'Earn industry-recognized certifications that boost your credibility and career prospects.',
  },
];

export function Features() {
  return (
    <section id="features" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CodeNova
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to launch your tech career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
