export const linear = (ref, refMin, refMax, min, max) => {
  const perc = 100 / (refMax / ref)
  const onePercRes = max / 100
  return (onePercRes * perc) / 2 + min
}

const chunkify = (arr, size) => {
  const output = []
  while (arr.length > 0) {
    output.push(arr.splice(0, size))
  }
  return output
}

export const reorderPicsArray = (picsArr) => {
  const tempOutput = []
  const arr = Array.from(Array(picsArr.length).keys())
  const chunked = chunkify([...arr], 4)
  chunked.forEach((_, i) => {
    tempOutput.push(chunked[0].map((n) => n * 3).map((n) => n + i))
  })
  const flattenedOutput = tempOutput.flat()
  flattenedOutput.length = picsArr.length
  const foundOutput = flattenedOutput.map((pid) =>
    picsArr.find((p) => p.id === pid)
  )
  return foundOutput
}
