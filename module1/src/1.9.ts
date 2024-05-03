{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Razibul Hossen",
    age: 28,
    gender: "Male",
    contactNo: "01794553096",
    address: "Germany",
  };

  const student2: Student = {
    name: "Selim Molla",
    age: 32,
    gender: "Male",
    address: "Greece",
  };

  const student3: Student = {
    name: " Ik Shihan",
    age: 34,
    gender: "Male",
    contactNo: "01728774584",
    address: "France",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Razibul";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
