const randomIntNumber = (min = 1031, max = 1039) => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomIntNumber;