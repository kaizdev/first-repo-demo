package Generics;

import java.util.ArrayList;

public class Main {

  public static void main(String[] args) {
    TopThreeListOfStrings words = new TopThreeListOfStrings(
      "holidays",
      "weekend",
      "money"
    );

    TopThreeList<Book> bookList = new TopThreeList<>(
      new Book("intro to JS"),
      new Book("harry potter"),
      new Book("sherlock holmes")
    );

    TopThreeList<Song> songList = new TopThreeList<>(
      new Song("baby"),
      new Song("howdy"),
      new Song("one more time")
    );

    // TopThreeList<Book> booklist2 = new TopThreeList<Book>(
    //   "book1",
    //   "book2",
    //   "book3"
    // );

    TopThreeList<String> stringList = new TopThreeList<String>(
      "holiday",
      "money",
      "rest"
    );
    TopThreeList<Integer> numberList = new TopThreeList<Integer>(12, 15, 18);

    // we've seen this before
    ArrayList<String> strs = new ArrayList();
    strs.add("one");
    strs.add("two");

    ArrayList<Integer> ints;

    ArrayList<Book> books;

    String[] someStrings = { "flower", "bread" };

    PrintArray.printAnyArray(someStrings);

    Integer[] someInts = { 23, 254, 36 };
    PrintArray.printAnyArray(someInts);

    Character[] someChars = { 'a', 'e', 'c' };
    PrintArray.printAnyArray(someChars);

    Integer x = 10;
    Integer y = 15;

    Coordinates<Integer> coords = new Coordinates<Integer>(x, y);
    Book book1 = new Book("some title");
    Book book2 = new Book("some other title");
    System.out.printf("the book title is %s\n", book1.title);

    System.out.println(book1.title); // how to print an object - object.property
    // Coordinates<Book> otherCoords = new Coordinates<>(book1, book2); // won't work - not valid because generic is bounded by Number

  }
}
