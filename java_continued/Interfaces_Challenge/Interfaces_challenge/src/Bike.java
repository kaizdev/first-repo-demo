public class Bike implements Vehicle {

  int speed;

  public Bike(int speed) {
    this.speed = speed;
  }

  // convert miles to km using speedAdjustment
  double speedAdjustment = 1.6093440006147;

  @Override
  public String getSpeed() {
    return String.format(
      "The speed in km/h is: %d",
      (int) (this.speed * speedAdjustment)
    );
  }

  @Override
  public String decreaseSpeed(int s) {
    return String.format(
      "The reduced speed in km/h is: %d",
      (int) ((this.speed - s) * speedAdjustment)
    );
  }
}
