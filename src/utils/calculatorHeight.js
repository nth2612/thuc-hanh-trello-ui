export const calHeight = (element) => {
  // const elementHeight = element.offsetHeight
  const elem = document.querySelector(`${element}`)
  console.log(elem?.offsetHeight);
  return elem?.offsetHeight
}