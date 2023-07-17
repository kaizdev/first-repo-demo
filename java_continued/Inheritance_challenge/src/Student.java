public class Student extends Person {

  String cohort;

  public Student(String name, String cohort) {
    super(name);
    this.cohort = cohort;
  }

  @Override
  public String printPersonName() {
    return "My name is " + this.name + " and my cohort is " + this.cohort;
  }
}
