import React from 'react';
import { ResumeData } from '../types/Resume';
import PersonalInfo from './form/PersonalInfo';
import SummaryForm from './form/SummaryForm';
import ExperienceForm from './form/ExperienceForm';
import EducationForm from './form/EducationForm';
import SkillsForm from './form/SkillsForm';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  return (
    <div className="space-y-6">
      <PersonalInfo
        data={data.personalInfo}
        onChange={(personalInfo) => onChange({ ...data, personalInfo })}
      />
      <SummaryForm
        summary={data.summary}
        onChange={(summary) => onChange({ ...data, summary })}
      />
      <ExperienceForm
        experiences={data.experience}
        onChange={(experience) => onChange({ ...data, experience })}
      />
      <EducationForm
        education={data.education}
        onChange={(education) => onChange({ ...data, education })}
      />
      <SkillsForm
        skills={data.skills}
        onChange={(skills) => onChange({ ...data, skills })}
      />
    </div>
  );
}