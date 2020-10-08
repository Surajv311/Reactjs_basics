const pi = 3.14;

function fun1() {
  return pi * 3;
}

function fun2() {
  return pi * 2;
}

export default pi; // this is the default export

// to do any other exports

export { fun1, fun2 };
