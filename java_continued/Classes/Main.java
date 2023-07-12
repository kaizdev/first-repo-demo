package java_continued.Classes;

public class Main {

  public static void main(String[] args) {
    // Animal cat = new Animal("cat", "cat", "meow");
    // System.out.println(cat.getSpecies());
    // System.out.println(cat.getName());
    // System.out.println(cat.getSound());

    Animal cat = new Animal();
    System.out.println(cat.getName());
    System.out.println(cat.getSound());

    Animal dog = new Animal("dog", "dog", "woof");
    System.out.println(
      String.format(
        "Species: %s. A %s makes a %s",
        dog.getSpecies(),
        dog.getName(),
        dog.getSound()
      )
    );

    Animal bear = new Animal("bear", "bear", "roar");
    System.out.println(
      String.format(
        "Species: %s. A %s makes a %s",
        bear.getSpecies(),
        bear.getName(),
        bear.getSound()
      )
    );
    // We can have multiple constructors with the same name if their args are different

    // Person me = new Person("Kai", 35);
    // // me.name = "Kai";
    // me.setName("Kai Zhang");
    // System.out.println(me.getName());
    // System.out.println(me.getAge());
    // Alex
    // System.out.println(me.age); // cannot access the age as it is PRIVATE in the Person class.
    // me.age = 35;
    // System.out.println(me.age);

    // Person alex = new Person("Alex", 36);
    // // alex.name = "Alex";
    // // alex.age = 36;
    // System.out.println(alex.name + " " + alex.age);

  }
}
