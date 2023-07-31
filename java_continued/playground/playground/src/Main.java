public class Main {

  public static void main(String[] args) {
    System.out.println(sleepIn(true, true));
  }

  public static boolean sleepIn(boolean weekday, boolean vacation) {
    if (!weekday || vacation == true) {
      return true;
    }

    return false;
  }
}
