import { GlobalProductInDTO } from '../api/dto/product';
export const formatPrice = (number: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const getUniqueValues = (data: GlobalProductInDTO[], type: string) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
