export const dateToStr = function (timestamp) {
  return new Date(timestamp * 1000).toLocaleString()
}
