import rus_dict from '../../../dataset/dataset_rus';
import sorted_by from '../../../dataset/sorted_by';
import { createAutoComplete } from '../../../services/autoComplete';

export const productSearcher = (str: string) => {
  if (str.length < 2) {
    return [];
  }

  const rusSet = Object.keys(rus_dict);
  const rus = createAutoComplete(rusSet);
  const bel = createAutoComplete(sorted_by);
  const resultSet = new Set<string>(
    rus(str)
      .map((rusStr: string) => rus_dict[rusStr])
      .concat(bel(str)),
  );
  const result = Array.from(resultSet);

  if (result.length === 1 && result[0] === str) {
    return [];
  }
  return result;
};
