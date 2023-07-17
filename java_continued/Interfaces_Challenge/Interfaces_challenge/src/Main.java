public class Main {

  public static void main(String[] args) throws Exception {
    Bike bike = new Bike(80);
    System.out.println("Bike");
    System.out.println(bike.getSpeed());
    System.out.println(bike.decreaseSpeed(10));

    Car car = new Car(100);
    System.out.println("Car");
    System.out.println(car.getSpeed());
    System.out.println(car.decreaseSpeed(20));
  }
}
