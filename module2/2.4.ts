{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Selim Molla",
    computer: {
      brand: "Apple",
      model: "Macbook Air",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "2019",
      display: "gorilla",
    },
  };

  // interface Developer<T> {
  //   name: string;
  //   computer: {
  //     brand: string;
  //     model: string;
  //     releaseYear: number;
  //   };
  //   smartWatch: T;
  // }

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Razibul Hossen",
    computer: {
      brand: "Apple",
      model: "Macbook Pro",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "2022",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
