import { useReducer, useEffect } from 'react';
const SET_TITLE = 'SET_TITLE';
const SET_AMOUNT = 'SET_AMOUNT';
const SET_UNITS = 'SET_UNITS';
const RESET = 'RESET';

export enum Units {
  kg = 'kg',
  l = 'l',
  ml = 'ml',
  g = 'g',
  item = 'items',
}
export type AddProductType = {
  name: string;
  amount: number | null;
  units: Units;
  id?: string;
};

type Action = {
  type: string;
  payload?: any;
};

const reducer = (state: AddProductType, action: Action): AddProductType => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, name: action.payload };
    case SET_AMOUNT:
      return { ...state, amount: action.payload };
    case SET_UNITS:
      return { ...state, units: action.payload };
    case RESET:
      return { units: Units.kg, name: '', amount: 0 };

    default:
      return state;
  }
};

export const productActions = {
  setTitle: (name: string): Action => ({
    type: SET_TITLE,
    payload: name,
  }),
  setAmount: (amount: number | null): Action => ({
    type: SET_AMOUNT,
    payload: amount,
  }),
  setUnits: (units: Units): Action => ({
    type: SET_UNITS,
    payload: units,
  }),
  reset: (): Action => ({
    type: RESET,
  }),
};

interface Form {
  state: AddProductType;
  actions: {
    setTitle: Function;
    setAmount: Function;
    setUnits: Function;
    reset: Function;
  };
}

export const useProductForm = (addInitialValues: AddProductType): Form => {
  const [state, dispatch] = useReducer(reducer, addInitialValues);

  const actions = {
    setTitle: (title: string): void => dispatch(productActions.setTitle(title)),
    setAmount: (amount: number): void =>
      dispatch(productActions.setAmount(amount)),
    setUnits: (units: Units): void => dispatch(productActions.setUnits(units)),
    reset: (): void => dispatch(productActions.reset()),
  };
  return { state, actions };
};
