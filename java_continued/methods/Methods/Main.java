package java_continued.methods.Methods;

public class Main {

  public static void main(String[] args) {
    int sum = Maths.add(5, 5);
    System.out.println("The sum is " + sum);

    try {
      int division = Maths.divide(10, 0);
      System.out.println("The answer is " + division);
    } catch (ArithmeticException e) {
      System.out.println("Don't divide by zero");
    } catch (Exception e) {
      System.out.println("oops that was a mistake");
      System.out.println(e.getMessage());
    }

    int subtraction = Maths.subtract(10, 2);
    System.out.println("The answer is " + subtraction);

    Animal fluffy = new Animal("cat", "fluffy", "Meow");
    Animal fido = new Animal("dog", "Fido", "woof");
    fluffy.printDetails();
    fido.printDetails();
    fluffy.makeSound();
    fido.makeSound();
    // fluffy.getSound(); // no longer visible as it is private

    int area = (int) Maths.findArea(3);
    System.out.println(area);

    Person me = new Person("Kai", "Zhang");
    System.out.println(me.fullName());

    System.out.println(Area.findArea());
    System.out.println(Area.findArea(14.0));
    System.out.println(Area.findArea(5, 2));

    System.out.println(Dates.convertSeconds(4000L));
    System.out.println(Dates.convertSeconds(4000, 5));
    System.out.println(dateFormatter(3600));
  }

  public static String dateFormatter(long seconds) {
    long hours = seconds / 3600;
    long minutes = (seconds % 3600) / 60;
    long remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
    return String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
  }

  public static String dateFormatter(long minutes, long seconds) {
    long totalSeconds = (minutes * 60) + seconds;
    return dateFormatter(totalSeconds);
  }

  public static String dateFormatter(long hours, long minutes, long seconds) {
    long totalMinutes = (hours * 60) + minutes;
    return dateFormatter(totalMinutes, seconds);
  }
}
