import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

public class Main {

  public static void main(String[] args) {
    //^ Reduce with 2 parameters

    //~ Array of integers. I want integer back
    ArrayList<Integer> numbers2 = new ArrayList<>(Arrays.asList(2, 3, 4));

    // in JS, this would be numbers2.reduce((prev, curr) => prev + curr, 0)
    int sumOfNumbers2 = numbers2
      .stream()
      .reduce(0, (prev, curr) -> prev + curr); // would still work if combiner function is added (but not needed)

    System.out.println(sumOfNumbers2); // 9

    ArrayList<String> greetings = new ArrayList<>(
      Arrays.asList("Hello", "hi", "good morning")
    );

    //~ Array of Strings. I want a single string where the greetings are separated by a comma

    String allGreetings = greetings
      .stream()
      .reduce(
        "",
        (prev, curr) -> {
          if (prev.equals("")) {
            return curr;
          }
          return prev + ", " + curr;
        }
      );

    System.out.println(allGreetings);

    //~ I want the length of all the greetings together
    //~ Array of Strings -> Want integer back

    //^ 2 situations where we need 3rd parameter for Reduce (called combiner function)
    // - parallel results that are running (streams) and need to combine partial elements together, OR
    // - data type we want back is different from the data type that we store
    // - in situations where the result of reducing is a different data type to the data type stored in my array, I need the 3rd parameter (combiner function)

    //~ These 3 all produce the same results (just 3 different ways to use the combiner function)
    // remember that greetings is an Array of Strings

    int lengthOfGreetings = greetings
      .stream()
      .reduce(0, (prev, curr) -> prev + curr.length(), Integer::sum);

    int lengthOfGreetings2 = greetings
      .stream()
      .reduce(0, (prev, curr) -> prev + curr.length(), (a, b) -> a + b);

    int lengthOfGreetings3 = greetings
      .stream()
      .reduce(
        0,
        (prev, curr) -> prev + curr.length(),
        (a, b) -> Integer.sum(a, b)
      );

    System.out.println(lengthOfGreetings);
    System.out.println(lengthOfGreetings2);
    System.out.println(lengthOfGreetings3);

    //~ can also modify to have the same data type -> using map to convert it to the data type we want at the end (then just use 2 args)
    int lengthWithMap = greetings
      .stream()
      .map(g -> g.length())
      .reduce(0, (prev, curr) -> prev + curr);
    System.out.println(lengthWithMap);

    // what happens if no initial parameter provided (i.e. 1 argument)
    // returns an empty optional for an empty stream
    // returns an optional with the reduction result as the value of that optional

    Optional<Integer> maybeSum = numbers2
      .stream()
      .reduce((prev, curr) -> prev + curr);

    System.out.println(maybeSum.get());

    ArrayList<Integer> nums3 = new ArrayList<>(); // empty stream example

    Optional<Integer> maybeSum2 = nums3.stream().reduce(Integer::sum); // no initial value provided

    System.out.println(maybeSum.isPresent()); // true
    System.out.println(maybeSum2.isPresent()); // false

    // reduce with 2 arguments -> returns the initial (first argument) if the stream is empty
    System.out.println(nums3.stream().reduce(0, Integer::sum));
  }
}
