export const formatCityName = (zoneName: string): string => {
  return zoneName.split('/')[1].replace(/_/g, ' ');
};
