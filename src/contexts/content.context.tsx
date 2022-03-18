import { createContext, useCallback } from "react";

export interface ContentContextProps {
  handleAddDraft(data: ContentContextProps.AddDraftDTO): void;
  handleGetDraft(field: string): string;
}

export namespace ContentContextProps {
  export type AddDraftDTO = {
    field: string, content: string,
  }
}

export const ContentContext = createContext({} as ContentContextProps);

export function ContextContextProvider({ children }) {
  const handleAddDraft = useCallback(
    ({ content, field }: ContentContextProps.AddDraftDTO) => {
      if (!localStorage) return;

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

  return (
    <ContentContext.Provider value={{
      handleAddDraft,
      handleGetDraft
    }}>
      {children}
    </ContentContext.Provider>
  )
}