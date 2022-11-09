export const linear = (ref, refMin, refMax, min, max) => {
  const perc = 100 / (refMax / ref)
  const onePercRes = max / 100
  return (onePercRes * perc) / 2 + min
}