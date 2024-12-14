import React from 'react';
import { ResumeData } from '../types/Resume';

interface ResumePDFProps {
  data: ResumeData;
}

export default function ResumePDF({ data }: ResumePDFProps) {
  return (
    <div className="w-full min-h-screen bg-white md:w-[210mm] md:h-[297mm] print:w-[210mm] print:h-[297mm] print:overflow-hidden print:break-after-page">
      <div className="flex flex-col md:flex-row print:flex-row h-full">
        {/* Barra Lateral */}
        <div className="w-full md:w-[85mm] print:w-[85mm] h-full bg-gradient-to-b from-[#1E2532] to-[#111827] p-4 md:p-8 print:p-8 text-white">
          {/* Foto e Contato */}
          <div className="flex flex-col items-center mb-8 md:mb-10">
            {data.personalInfo.photo && (
              <div className="relative mb-4">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-500/30 to-yellow-500/10 absolute -inset-2 animate-pulse"></div>
                <img
                  src={data.personalInfo.photo}
                  alt={data.personalInfo.fullName}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover relative ring-2 ring-yellow-500/50 shadow-lg"
                  crossOrigin="anonymous"
                  loading="eager"
                />
              </div>
            )}
          </div>

          {/* Contato */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-5 uppercase tracking-wider text-yellow-500/90">Contato</h2>
            <div className="space-y-3 md:space-y-4">
              {data.personalInfo.email && (
                <div className="flex items-center gap-3 text-gray-300 print:text-gray-200 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base break-all group-hover:text-yellow-500/90 transition-colors">{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center gap-3 text-gray-300 print:text-gray-200 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base group-hover:text-yellow-500/90 transition-colors">{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center gap-3 text-gray-300 print:text-gray-200 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base group-hover:text-yellow-500/90 transition-colors">{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Habilidades */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-5 uppercase tracking-wider text-yellow-500/90">Habilidades</h2>
            <div className="space-y-2.5 md:space-y-3">
              {data.skills && data.skills.length > 0 ? (
                data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-gray-300 print:text-gray-200 group">
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base group-hover:text-yellow-500/90 transition-colors">{skill}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">Nenhuma habilidade cadastrada</p>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 h-full p-6 md:p-10 print:p-10 bg-white overflow-y-auto print:overflow-hidden">
          {/* Cabeçalho */}
          <div className="mb-8 md:mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              <span className="text-yellow-500">{data.personalInfo.fullName.split(' ')[0]}</span>{' '}
              {data.personalInfo.fullName.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 uppercase tracking-wider">{data.personalInfo.title}</p>
          </div>

          {/* Perfil */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              Perfil
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">{data.summary}</p>
          </div>

          {/* Experiência */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5z" clipRule="evenodd" />
                </svg>
              </div>
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-[6px] before:bottom-0 before:w-0.5 before:bg-yellow-500/50">
                  <div className="absolute left-0 top-1.5 w-1 h-1 bg-yellow-500 rounded-full -translate-x-[2px]"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-base md:text-lg text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(exp.startDate).toLocaleDateString('pt-BR')} -{' '}
                    {exp.endDate ? new Date(exp.endDate).toLocaleDateString('pt-BR') : 'Atual'}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
                </svg>
              </div>
              Formação Acadêmica
            </h2>
            <div className="space-y-6">
              {data.education.map((edu) => (
                <div key={edu.id} className="relative pl-6 before:absolute before:left-0 before:top-[6px] before:bottom-0 before:w-0.5 before:bg-yellow-500/50">
                  <div className="absolute left-0 top-1.5 w-1 h-1 bg-yellow-500 rounded-full -translate-x-[2px]"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-base md:text-lg text-gray-600">
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
    </div>
  );
}