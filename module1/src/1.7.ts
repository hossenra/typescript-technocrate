{
  // spread operator
  // rest operator
  // destructuring

  // spread operator

  const bros1: string[] = ["selim", "tetu", "karim"];
  const bros2: string[] = ["lalil", "dalim", "nobin"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Rahim", "Sohel", "Shadin", "Tetu", "Sharif");
}
