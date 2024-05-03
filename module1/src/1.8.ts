// destructuring

const user = {
  id: 345,
  name: {
    firstName: "Razibul",
    middleName: "Hossen",
    lastName: "Raju",
  },
  contactNo: "01794553096",
  address: "Germany",
};

const {
  contactNo,
  name: { middleName },
} = user;

// array destructuring

const myFriends = [
  "Rahim",
  "Karim",
  "Selim",
  "Tetu",
  "Rasel",
  "Tipu",
  "Tauhid",
];

const [, , bestFriend, ...rest] = myFriends;
