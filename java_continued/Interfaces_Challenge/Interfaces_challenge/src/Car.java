public class Car implements Vehicle {

  int speed;

  public Car(int speed) {
    this.speed = speed;
  }

  double speedAdjustment = 0.44704;

  @Override
  public String getSpeed() {
    return String.format(
      "The speed in m/s is: %d",
      (int) (this.speed * speedAdjustment)
    );
  }

  @Override
  public String decreaseSpeed(int s) {
    return String.format(
      "The reduced speed in m/s is: %d",
      (int) ((this.speed - s) * speedAdjustment)
    );
  }
}
