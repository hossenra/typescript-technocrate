{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManuserAccount = new BankAccount(111, "Sazzad Hossain", 1200);

  // goribManuserAccount.deposit = 0;
  // goribManuserAccount.addDeposit(300);

  goribManuserAccount.deposit = 300;

  // const maBalance = goribManuserAccount.getBalance();

  const maBalance = goribManuserAccount.balance; // property er moto kore
  console.log(maBalance);

  //
}
