import React from 'react';

interface SummaryFormProps {
  summary: string;
  onChange: (summary: string) => void;
}

export default function SummaryForm({ summary, onChange }: SummaryFormProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Resumo Profissional</h2>
      <p className="text-sm text-gray-500 mb-4">
        Escreva um breve resumo sobre sua trajetória e objetivos profissionais
      </p>
      <textarea
        value={summary}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Ex: Profissional com 5 anos de experiência em desenvolvimento web, especializado em React e TypeScript..."
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}