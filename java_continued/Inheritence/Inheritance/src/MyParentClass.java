public class MyParentClass {

  float data;
  private String name; // won't inherit private fields

  public MyParentClass(float data) {
    this.data = data;
  }

  public void parentMethod() {
    System.out.printf("Parent method: %f\n", data);
  }
}
