package Phone_challenge;

public class Main {

  public static void main(String[] args) {
    LandLine newLandLine = new LandLine("235632234", "1 Sydney St Sydney");
    newLandLine.call(newLandLine);

    LandLine secondLandLine = new LandLine(
      "0444452222",
      "52 Hunter St Melbourne"
    );
    newLandLine.call(secondLandLine);

    Mobile newMobile = new Mobile("346624");
    Mobile personBMobile = new Mobile("2112221");
    newMobile.text(personBMobile, "hello mate");
    newMobile.call(newMobile);
    personBMobile.call(personBMobile);
    newLandLine.call(newMobile);
  }
}
