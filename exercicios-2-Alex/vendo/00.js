class Conta{
    constructor(holder, balance, accountNumber) {
      this.holder = holder;
      this.balance = balance;
      this.accountNumber = accountNumber;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient balance");
      }
    }
  
    displaySummary() {
      console.log(`Account Summary:
        Holder: ${this.holder}
        Account Number: ${this.accountNumber}
        Balance: ${this.balance}
        Deposited: ${this.balance - this.withdrawals}
        Withdrawn: ${this.withdrawals}`);
    }
  }
  
  // Create an instance of the Account class
  const account = new Conta ("John Doe", 0, "123456");
  
  // Deposit some money
  account.deposit(500);
  account.deposit(1000);
  
  // Withdraw some money
  account.withdraw(200);
  
  // Display the account summary
  account.displaySummary();