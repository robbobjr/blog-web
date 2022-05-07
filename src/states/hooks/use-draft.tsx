import { useCallback, useMemo } from "react";

interface AddDraftProps {
  content: string;
  field: string;
}

export interface UserDraftProps {
  handleAddDraft(data: AddDraftProps): void;
  handleGetDraft(field: string): string;
  handleRemoveDraft(field: string): void;
}

export function useDraft() {
  const handleAddDraft = useCallback(
    ({ content, field }: AddDraftProps) => {
      if (!localStorage) return;

      if (!content) {
        console.log('fui chamado')
        localStorage.removeItem(field);
      }

      localStorage.setItem(field, content);
    }, []
  );

  const handleGetDraft = useCallback(
    (field: string) => {
      if (!localStorage) return;

      const data = localStorage.getItem(field);

      return data;
    }, []
  );

  const handleRemoveDraft = useCallback(
    (field: string) => {
      if (!localStorage) return;

      const data = localStorage.removeItem(field);

      return data;
    }, []
  );

  const context = useMemo(() => ({
    handleAddDraft,
    handleGetDraft,
    handleRemoveDraft,
  }), [handleAddDraft, handleGetDraft, handleRemoveDraft]);

  return context;
}