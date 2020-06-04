import { ClothItem } from './Interfaces';

export const defineTypeOfCloth = (type: string) => {
  switch (type) {
    case 'Coats':
      return 'Плащи';
    case 'Sneakers':
      return 'Кроссовки';
    case 'Shirts':
      return 'Рубашки';
    case 'Trousers':
      return 'Брюки';
    default:
      return '';
  }

  return '';
};

export const sortFunction = (array: ClothItem[], type: string) => {
  switch (type) {
    case 'Price_asc':
      return array.sort((a, b) => (b.price - a.price));
    case 'Price_desc':
      return array.sort((a, b) => (a.price - b.price));
    case 'Popularity':
      return array.sort((a, b) => (a.popularity - b.popularity));
    case 'Newest':
      return array.sort((a, b) => (a.age - b.age));
    default:
      return array;
  }

  return array;
};
