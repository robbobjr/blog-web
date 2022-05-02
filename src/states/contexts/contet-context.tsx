import { createContext } from "react";
import { useCallback, useMemo, useState } from "react";
import { PostTagDto } from "../../services/openapi";

interface AddDraftProps {
  content: string;
  field: string;
}

export interface ContentContextProps {
  handleAddDraft(data: AddDraftProps): void;
  handleGetDraft(field: string): string;
  handleRemoveDraft(field: string): void;
  tags: PostTagDto[];
  setTags: (tags: PostTagDto[]) => void;
}

export const ContentContext = createContext({} as ContentContextProps);

export function ContentContextProvider({ children }) {
  const [tags, setTags] = useState([] as PostTagDto[]); 

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

  const context = useMemo(() => ({
    handleAddDraft,
    handleGetDraft,
    handleRemoveDraft,
    setTags,
    tags, 
  }), [handleAddDraft, handleGetDraft, handleRemoveDraft, tags]);

  return (
    <ContentContext.Provider value={context}>
      {children}
    </ContentContext.Provider>
  );
}