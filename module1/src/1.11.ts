{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 19;
  if (age >= 18) {
    console.log("adult age");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult age" : "not adult age";
  // console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Razibul Hossen",
    address: {
      city: "Berlin",
      road: "Siegmunds Hof 2",
      presentAddress: "Berlin Germany",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
