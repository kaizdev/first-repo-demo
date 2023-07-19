package Abstract_classes;

abstract class Account {

  // replace public keyword with abstract keyword

  // each account will have some balance. Note that an interface does not allow us to update the values
  double balance;

  // need to add the abstract keyword. The interest rate will be different for every account (will return a different number)
  // adding an abstract method, each class can implement it differently
  // DIFFERENT FOR ALL CLASSES
  abstract double getInterestRate();

  // logic is the same for each account
  // in an abstract class, we can have methods with implementation as well
  // allows to reduce code repetition
  // SAME FOR ALL CLASSES
  public double getBalanceAfterYears(int years) {
    for (int i = 0; i < years; i++) {
      balance += balance * this.getInterestRate();
    }
    return this.balance;
  }

  public void printBalance() {
    System.out.println("The balance is" + this.balance + " dollars");
  }
}
