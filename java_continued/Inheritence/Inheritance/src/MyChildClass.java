public class MyChildClass extends MyParentClass {

  // The child class needs its own constructor, it does not inherit the parent constructor

  // the child class also inherits the initialised 'float data' -> did not have to repeat this in the child class

  public MyChildClass(float data) {
    super(data);
  }

  // we can also add any extra methods in the child class
  public void childMethod() {
    System.out.println("Child method");
  }
}
