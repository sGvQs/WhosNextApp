export const useResultSentences = (
  finishedRunnerList: string[] | undefined
) => {
  if (!finishedRunnerList) return;
  const result = finishedRunnerList
    .map((name, index) => {
      switch (index) {
        case 0:
          return '1st : ' + name;
        case 1:
          return '2nd : ' + name;
        case 2:
          return '3rd : ' + name;
        default:
          return index + 1 + 'th : ' + name;
      }
    })
    .join('\n')
    .replace(/\n/g, `<br>`);
  return result;
};
