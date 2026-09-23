const msg = "hello world modified";
const msgTwo = "Greetings";

function greet(msg, msgTwo) {
  console.log(msg, msgTwo);
}

greet(msg, msgTwo);

const num1 = 5;
const num2 = 10;

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(num1, num2));

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(generateRandomColor());

const getRandomNumber = () =>{
  return Math.floor(Math.random() * 100);
}
console.log(getRandomNumber());