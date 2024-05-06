{
  // Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Selim",
  });

  //
  // const createArray = (param: string): string[] => {
  //   return [param];
  // };

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Rahim Khan",
    email: "rahim@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "karim Khan",
    email: "karim@gmail.com",
    hasWatch: "Apple watch",
  });

  //
}
