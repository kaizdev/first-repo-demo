import java.util.ArrayList;

public class Main {

  public static void main(String[] args) {
    DynamicArray myArray = new DynamicArray();
    myArray.add(1);
    myArray.add(2);
    myArray.add(3);
    myArray.add(4);
    myArray.add(5);
    System.out.println(myArray.size());
    System.out.println(myArray.get(0));
    myArray.viewContent();
    myArray.add(6);
    System.out.println(myArray.get(5));
    myArray.viewContent();

    // Array Lists - use most of the time when working with arrays
    //^ ArrayList<String>
    ArrayList<String> names = new ArrayList<String>();
    System.out.println(names); // empty array as nothing t here so far
    names.add("Alice");
    names.add("Bob");
    System.out.println(names.size()); // 2
    System.out.println(names); // prints ["Alice", "Bob"]
    System.out.println(names.get(0)); // Alice

    //^ ArrayList<Integer>
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    // Integers is slightly different from ints
    Integer myNumber = 1;
    System.out.println(myNumber.intValue()); // prints 1
    numbers.add(myNumber); // add this to the array
    System.out.println(numbers); // prints [1]
  }
}
