{
  //  constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 444,
    name: "Tetu",
    email: "tetu@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Rahim Khan",
    email: "rahim@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "karim Khan",
    email: "karim@gmail.com",
    hasWatch: "Apple watch",
  });

  //
}
