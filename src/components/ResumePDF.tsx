import React from 'react';
import { ResumeData } from '../types/Resume';

interface ResumePDFProps {
  data: ResumeData;
}

export default function ResumePDF({ data }: ResumePDFProps) {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white flex print:w-full print:h-full" style={{ margin: '0 auto' }}>
      {/* Barra Lateral */}
      <div className="w-[85mm] bg-[#1E2532] p-8 text-white print:w-[85mm]">
        {/* Foto e Contato */}
        <div className="flex flex-col items-center mb-8">
          {data.personalInfo.photo && (
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-yellow-500/20 absolute -inset-2 print:bg-yellow-500/10"></div>
              <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.fullName}
                className="w-32 h-32 rounded-full object-cover relative"
              />
            </div>
          )}
        </div>

        {/* Contato */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contato</h2>
          <div className="space-y-3">
            {data.personalInfo.email && (
              <div className="flex items-center gap-3 text-gray-300 print:text-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-3 text-gray-300 print:text-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-3 text-gray-300 print:text-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Habilidades */}
        <div>
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Habilidades</h2>
          <div className="space-y-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex justify-between text-sm text-gray-300 print:text-gray-200">
                  <span>{skill}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-yellow-500 rounded-full" 
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-10 bg-white">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="text-yellow-500">{data.personalInfo.fullName.split(' ')[0]}</span>{' '}
            {data.personalInfo.fullName.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-lg text-gray-600 mt-2 uppercase tracking-wider">{data.personalInfo.title}</p>
        </div>

        {/* Perfil */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Perfil
          </h2>
          <p className="text-gray-600 leading-relaxed">{data.summary}</p>
        </div>

        {/* Experiência */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5z" clipRule="evenodd" />
            </svg>
            Experiência Profissional
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                  {exp.endDate ? new Date(exp.endDate).toLocaleDateString('pt-BR') : 'Atual'}
                </p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educação */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-2">
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
            </svg>
            Formação Acadêmica
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-600">
                  {edu.degree} em {edu.field}
                </p>
                <p className="text-sm text-gray-500">
                  Conclusão: {new Date(edu.graduationDate).toLocaleDateString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}