const sortStringValue = (str) => {
  const splitStr = str.split(' ').sort()
  return splitStr.join(' ')
}

module.exports = {
  sortString: sortStringValue
}
