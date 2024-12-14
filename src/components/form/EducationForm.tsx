import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { ResumeData } from '../../types/Resume';

interface EducationFormProps {
  education: ResumeData['education'];
  onChange: (education: ResumeData['education']) => void;
}

export default function EducationForm({ education, onChange }: EducationFormProps) {
  const addEducation = () => {
    onChange([
      ...education,
      {
        id: Date.now().toString(),
        institution: '',
        degree: '',
        field: '',
        graduationDate: '',
      },
    ]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Formação Acadêmica</h2>
          <p className="text-sm text-gray-500">
            Adicione sua formação acadêmica em ordem cronológica
          </p>
        </div>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          title="Adicionar nova formação"
        >
          <Plus size={16} /> Adicionar Formação
        </button>
      </div>

      {education.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          Clique no botão acima para adicionar sua primeira formação acadêmica
        </p>
      ) : (
        education.map((edu, index) => (
          <div key={edu.id} className="mb-6 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Instituição
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[index] = { ...edu, institution: e.target.value };
                    onChange(newEdu);
                  }}
                  placeholder="Ex: Universidade de São Paulo"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Grau
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[index] = { ...edu, degree: e.target.value };
                    onChange(newEdu);
                  }}
                  placeholder="Ex: Bacharelado"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Área de Estudo
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[index] = { ...edu, field: e.target.value };
                    onChange(newEdu);
                  }}
                  placeholder="Ex: Ciência da Computação"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Data de Conclusão
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  value={edu.graduationDate}
                  onChange={(e) => {
                    const newEdu = [...education];
                    newEdu[index] = { ...edu, graduationDate: e.target.value };
                    onChange(newEdu);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              onClick={() => onChange(education.filter((_, i) => i !== index))}
              className="mt-4 flex items-center gap-2 px-3 py-1 text-red-600 hover:text-red-700"
              title="Remover esta formação"
            >
              <Trash2 size={16} /> Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
}