import {
  ProductType,
  ProductTypeDTO,
} from '../components/ShopingList/ProductToBuy';
import {
  BoughtProductType,
  BoughtProductTypeDTO,
} from '../components/ShopingList/BoughtProduct';

type Action = {
  type: string;
  payload: any;
};

export type StateType = {
  products: ProductType[];
  boughtProducts: BoughtProductType[];
};

export const actions = {
  addToBuyProduct: (prod: ProductTypeDTO): Action => ({
    type: 'ADD_TO_BUY_PRODUCT',
    payload: { ...prod, id: Math.random().toString() },
  }),
  deleteToBuyProduct: (id: string) => ({
    type: 'REMOVE_TO_BUY_PRODUCT',
    payload: id,
  }),
  addBoughtProduct: (prod: BoughtProductTypeDTO) => ({
    type: 'ADD_BOUGHT_PRODUCT',
    payload: { ...prod, id: Math.random().toString() },
  }),
};

const initialState: StateType = {
  products: [
    { id: '1', name: 'Cheese', count: '1kg' },
    { id: '2', name: 'Milk', count: '1l' },
    { id: '3', name: 'Bread', count: '500g' },
    { id: '4', name: 'Butter', count: '250g' },
  ],
  boughtProducts: [
    { id: '5', name: 'Cheese', count: '1kg', cost: 32 },
    { id: '6', name: 'Milk', count: '1l', cost: 3 },
    { id: '7', name: 'Bread', count: '500g', cost: 56 },
    { id: '8', name: 'Butter', count: '250g', cost: 8 },
  ],
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_BUY_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload as ProductType],
      };
    case 'REMOVE_TO_BUY_PRODUCT':
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload),
      };
    case 'ADD_BOUGHT_PRODUCT':
      return {
        ...state,
        boughtProducts: [
          ...state.boughtProducts,
          action.payload as BoughtProductType,
        ],
      };
    case 'REMOVE_BOUGHT_PRODUCT':
      return {
        ...state,
        boughtProducts: state.boughtProducts.filter(
          (prod) => prod.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
