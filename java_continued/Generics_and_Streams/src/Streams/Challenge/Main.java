package Streams.Challenge;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

  public static void main(String[] args) {
    // Store 5 books in an ArrayList
    ArrayList<Book> bookCollection = new ArrayList<>(
      Arrays.asList(
        new Book("Money", 2000, "Adam Smith", 1980),
        new Book("The Box", 230, "Marc Levinson", 2012),
        new Book("The World Until Yesterday", 150, "Jared Diamond", 1999),
        new Book("Harry Potter", 200, "JK Rowling", 2004),
        new Book("Poor Numbers", 342, "Morten Jeroen", 2020)
      )
    );
    // List of titles converted to uppercase. ArrayLists implements a collection, so we use the .stream() method.
    //~ prints out only the list of titles
    Stream<Book> booksStream = bookCollection.stream();
    ArrayList<String> booksUppercase = booksStream
      .map(book -> book.title.toUpperCase())
      .collect(Collectors.toCollection(ArrayList::new));
    System.out.println(booksUppercase);

    // print out the items from the book (example)
    // note - did an override in the Book class to return the toString()
    bookCollection.stream().map(Book::toString).forEach(System.out::println);

    // a list of books that were published after year 2000.
    //~ Prints out an array of books
    ArrayList<Book> booksAfter2000 = bookCollection
      .stream()
      .filter(book -> book.yearPublished > 2000)
      .collect(Collectors.toCollection(ArrayList::new));

    System.out.println(booksAfter2000);

    // int that will store the value of all pages of the books combined
    // Going from ArrayList of books -> int : will need combiner function
    int totalBookPages = bookCollection
      .stream()
      .reduce(0, (prev, curr) -> prev + curr.pages, Integer::sum);
    System.out.println(totalBookPages);

    // find the book with the highest amount of pages (try and use reduce or look for other methods)
    Optional<Book> maxPagesBook = bookCollection
      .stream()
      .reduce((book1, book2) -> book1.pages > book2.pages ? book1 : book2);

    if (maxPagesBook.isPresent()) {
      System.out.println(maxPagesBook.get()); // add .get(), otherwise prints "optional" at the front
    } // Title: Money, Pages: 2000, Author: Adam Smith, Publish Year: 1980

    // alternative way to find max pages book
    Optional<Book> maxPagesBook_usingMax = bookCollection
      .stream()
      .max(Comparator.comparingInt(book -> book.pages));
    System.out.println(maxPagesBook_usingMax.get()); // Title: Money, Pages: 2000, Author: Adam Smith, Publish Year: 1980
  }
}
