{
  //  mapped types
  const arrayOfNumbers: number[] = [1, 4, 5, 8];

  // const arrayOfStrings: string[] = ["1", "4", "5", "8"];
  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  // type AreaString = {
  //  height: string;
  //  width: string;
  // }
  // keyof AreaNumber => 'height' | 'width'

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
