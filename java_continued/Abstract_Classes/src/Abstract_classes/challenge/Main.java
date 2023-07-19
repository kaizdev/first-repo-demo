package Abstract_classes.challenge;

public class Main {

  public static void main(String[] args) {
    Mug newMug = new Mug();
    System.out.println(newMug.getVolume());
    System.out.println(newMug.teaspoonCount());

    LatteGlass newLatteGlass = new LatteGlass();
    System.out.println(newLatteGlass.getVolume());
    System.out.println(newLatteGlass.teaspoonCount());

    ShotGlass newShotGlass = new ShotGlass();
    System.out.println(newShotGlass.getVolume());
    System.out.println(newShotGlass.teaspoonCount());
  }
}
