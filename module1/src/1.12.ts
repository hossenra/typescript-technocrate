{
  //
  // nullable type / unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  // unknown type of

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedInMeterPerSecond(null);

  // never
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("make by mistake");

  //
}
