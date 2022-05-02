import { useContext } from "react";
import { ContentContext, ContentContextProps } from '../contexts/contet-context';

export function useContent(): ContentContextProps {
  const context = useContext(ContentContext);

  return context;
}