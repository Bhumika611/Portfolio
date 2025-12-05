import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Google Developer Groups (GDG)',
      company: 'VBIT - Vignana Bharathi Institute of Technology',
      period: '2025 - Present',
      description:
        'PoC - Point of Contact at GDG Club - VBIT. Serving as an ML Co-oridnator.',
      achievements: [
        'Conducted Hackathons and webinars.',
      ],
    },
    {
      title: 'Data Vedhi.Club',
      company: 'VBIT - Vignana Bharathi Institute of Technology',
      period: '2024 - Present',
      description:
        'Documentation Lead - Contributed to IGNIZ XR-AI Hackathon, Data.link Workshop, Contribx Workshop.',
      achievements: [
        'IGNIS XR-AI - A 3 day Workshop + Hackathon. Gained hands-on experience in XR, AI tools, Unity Hub, collaborated with teams, and supported event documentation and workflow.',
        'Data.link - A workshop. Gained hands-on experience in databases - MongoDB, MySQL, SQLite, Firebase and Supabase.',
        'ContribX - A 2 day workshop + fixathon. Gained hands-on experience in Git, Github and Open-Source Contributions.',
        'Strengthened leadership, teamwork, and technical problem-solving skills.',
      ],
    },
    {
      title: 'Ganith',
      company: 'VBIT - Vignana Bharathi Institute of Technology',
      period: '2024 - 2025',
      description:
        'Documentation Co-ordinator - Contributed to SAMANVAYA Event.',
      achievements: [
        'Organized a mathematics-focused event aimed at making math engaging and enjoyable for students.',
        'Coordinated activities, prepared content, and helped create an interactive learning experience that sparked interest in mathematical thinking.',
        'Claimed Team Work and other Team work activities.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-slate-900 rounded-lg">
                        <Briefcase className="text-cyan-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-cyan-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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