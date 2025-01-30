import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps): void {
  if (firstName && lastName && age) {
    console.log(`Hello ${firstName} ${lastName}, you are ${age} years old!`);
  } else if (firstName && lastName) {
    console.log(`Hello ${firstName} ${lastName}!`);
  } else if (firstName) {
    console.log(`Hello ${firstName}!`);
  } else {
    console.log("Hello World!");
  }
}
