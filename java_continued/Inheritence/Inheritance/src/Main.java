public class Main {

  public static void main(String[] args) {
    MyParentClass parent = new MyParentClass(123.123f);
    MyChildClass child = new MyChildClass(23.23f);

    parent.parentMethod();
    child.parentMethod();

    child.childMethod();
    System.out.println(child.data);
    System.out.println(parent.data);
    // child class inherits from parent
    // parent class does not have access to child methods

    // create  an instance of a podcast
    String[] guests = { "Jeff" };
    Podcast programmingPodcast = new Podcast(
      "Software Engineering Daily",
      1.5f,
      "mp3",
      guests
    );

    Song someSong = new Song("Faint", 0.01f, "mp3", "Linkin Park");

    programmingPodcast.printTrackInfo();
    someSong.printTrackInfo();
    System.out.println(programmingPodcast.getFileName());
    System.out.println(someSong.getFileName());

    //* This won't work, error from podcast */
    // Song[] songs = { SomeSong, programmingPodcast};

    //* This won't work, error from song */
    // Podcast podcasts = {[programmingPodcast, someSong]}

    // this works because they both inherit the Track array
    // Polymorphism -> allows objects of different classes to be treated as if they were objects of the same class
    Track[] tracks = { someSong, programmingPodcast };
  }
}
