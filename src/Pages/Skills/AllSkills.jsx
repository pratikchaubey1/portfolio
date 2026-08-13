import React from 'react';
import { Link } from 'react-router-dom';

function AllSkills() {
  const skills = [
    { name: 'React', path: '/React', color: 'bg-blue-500' },
    { name: 'Node.js', path: '/Node', color: 'bg-green-500' },
    { name: 'UI Design', path: '/UI', color: 'bg-purple-500' },
    { name: 'DBMS', path: '/DBMS', color: 'bg-yellow-500' },
    { name: 'JavaScript', path: '/JS', color: 'bg-yellow-400' },
    { name: 'Tailwind CSS', path: '/Tailwind', color: 'bg-cyan-500' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-800 mb-10">Explore My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full px-6">
        {skills.map((skill, index) => (
          <Link key={index} to={skill.path} className="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all bg-white cursor-pointer overflow-hidden hover:-translate-y-1">
             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-sm mb-4 ${skill.color}`}>
                {skill.name.charAt(0)}
             </div>
             <h3 className="font-semibold text-slate-800 text-lg">{skill.name}</h3>
             <p className="text-sm text-slate-500 mt-2 text-center">Click to view details</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllSkills;
