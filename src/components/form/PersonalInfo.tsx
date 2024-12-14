import React from 'react';
import { ResumeData } from '../../types/Resume';

interface PersonalInfoProps {
  data: ResumeData['personalInfo'];
  onChange: (data: ResumeData['personalInfo']) => void;
}

export default function PersonalInfo({ data, onChange }: PersonalInfoProps) {
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Foto Profissional
            <span className="text-gray-500 text-xs ml-1">(Opcional)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500 mt-1">
            Recomendado: Foto 3x4 profissional com fundo neutro
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome Completo
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            placeholder="Ex: João Silva Santos"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cargo Pretendido
            <span className="text-gray-500 text-xs ml-1">(Opcional)</span>
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
            placeholder="Ex: Desenvolvedor Full Stack"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-mail
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            placeholder="Ex: seu.email@exemplo.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefone
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            placeholder="Ex: (11) 98765-4321"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Localização
            <span className="text-gray-500 text-xs ml-1">(Cidade/Estado)</span>
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => onChange({ ...data, location: e.target.value })}
            placeholder="Ex: São Paulo, SP"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}