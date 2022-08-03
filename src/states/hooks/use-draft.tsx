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

let ls;

if (typeof localStorage !== 'undefined') ls = localStorage;

export function useDraft() {
  const handleAddDraft = useCallback(
    ({ content, field }: AddDraftProps) => {
      if (!ls) return;

      if (!content) {
        ls.removeItem(field);
        return;
      }

      ls.setItem(field, content);
    }, []
  );

  const handleGetDraft = useCallback(
    (field: string) => {
      if (!ls) return;

      const data = ls.getItem(field);

      return data;
    }, []
  );

  const handleRemoveDraft = useCallback(
    (field: string) => {
      if (!ls) return;

      const data = ls.removeItem(field);

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