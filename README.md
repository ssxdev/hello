# Hello World SDK

A lightweight TypeScript SDK for printing customizable "Hello World!" greetings to the console.

## Installation

Install the package using npm:

```sh
npm install @ssxdev/hello
```

## Usage

Import the `sayHello` function and use it with different combinations of parameters:

```typescript
import { sayHello } from "@ssxdev/hello";

// Basic greeting
sayHello();
// Output: Hello World!

// Greeting with first name
sayHello({ firstName: "Charlie" });
// Output: Hello Charlie!

// Greeting with full name
sayHello({ firstName: "Bob", lastName: "Johnson" });
// Output: Hello Bob Johnson!

// Complete greeting with age
sayHello({ firstName: "Alice", lastName: "Smith", age: 25 });
// Output: Hello Alice Smith, you are 25 years old!
```

## API Reference

### `sayHello(props: SayHelloProps)`

Parameters:

```typescript
type SayHelloProps = {
    firstName?: string;
    lastName?: string;
    age?: number;
};
```

## License

MIT © ssxdev
