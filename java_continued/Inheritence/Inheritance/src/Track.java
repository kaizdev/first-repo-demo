public class Track {

  // here i I will put all the stuff that a song and a podcast have in common

  String title;
  float length;
  String extension;

  public Track(String title, float length, String extension) {
    this.title = title;
    this.length = length;
    this.extension = extension;
  }

  public String getFileName() {
    return this.title + "." + this.extension;
  }

  public void printTrackInfo() {
    System.out.printf("%s.%s - %f\n", this.title, this.extension, this.length);
  }
}
