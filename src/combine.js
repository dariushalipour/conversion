const combine = (units) => (value) => {
  const groups = value;
  let output = 0;
  let times = 1;
  let unitIndex = -2;

  for (let i = groups.length - 1; i >= 0; --i) {
    const partAmount = groups[i];
    times *= units[++unitIndex] || 1;
    output += partAmount * times;
  }

  return output;
};

export default combine;
