export const copyData = (src) => {
  const res = []
  for (let l of src) {
    if (typeof l === 'object') {
      const [...line] = l
      res.push(line)
    } else {
      res.push(l)
    }
  }
  return res
}

export const arrayShuffle = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]]
  }
  return arr
}