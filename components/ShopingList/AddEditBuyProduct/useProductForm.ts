import { useReducer } from 'react';
const SET_TITLE = 'SET_TITLE';
const SET_AMOUNT = 'SET_AMOUNT';
const SET_UNITS = 'SET_UNITS';

export enum Units {
  kg = 'kg',
  l = 'l',
  ml = 'ml',
  g = 'g',
  item = 'items',
}
export type AddProductType = {
  title: string;
  amount: number | null;
  units: Units;
};

type Action = {
  type: string;
  payload: any;
};

const reducer = (state: AddProductType, action: Action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_AMOUNT:
      return { ...state, amount: action.payload };
    case SET_UNITS:
      return { ...state, units: action.payload };

    default:
      break;
  }
};

export const productActions = {
  setTitle: (title: string): Action => ({
    type: SET_TITLE,
    payload: title,
  }),
  setAmount: (amount: string): Action => ({
    type: SET_AMOUNT,
    payload: amount,
  }),
  setUnits: (units: Units): Action => ({
    type: SET_UNITS,
    payload: units,
  }),
};

export const useProductForm = (addInitialValues: AddProductType) => {
  const [state, dispatch] = useReducer(reducer, addInitialValues);

  const actions = {
    setTitle: (title: string): void => dispatch(productActions.setTitle(title)),
    setAmount: (amount: string): void =>
      dispatch(productActions.setAmount(amount)),
    setUnits: (units: Units): void => dispatch(productActions.setUnits(units)),
  };
  return [state, actions];
};
