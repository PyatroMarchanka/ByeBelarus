import { ProductType } from '../components/ShopingList/ProductToBuy';

type Action = {
  type: string;
  payload: any;
};

export type StateType = {
  products: ProductType[];
};

const initialState: StateType = {
  products: [
    { id: '1', name: 'Cheese', count: '1kg' },
    { id: '2', name: 'Milk', count: '1l' },
    { id: '3', name: 'Bread', count: '500g' },
    { id: '4', name: 'Butter', count: '250g' },
  ],
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload as ProductType],
      };
    case 'REMOVE_PRODUCT':
      return state;
    default:
      return state;
  }
};
