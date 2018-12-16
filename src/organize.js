const organize = (units, options = {}) => (value) => {
  const {strict = false} = options;
  const groups = [];
  let groupIndex = 0;
  let remainder = value;

  do {
    const unit = units[groupIndex];
    const groupValue = unit ? remainder % unit : remainder;
    groups.push(groupValue);
    remainder = (remainder - groupValue) / (unit || 1);
    groupIndex += 1;
  } while (remainder > 0);

  if (strict) {
    const remainingGroups = units.length + 1 - groups.length;
    for (let i = 0; i < remainingGroups; i++) {
      groups.push(0);
    }
  }

  return groups.reverse();
};

export default organize;
