{
  // encapsulation
  {
    // access modifiers
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }

      public addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      private getBalance() {
        return this._balance;
      }

      getHiddenMethod() {
        return this._balance;
      }
    }

    class StudentAccount extends BankAccount {
      test() {}
    }

    const goribManuserAccount = new BankAccount(111, "Sazzad Hossain", 1500);
    goribManuserAccount.addDeposit(300);
    // const maBalance = goribManuserAccount.getBalance();
    // console.log(maBalance);

    //
  }

  //
}
