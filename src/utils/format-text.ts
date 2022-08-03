export const formatCommentText = (amount: number) => {
  if (amount > 1) return `${amount} Comments`
  return amount === 1 ? `${amount} Comment` : `Add Comment`
}