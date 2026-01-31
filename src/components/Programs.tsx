import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Full Stack Development',
    description: 'Master HTML, CSS, JavaScript, React, and modern web technologies to build stunning responsive websites.',
    duration: '1 Months',
  },
  {
    title: 'Android Development',
    description: 'Learn Java And Kotlin.',
    duration: '1 Months',
  },
  {
    title: 'Python Programming',
    description: 'Learn Python from scratch and build real-world applications.',
    duration: '1 Months',
  },
  {
    title: 'Java Programming',
    description: 'Learn Java from basics to advanced concepts with hands-on projects.',
    duration: '1 Months',
  },
];

export function Programs() {
  return (
    <section id="programs" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training paths designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 rounded-3xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                  {program.duration}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <a 
                href="https://forms.gle/SCmMKoUL56SDscW17" 
                className="inline-flex items-center gap-2 text-emerald-500 font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
