export function createAutoComplete(data: string[]) {
  return function (str: string) {
    const reg = new RegExp(`${str}`, 'i');
    if (!str) {
      return [];
    }
    return addMatchesToAnswer(data, str, reg);
  };
}

function findFirstOccurrence(arr: string[], str: string, reg: RegExp) {
  if (arr[0].search(reg) > -1) {
    return 0;
  }
  if (
    arr[0].toLowerCase() > str.toLowerCase() ||
    arr[arr.length - 1].toLowerCase() < str.toLowerCase()
  ) {
    return null;
  }
  return checkMiddleElement(arr, str, reg);
}

function checkMiddleElement(
  arr: string[],
  str: string,
  reg: RegExp,
  leftBorder = 0,
  rightBorder = arr.length - 1,
): any {
  const current = Math.ceil(leftBorder + (rightBorder - leftBorder) / 2);
  if (arr[current].search(reg) > -1 && arr[current - 1].search(reg) === -1) {
    return current;
  }
  if (
    rightBorder - leftBorder === 1 &&
    arr[rightBorder - 1].search(reg) === -1
  ) {
    return null;
  }
  if (arr[current].toLowerCase() >= str.toLowerCase()) {
    return checkMiddleElement(arr, str, reg, leftBorder, current);
  } else {
    return checkMiddleElement(arr, str, reg, current, rightBorder);
  }
}

function addMatchesToAnswer(thisData: string[], str: string, reg: RegExp) {
  const answer = [];
  let answerFirst = findFirstOccurrence(thisData, str, reg);
  if (answerFirst !== null) {
    while (
      answerFirst < thisData.length &&
      thisData[answerFirst].search(reg) > -1
    ) {
      answer.push(thisData[answerFirst]);
      answerFirst++;
    }
  }
  return answer;
}
