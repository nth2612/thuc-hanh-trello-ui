export const calHeight = (element) => {
  // const elementHeight = element.offsetHeight
  const elem = document.querySelector(`.${element}`)
  return elem?.offsetHeight
}