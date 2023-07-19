package Phone_challenge;

abstract class Phone {

  String phoneNumber;

  public void call(Phone phone) {
    System.out.println("Calling " + phone.phoneNumber + "...");
  }
}
