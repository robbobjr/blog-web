const getFormattedContent = (markdown: string) => {
  const [title, ...body] = markdown.split('\n');

  return {
    title: title?.replaceAll(/#/gi, ''), 
    content: body?.join('\n').replaceAll(/\s#{1}\w+/gi, '') || '',
  }
}

const getTags = (markdown: string) => {
  return markdown.match(/\s#{1}\w+/g)?.map(
    tag => tag.replace('#', '').trim()
  ).filter(tag => !!tag);
}

export const defaultFormattedValue = {
  title: '', 
  content: '', 
  tags: [],
  createdAt: new Date().toString(),
};

export const formatMarkdown = (markdown: string) => {
  const { content, title } = getFormattedContent(markdown);
  const tags = getTags(markdown);
  const createdAt = new Date().toDateString();

  const data = { 
    ...(tags?.length && { tags }), 
    createdAt ,
    content,
    title,
  };

  return data;
}

export const revertMKFormatation = (
  title: string, 
  content: string, 
  tags: string[],
) => {  
  return `${title}\n${content}\n${tags.map(t => "#" + t).join(' ')}`;
}