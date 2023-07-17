public class Tests {

  private String name;
  private String email;
  private int age;

  public Tests(String name, String email, int i) {
    this.name = name;
    this.email = email;
    this.age = i;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void printAge() {
    System.out.println(this.getAge() + "age");
  }

  static void myMethod() {
    System.out.println("I just got executed");
  }

  static void checkAge(int age) {
    if (age < 18) {
      System.out.println("You are not old enough");
    } else {
      System.out.println("You are ok and old enough");
    }
  }
}
