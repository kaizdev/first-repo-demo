package Interfaces;

public class Main {

  public static void main(String[] args) throws Exception {
    Cat cat = new Cat();
    Dog dog = new Dog();
    Ant ant = new Ant();

    System.out.println(cat.sound());
    System.out.println(dog.sound());

    // Polymorphism - I can treat cat and dog as MakesSound
    AnimalUtils.printAnimalInfo(dog);
    AnimalUtils.printAnimalInfo(cat);
    // AnimalUtils.printAnimalInfo(ant); // can't use this because it doesn't fulfill the rules of the interface. It doesn't have the sound

    MakesSound[] animals = { cat, dog };

    String[] bookCharacters = { "Rasko" };

    Book book = new Book(534, 12, "Crime and Punishment", bookCharacters);
    System.out.println(book.getInfo());
    book.getCharacters();

    String[] harryPotterCharacters = { "Ron", "Hagrid" };
    Film harryPotter = new Film(
      "Prisoner of Azkaban",
      (short) 2004,
      harryPotterCharacters
    );

    IMedia[] booksAndFilms = { book, harryPotter };
    for (int i = 0; i < booksAndFilms.length; i++) {
      System.out.println(booksAndFilms[i].getInfo());
    }
  }
}
