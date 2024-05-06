{
  //  generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Rahim", "Karim", "selim"];
  const mentors: GenericArray<string> = ["Rahim", "Karim", "selim"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Razibul",
      age: 28,
    },
    {
      name: "Selim",
      age: 18,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(10, 20);

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Selim", "Rahim"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Selim", email: "selim@gmail.com" },
  ];

  //
}
