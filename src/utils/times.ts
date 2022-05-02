export const timer = async (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}