public class Song extends Track {

  String artist; // can include this new field in the constructor

  public Song(String title, float length, String extension, String artist) {
    super(title, length, extension); // this is passing these details back to the parent constructor
    this.artist = artist;
  }

  // allow us to do a new printTrackInfo implementation for the song
  @Override
  public void printTrackInfo() {
    System.out.printf("The song %s is by artist %s\n", this.title, this.artist);
  }
}
