package Streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

  public static void main(String[] args) {
    Integer[] numbers = { 1, 2, 3, 4, 5 };
    //! must use wrapper instead of the primitive types (e.g. Integer instead of int)

    // double the numbers in the array

    // for loop
    Integer[] doubled = new Integer[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      doubled[i] = numbers[i] * 2;
    }

    // instead I can turn the numbers array into a stream
    // .map
    Stream<Integer> numberStream = Stream.of(numbers);

    // now that it is a stream, we can use the Stream methods
    // (ClassName::MethodName) -> how we use in Java
    Stream<Integer> doubledNumberStream = numberStream.map(
      MathHelper::doubleNumber
    );

    // convert the Stream back into an Array
    Integer[] doubledWithStream = doubledNumberStream.toArray(Integer[]::new);

    System.out.println(Arrays.toString(doubledWithStream)); // remember to do Arrays.toString to print out the array. can't directly print
    // [2, 4, 6, 8, 10]

    // Streams don't modify the original array [1,2,3,4,5]
    System.out.println(Arrays.toString(numbers));

    //^ Lambda functions -> similar to arrow functions in JS */

    Integer[] dNums = Stream
      .of(numbers) // turn into Stream
      .map(num -> num * 2) // use iterator
      .toArray(Integer[]::new); // change back to array

    //~ Filter
    Integer[] moreThanThree = Stream
      .of(numbers)
      .filter(num -> num > 3)
      .toArray(Integer[]::new);

    System.out.println(Arrays.toString(moreThanThree)); // [ 4, 5 ]

    // store doubled numbers that are greater than 5
    //& chaining methods together. first is mapping, then filter.
    Integer[] doubledAndMoreThan5 = Stream
      .of(numbers)
      .map(MathHelper::doubleNumber)
      .filter(num -> num > 5)
      .toArray(Integer[]::new);

    System.out.println(Arrays.toString(doubledAndMoreThan5)); // [6, 8, 10]

    //^ ArrayList

    ArrayList<String> names = new ArrayList<String>(
      Arrays.asList("Alex", "Alice", "andy", "John", "Kate")
    );

    System.out.println(names); // [Alex, Alice, andy, John, Kate]

    // for loop
    ArrayList<String> startsWithA = new ArrayList<>();
    for (String name : names) {
      if (name.toLowerCase().charAt(0) == 'a') {
        startsWithA.add(name);
      }
    }
    System.out.println(startsWithA); // [Alex, Alice, andy]

    // anything that is a collection, we use the .stream()
    // ArrayList implements a collection, so we use the .stream()
    Stream<String> fromArrayList = names.stream();
    ArrayList<String> startsWithAWithStream = fromArrayList
      .filter(n -> n.toLowerCase().charAt(0) == 'a')
      .collect(Collectors.toCollection(ArrayList::new));

    System.out.println(startsWithAWithStream); // [Alex, Alice, andy]

    //^ Optional is a special data type
    // first name that starts with a
    Optional<String> firstAName = startsWithA
      .stream()
      .filter(n -> n.toLowerCase().charAt(0) == 'a')
      .findFirst();
    //findFirst will not return error if can't find a value that matches. will return a special return type called Optional which may or may not have a value

    // monad -> optional return type, instead of breaking our code
    System.out.println(firstAName); // Optional[Alex]

    // lets only print if the optional has a value
    if (firstAName.isPresent()) {
      System.out.println(firstAName.get()); // just get Alex
    } else {
      System.out.println("Guest");
    }

    Consultant kate = new Consultant("Kate", "Melbourne");
    Consultant john = new Consultant("John", "Sydney");
    Consultant alice = new Consultant("Alice", "Adelaide");

    alice.printConsultants();

    Optional<Consultant> maybeConsultant = Consultant.findById(3);
    if (maybeConsultant.isPresent()) {
      System.out.println(maybeConsultant.get().getName() + " found consultant");
    } else {
      System.out.println("Consultant not found");
    }

    kate.increaseSalary(5000.00);
    alice.increaseSalary(2000.00);

    System.out.println(Consultant.totalSalaryCost());

    System.out.println(Consultant.calculateAverage());

    Consultant.getConsultants().stream().forEach(Consultant::increaseBy5k);

    Consultant
      .getConsultants()
      .stream()
      .forEach(c -> System.out.println(c.toString()));
  }
}
