export const sizes = [
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB',
] as const;
export type Sizes = typeof sizes[number];
export const multiplier = 1024;

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 B';
  }
  const dm = decimals < 0 ? 0 : decimals;
  const i = Math.floor(Math.log(bytes) / Math.log(multiplier));
  return `${parseFloat((bytes / multiplier ** i).toFixed(dm))} ${sizes[i]}`;
};

export const convertBytes = (
  bytes: number,
  from: Sizes = 'B',
  to: Sizes = 'MB',
  decimals = 2,
): number => {
  if (!bytes || from === to) {
    return bytes;
  }
  const dm = decimals < 0 ? 0 : decimals;
  const toI = sizes.indexOf(to);
  const fromI = sizes.indexOf(from);
  if (toI < 0 || fromI < 0) {
    return bytes;
  }
  const i = toI - fromI;
  return parseFloat((bytes / multiplier ** i).toFixed(dm));
};
