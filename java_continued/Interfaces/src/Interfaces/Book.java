package Interfaces;

public class Book implements IMedia {

  int chapters;
  int pages;
  String name;
  String[] characters;

  public Book(int chapters, int pages, String name, String[] characters) {
    this.chapters = chapters;
    this.pages = pages;
    this.name = name;
    this.characters = characters;
  }

  public void getCharacters() {
    System.out.println("The characters in the book are: ");
    for (int i = 0; i < characters.length; i++) {
      if (i == characters.length - 1) {
        System.out.println(characters[i] + ".");
      } else {
        System.out.println(characters[i] + ", ");
      }
    }
  }

  public String getInfo() {
    return (
      "The name of the book is " +
      this.name +
      " , it has " +
      this.pages +
      " pages."
    );
  }
}
