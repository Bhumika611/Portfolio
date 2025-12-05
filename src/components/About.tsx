import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-cyan-400" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: <Rocket className="text-cyan-400" size={32} />,
      title: 'Fast Delivery',
      description: 'Delivering high-quality solutions quickly with agile methodologies',
    },
    {
      icon: <Users className="text-cyan-400" size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to achieve goals',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              user experiences backed by robust server-side solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm also experienced in AWS, Azure and certain cloud platforms, enabling cloud with different cloud certifications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development has equipped me with a diverse skill set, allowing me
              to tackle complex challenges and deliver innovative solutions. I'm constantly learning
              and adapting to new technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-medium">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-medium">Quick Learner</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-medium">Detail Oriented</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}