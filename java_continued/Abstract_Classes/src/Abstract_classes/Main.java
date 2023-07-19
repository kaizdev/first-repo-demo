package Abstract_classes;

public class Main {

  public static void main(String[] args) {
    EverydayAccount everydayAcc = new EverydayAccount(1000);
    everydayAcc.printBalance();

    SavingsAccount savingsAcc = new SavingsAccount(20000);
    savingsAcc.printBalance();

    System.out.println(everydayAcc.getBalanceAfterYears(2));
    System.out.println(savingsAcc.getBalanceAfterYears(3));
  }
}
