import React, { KeyboardEvent } from 'react';
import { Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      onChange([...skills, e.currentTarget.value.trim()]);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
      <p className="text-sm text-gray-500 mb-4">
        Adicione suas principais habilidades técnicas e competências
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full"
          >
            <span>{skill}</span>
            <button
              onClick={() => onChange(skills.filter((_, i) => i !== index))}
              className="text-blue-600 hover:text-blue-700"
              title="Remover habilidade"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Digite uma habilidade e pressione Enter"
        onKeyDown={handleKeyDown}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <p className="text-xs text-gray-500 mt-2">
        Ex: React, TypeScript, Gestão de Projetos, Liderança de Equipe
      </p>
    </div>
  );
}