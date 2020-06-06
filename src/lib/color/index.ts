export const hex2rgba = (hex: string, a = 1): number[] => {
  const c = hex.substring(1).split('');
  if (c.length === 3) {
    return [...c.map((i) => parseInt(`${i}${i}`, 16)), a];
  }
  return [
    parseInt(`${c[0]}${c[1]}`, 16),
    parseInt(`${c[2]}${c[3]}`, 16),
    parseInt(`${c[4]}${c[5]}`, 16),
    a,
  ];
};

export const lightness = (hex: string): number => {
  const rgba = hex2rgba(hex, 1);
  return parseFloat(
    ((rgba[0] * 0.2126 + rgba[1] * 0.7152 + rgba[2] * 0.0722) / 255).toFixed(6),
  );
};
