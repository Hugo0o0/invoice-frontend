export const cutText = (text: string = "", length: number = 30) => {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, 10) + "..." + text.slice(-5);
};
