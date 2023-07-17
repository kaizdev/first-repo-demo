public class Main {

  public static void main(String[] args) throws Exception {
    Student Kai = new Student("Kai Zhang", "Uruguay");

    Student Alice = new Student("Alice", "Uruguay");
    Student Bob = new Student("Bob", "Uruguay");

    Kai.printPersonName();

    Teacher Alex = new Teacher("Alex");
    Teacher Calum = new Teacher("Calum");

    System.out.println(Alex.callMeeting(Kai));
    System.out.println(Calum.callMeeting(Alice));

    Person[] persons = { Kai, Alice, Bob, Alex, Calum };

    for (Person person : persons) {
      System.out.println(person.printPersonName());
    }
  }
}
