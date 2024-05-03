// Reference Type --> Object
{
  const user: {
    readonly company: string; //type --> literal type
    firstName: string;
    middleName?: string; // optional type ?
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Tata Company",
    firstName: "Selim",
    middleName: "Hossain",
    lastName: "Molla",
    isMarried: true,
  };
}
