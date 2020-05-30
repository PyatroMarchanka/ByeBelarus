import { ProductType } from '../components/ShopingList/ProductToBuy';
import { Units } from '../components/ShopingList/AddEditBuyProduct/useProductForm';

type Action = {
  type: string;
  payload: any;
};

export type StateType = {
  products: ProductType[];
};

export const actions = {
  addToBuyProduct: (prod: ProductType): Action => ({
    type: 'ADD_PRODUCT',
    payload: { ...prod, id: Math.random().toString() },
  }),
  deleteToBuyProduct: (id: string) => ({
    type: 'REMOVE_PRODUCT',
    payload: id,
  }),
};

const initialState: StateType = {
  products: [
    {
      id: '1',
      name: 'Cheese',
      amount: 4,
      units: Units.item,
      boughtOptions: {
        cost: 24,
        amount: 2,
      },
    },
    {
      id: '2',
      name: 'Milk',
      amount: 4,
      units: Units.g,
      boughtOptions: {
        cost: 32,
        amount: 5,
      },
    },
    {
      id: '3',
      name: 'Bread',
      amount: 4,
      units: Units.kg,
      boughtOptions: {
        cost: 32,
        amount: 6,
      },
    },
    {
      id: '4',
      name: 'Butter',
      amount: 4,
      units: Units.item,
      boughtOptions: null,
    },
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
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload),
      };

    default:
      return state;
  }
};
