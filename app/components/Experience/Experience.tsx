import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

type Skill = {
  name: string;
  level: string;
};

type SkillCardProps = {
  title: string;
  skills: Skill[];
};

export default function Experience() {
  const frontendSkills: Skill[] = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "Javascript", level: "Experienced" },
    { name: "React", level: "Experienced" },
    { name: "NEXT JS", level: "Experienced" },
    { name: "C++ Dev", level: "Intermediate" },
  ];

  const backendSkills: Skill[] = [
    { name: "PostgreSQL", level: "Experienced" },
    { name: "Supabase", level: "Experienced" },
    { name: "Firebase", level: "Experienced" },
    { name: "Mongo DB", level: "Experienced" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
  ];

  const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
    <div className="bg-[#e9effd] p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3">
            <div className="bg-[#173b8d] rounded-full p-1">
              <RiCheckboxCircleFill color="white" />
            </div>
            <div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-gray-600 text-sm">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-12 px-4 mb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-[#6792f1] mb-2">Explore My</p>
          <h1 className="text-4xl text-[#1e4fbc] font-bold">Experience</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} />
          <SkillCard title="Backend Development" skills={backendSkills} />
        </div>
      </div>
    </div>
  );
}
