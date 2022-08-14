export const generateID = () => {
  const a = Math.random().toString(15).substring(2, 15);
  const b = Math.random().toString(15).substring(2, 15);
  return a + b;
};
