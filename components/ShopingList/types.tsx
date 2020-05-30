export type ProductEntityType = {
  name: string;
  count: string;
  id: string;
  boughtOptions: null | {
    cost: null | number;
    amount: null | number;
  };
};
