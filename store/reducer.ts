import {
  ProductType,
  BoughtOptions,
} from '../components/ShopingList/ProductToBuy';
import {
  Units,
  AddProductType,
} from '../components/ShopingList/AddEditBuyProduct/useProductForm';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const EDIT_TO_BUY_PRODUCT = 'EDIT_TO_BUY_PRODUCT';
const BUY_PRODUCT = 'BUY_PRODUCT';
const RETURN_PRODUCT = 'RETURN_PRODUCT';
const SET_PRODUCTS = 'SET_PRODUCTS';

type Action = {
  type: string;
  payload: any;
};

export type StateType = {
  products: ProductType[];
};

export const actions = {
  setProducts: (products: ProductType[]) => ({
    type: SET_PRODUCTS,
    payload: products,
  }),
  addToBuyProduct: (prod: ProductType): Action => ({
    type: ADD_PRODUCT,
    payload: { ...prod, id: Math.random().toString() },
  }),
  deleteToBuyProduct: (id: string) => ({
    type: REMOVE_PRODUCT,
    payload: id,
  }),
  editToBuyProduct: (product: AddProductType) => ({
    type: EDIT_TO_BUY_PRODUCT,
    payload: { ...product },
  }),
  buyProduct: (product: ProductType, boughtOptions: BoughtOptions): Action => ({
    type: BUY_PRODUCT,
    payload: { product, boughtOptions },
  }),
  returnProduct: (id: string): Action => ({
    type: RETURN_PRODUCT,
    payload: id,
  }),
};

const initialState: StateType = {
  products: [],
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload as ProductType],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload),
      };
    case EDIT_TO_BUY_PRODUCT:
      return {
        products: state.products.map((prod) =>
          prod.id === action.payload.id ? { ...prod, ...action.payload } : prod,
        ),
      };
    case BUY_PRODUCT:
      return {
        products: state.products.map((prod) =>
          prod.id === action.payload.product.id
            ? {
                ...prod,
                boughtOptions: action.payload.boughtOptions,
              }
            : prod,
        ),
      };
    case RETURN_PRODUCT:
      return {
        products: state.products.map((prod) =>
          prod.id === action.payload ? { ...prod, boughtOptions: null } : prod,
        ),
      };
    default:
      return state;
  }
};
