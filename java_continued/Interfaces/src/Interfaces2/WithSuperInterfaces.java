package Interfaces2;

public class WithSuperInterfaces implements SecondInterface {

  @Override
  public String secondInterfaceMethod() {
    return "Hello";
  }

  // because the second interface extends the first interface, we also need to add it here
  @Override
  public void FirstInterfaceMethod() {
    System.out.println("hi");
  }
}
