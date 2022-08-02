export const delimiter = (text, limit) => {
  if (text.length <= limit) return text;

  return `${text.substr(0, limit)}...`;
};
