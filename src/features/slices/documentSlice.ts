import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Document {
  id: string;
  name: string;
  url: string;
  size: string;
  dateUploaded: string;
  uploadedBy: {
    name: string;
    email: string;
    avatar: string;
  };
  shared: string;
  fileType: string;
}

interface DocumentState {
  documents: Document[];
  isLoading: boolean;
  isUploading: boolean;
  error: string | null;
}

const initialState: DocumentState = {
  documents: [],
  isLoading: false,
  isUploading: false,
  error: null,
};

// Async thunk to fetch documents
export const fetchDocuments = createAsyncThunk(
  'documents/fetchDocuments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/documents');
      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
      const data = await response.json();
      return data.documents;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Async thunk to upload document
export const uploadDocument = createAsyncThunk(
  'documents/uploadDocument',
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      return result.document;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch documents
      .addCase(fetchDocuments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDocuments.fulfilled, (state, action: PayloadAction<Document[]>) => {
        state.isLoading = false;
        state.documents = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Upload document
      .addCase(uploadDocument.pending, (state) => {
        state.isUploading = true;
        state.error = null;
      })
      .addCase(uploadDocument.fulfilled, (state, action: PayloadAction<Document>) => {
        state.isUploading = false;
        state.documents.unshift(action.payload); // Add new document to the beginning
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.isUploading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = documentSlice.actions;
export default documentSlice.reducer;