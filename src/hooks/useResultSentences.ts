export const useResultSentences = (
  finishedRunnerList: string[] | undefined,
  isRank: boolean
) => {
  if (!finishedRunnerList) return;
  if (isRank) {
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
  } else {
    const result = finishedRunnerList
      .map((name, index) => {
        if (index < 3) {
          return 'Alpha: ' + name;
        } else if (index < 6) {
          return 'Blabo: ' + name;
        } else {
          return 'Charlie: ' + name;
        }
      })
      .join('\n')
      .replace(/\n/g, `<br>`);
    return result;
  }
};
