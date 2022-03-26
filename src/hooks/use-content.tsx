import { useContext } from "react";
import { ContentContext, ContentContextProps } from "../contexts/content.context";

export function useContent(): ContentContextProps {
  const content = useContext(ContentContext);

  if(!content) throw new Error('Missing ContextContext provider')
  
  return content;
}