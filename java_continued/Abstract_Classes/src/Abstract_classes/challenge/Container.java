package Abstract_classes.challenge;

abstract class Container {

  double volume;

  abstract double getVolume();

  public double teaspoonCount() {
    return Math.ceil(this.getVolume() / 150);
  }
}
