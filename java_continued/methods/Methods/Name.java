package java_continued.methods.Methods;

public class Name {

  private String firstName;
  private String lastName;

  // Constructor
  public Name(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method
  public String fullName(String firstName, String lastName) {
    return (this.firstName + " " + this.lastName);
  }
}
