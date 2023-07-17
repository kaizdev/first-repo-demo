public class Teacher extends Person {

  String teacherName;

  public Teacher(String name) {
    super(name);
  }

  public String getPersonName() {
    return this.name;
  }

  public String callMeeting(Person person) {
    return this.name + " and " + person.name + " are in a meeting";
  }
}
