import { useCallback, useMemo } from "react";

interface AddDraftProps {
  content: string;
  field: string;
}

interface ContentContextProps {
  handleAddDraft(data: AddDraftProps): void;
  handleGetDraft(field: string): string;
  handleRemoveDraft(field: string): void;
}

export function useContent(): ContentContextProps {
  const handleAddDraft = useCallback(
    ({ content, field }: AddDraftProps) => {
      if (!localStorage || !content) return;

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

  const handlers = useMemo(() => ({
    handleAddDraft,
    handleGetDraft,
    handleRemoveDraft,
  }), [handleAddDraft, handleGetDraft, handleRemoveDraft]);

  return handlers;
}