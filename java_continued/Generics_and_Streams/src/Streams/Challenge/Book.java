package Streams.Challenge;

public class Book {

  String title;
  int pages;
  private String author;
  int yearPublished;

  public Book(String title, int pages, String author, int yearPublished) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  @Override
  public String toString() {
    return (
      "Title: " +
      title +
      ", Pages: " +
      pages +
      ", Author: " +
      author +
      ", Publish Year: " +
      yearPublished
    );
  }

  public void printBookDetails() {
    System.out.printf(
      "Title is: %s, pages: %d, Author: %s, Year Published: %d\n",
      this.title,
      this.pages,
      this.author,
      this.yearPublished
    );
  }
}
// Create a class Book
// each book should have a title, pages, author, yearPublished
// a constructor that will take in all those properties
// In Main create 5 books and store in an ArrayList
// using streams, create
// a list of titles converted to uppercase
// a list of books that were published after year 2000
// int that will store the value of all pages of the books combined
// find the book with the highest amount of pages (try and use reduce or look for other methods)
