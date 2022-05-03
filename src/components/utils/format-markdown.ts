const getFormattedContent = (markdown: string) => {
  const [title, ...rest] = markdown.split('\n');
  const body = rest?.join('\n');
  const content = body.replaceAll(/\s#{1}\w+/gi, '') || '';
  const imageRegexp = /[!][[]][(].+[)]/gi;

  return {
    title: title?.replaceAll(/#/gi, ''), 
    content,
    image: (body?.match(imageRegexp) || [])[0]?.split("![](")[1]?.replace(")", ""),
    description: content.replaceAll(imageRegexp, "")?.slice(0, 300)?.split('\n')[0]?.replaceAll("#", ""),
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
  image: '',
  tags: [],
  createdAt: new Date().toString(),
};

export const formatMarkdown = (markdown: string) => {
  const dto = getFormattedContent(markdown);
  const tags = getTags(markdown);
  const createdAt = new Date().toDateString();

  const data = { 
    ...(tags?.length && { tags }), 
    createdAt ,
    ...dto,
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