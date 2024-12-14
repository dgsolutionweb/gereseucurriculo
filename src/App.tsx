import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { usePDF } from 'react-to-pdf';
import ResumeForm from './components/ResumeForm';
import ResumePDF from './components/ResumePDF';
import { ResumeData } from './types/Resume';
import logo from './assets/logo.png';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    photo: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
};

interface WhatsAppOption {
  title: string;
  message: string;
}

const whatsappOptions: WhatsAppOption[] = [
  {
    title: "Cartão Digital",
    message: "Olá! Gostaria de criar um cartão digital personalizado para minha empresa."
  },
  {
    title: "Marketing Digital",
    message: "Olá! Gostaria de aumentar o público e engajamento do meu negócio."
  },
  {
    title: "Desenvolvimento",
    message: "Olá! Tenho ideias para meu negócio e gostaria de desenvolver!"
  }
];

export default function App() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [previewMode, setPreviewMode] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const { toPDF, targetRef } = usePDF({
    filename: `curriculo-${data.personalInfo.fullName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
    format: 'a4',
    page: { margin: 0 }
  });

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/17999754390?text=${encodedMessage}`, '_blank');
    setShowWhatsAppModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-b from-black via-gray-900 to-transparent pb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="DGSolution WEB" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-yellow-400/50" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
                  DGSolution <span className="text-yellow-400">WEB</span>
                </h1>
                <p className="text-gray-300 text-sm text-center sm:text-left">Gerador de Currículo Profissional</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 flex items-center justify-center gap-2"
                title={previewMode ? "Voltar para edição" : "Visualizar currículo"}
              >
                {previewMode ? 'Voltar para Edição' : 'Visualizar Currículo'}
              </button>
              {previewMode && (
                <button
                  onClick={() => toPDF()}
                  className="w-full sm:w-auto px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  title="Baixar currículo em PDF"
                >
                  <Download size={20} /> Baixar PDF
                </button>
              )}
            </div>
          </div>
          {!previewMode && (
            <p className="mt-6 text-gray-300 text-center max-w-2xl mx-auto px-4">
              Crie seu currículo profissional de forma rápida e fácil. 
              Preencha os campos abaixo e tenha um currículo moderno e atraente em minutos.
            </p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 -mt-4 relative z-10">
        {previewMode ? (
          <div ref={targetRef} className="bg-white shadow-xl rounded-lg overflow-hidden max-w-full mx-auto">
            <ResumePDF data={data} />
          </div>
        ) : (
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
            <ResumeForm data={data} onChange={setData} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>
        <div className="relative z-10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-8">
                <img src={logo} alt="DGSolution WEB" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-yellow-400/50" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  DGSolution <span className="text-yellow-400">WEB</span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="https://instagram.com/dgsolutionweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @dgsolutionweb
                </a>
                <button
                  onClick={() => setShowWhatsAppModal(true)}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Fale Conosco
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-8">
                © {new Date().getFullYear()} DGSolution WEB
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Como podemos ajudar?</h3>
            <div className="space-y-4">
              {whatsappOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(option.message)}
                  className="w-full p-4 bg-white border-2 border-green-500 text-green-600 rounded-xl hover:bg-green-50 transition-colors duration-300 text-left flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{option.title}</h4>
                    <p className="text-sm text-gray-500">Clique para conversar sobre este assunto</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}