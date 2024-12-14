import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { ResumeData } from '../../types/Resume';

interface ExperienceFormProps {
  experiences: ResumeData['experience'];
  onChange: (experiences: ResumeData['experience']) => void;
}

export default function ExperienceForm({ experiences, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    onChange([
      ...experiences,
      {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Experiência Profissional</h2>
          <p className="text-sm text-gray-500">
            Adicione suas experiências profissionais mais relevantes
          </p>
        </div>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          title="Adicionar nova experiência profissional"
        >
          <Plus size={16} /> Adicionar Experiência
        </button>
      </div>
      
      {experiences.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          Clique no botão acima para adicionar sua primeira experiência profissional
        </p>
      ) : (
        experiences.map((exp, index) => (
          <div key={exp.id} className="mb-6 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Empresa
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index] = { ...exp, company: e.target.value };
                    onChange(newExp);
                  }}
                  placeholder="Nome da empresa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cargo
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index] = { ...exp, position: e.target.value };
                    onChange(newExp);
                  }}
                  placeholder="Seu cargo na empresa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Data de Início
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index] = { ...exp, startDate: e.target.value };
                    onChange(newExp);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Data de Término
                  <span className="text-gray-500 text-xs ml-1">(ou em branco se atual)</span>
                </label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index] = { ...exp, endDate: e.target.value };
                    onChange(newExp);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Descrição das Atividades
                <span className="text-gray-500 text-xs ml-1">(Principais responsabilidades e conquistas)</span>
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => {
                  const newExp = [...experiences];
                  newExp[index] = { ...exp, description: e.target.value };
                  onChange(newExp);
                }}
                rows={3}
                placeholder="Descreva suas principais atividades, responsabilidades e conquistas neste cargo"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => onChange(experiences.filter((_, i) => i !== index))}
              className="mt-4 flex items-center gap-2 px-3 py-1 text-red-600 hover:text-red-700"
              title="Remover esta experiência"
            >
              <Trash2 size={16} /> Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
}