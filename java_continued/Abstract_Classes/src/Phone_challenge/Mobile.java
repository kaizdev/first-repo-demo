package Phone_challenge;

public class Mobile extends Phone {

  public Mobile(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public void text(Mobile otherMobile, String message) {
    System.out.println(
      "Message to other mobile " + otherMobile.phoneNumber + " " + message
    );
  }
}
