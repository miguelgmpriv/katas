function expandedForm(num) {
  const numArray = [...String(num)].map(Number);
  const allExpanded = numArray.reverse().reduce((newArr, curr, index) => {
    const expandedNum = curr * 10 ** index;
    if (expandedNum !== 0) newArr.push(expandedNum);
    return newArr;
  }, []);
  return allExpanded.reverse().join(" + ");
}

expandedForm(70304);
