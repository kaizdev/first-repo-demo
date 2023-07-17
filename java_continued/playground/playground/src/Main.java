public class Main {

  public static void main(String[] args) {
    // myMethod("Liam");
    // myMethod("Jenny");
    // myMethod("Anja");
    System.out.println(sum(10));

    System.out.println("hi");
    Tests kai = new Tests("kai", "kai@gmail.com", 35);
    System.out.println(kai.getAge());
  }

  //   static void myMethod(String fname) {
  //     System.out.println(fname + " Zhang");
  //   }

  public static int sum(int k) {
    if (k > 0) {
      return k + sum(k - 1);
    } else {
      return 0;
    }
  }
}
