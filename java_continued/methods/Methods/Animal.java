package java_continued.methods.Methods;

public class Animal {

  private String breed;
  private String name;
  private String sound;

  public Animal(String breed, String name, String sound) {
    this.breed = breed;
    this.name = name;
    this.sound = sound;
  }

  public void printDetails() {
    System.out.println(
      String.format(
        "%s is a %s and they make %s sounds",
        this.name,
        this.breed,
        this.sound
      )
    );
  }

  public void makeSound() {
    // this is a private method but we can use it in the same class
    System.out.println(this.getSound() + "!!!!");
  }

  public String getBreed() {
    return this.breed;
  }

  public String getName() {
    return this.name;
  }

  // maybe we want these private
  private String getSound() {
    return this.sound;
  }
}
