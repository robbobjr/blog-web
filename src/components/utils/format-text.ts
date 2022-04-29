export const formatCommentText = (amount: number) => {
  if (amount > 1) return `${amount} Comentários`
  return amount === 1 ? `${amount} Comentário` : `Comentar`
}