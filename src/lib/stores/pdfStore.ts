import { writable } from 'svelte/store';

interface PDFStore {
  documents: Record<string, string>; // documentId -> filename
}

export const pdfStore = writable<PDFStore>({
  documents: {}
}); 