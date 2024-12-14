import { usePDF } from 'react-to-pdf';

export const generateResumePDF = (element: HTMLElement | null, filename: string) => {
  if (!element) return;
  
  const { toPDF } = usePDF({
    filename,
    targetRef: element
  });

  return toPDF;
};