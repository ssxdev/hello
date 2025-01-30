import { SayHelloProps } from "./types";

export function sayHello({
  firstName,
  lastName,
  age,
}: SayHelloProps = {}): string {
  if (firstName && lastName && age) {
    return `Hello ${firstName} ${lastName}, you are ${age} years old!`;
  } else if (firstName && lastName) {
    return `Hello ${firstName} ${lastName}!`;
  } else if (firstName) {
    return `Hello ${firstName}!`;
  } else {
    return "Hello World!";
  }
}
