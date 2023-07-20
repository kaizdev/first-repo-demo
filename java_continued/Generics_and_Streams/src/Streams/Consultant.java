package Streams;

import java.util.ArrayList;
import java.util.Optional;

public class Consultant {

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLocation() {
    return this.location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public Double getSalary() {
    return this.salary;
  }

  public void setSalary(Double salary) {
    this.salary = salary;
  }

  public Integer getID() {
    return this.ID;
  }

  public void setID(Integer ID) {
    this.ID = ID;
  }

  private String name;
  private String location;
  private Double salary;

  // ensure IDs are unique by using the count
  public static Integer count = 0;
  private Integer ID;

  // let's pretend this is from a database
  static ArrayList<Consultant> consultants = new ArrayList<>();

  // When I create a new consultant, I also want to add them to my consultants ArrayList

  public Consultant(String name, String location) {
    this.name = name;
    this.location = location;
    this.ID = ++count;
    this.salary = 50000.00;
    consultants.add(this);
  }

  public void printConsultants() {
    for (int i = 0; i < consultants.size(); i++) {
      System.out.println(consultants.get(i).name);
    }
  }

  //& A method that will allow me to find a consultant by ID
  // maybe there is a consultant with a specified ID, maybe there isn't -> use optional

  public static Optional<Consultant> findById(Integer id) {
    return consultants.stream().filter(c -> c.ID == id).findFirst();
  }

  // returns the sum of all consultants salaries
  public static Double totalSalaryCost() {
    return consultants.stream().mapToDouble(c -> c.getSalary()).sum();
  }

  public void increaseSalary(Double payrise) {
    this.salary += payrise;
  }

  public static Double calculateAverage() {
    return consultants
      .stream()
      .mapToDouble(c -> c.getSalary())
      .average() // need orElse as can't convert OptionalDouble to Double
      .orElse(0.00); // if no average, return 0.00
  }

  // I want to print consultants details to the console.
  @Override
  public String toString() {
    return (
      "Consultant [name = " + name + " salary " + salary + " ID " + ID + "]"
    );
  }

  public static ArrayList<Consultant> getConsultants() {
    return consultants;
  }

  public void increaseBy5k() {
    this.salary += 5000.00;
  }
}
