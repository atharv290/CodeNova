import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Where Code Meets <span className="text-emerald-500">Brilliance</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Industry-focused IT training, internships, and verified certifications designed to make you job-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-emerald-500 text-emerald-500 rounded-xl font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Verify Certificate
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1651609236271-b7d6f8f52ef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29kaW5nJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2ODg4ODYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tech coding developer"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-300 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
