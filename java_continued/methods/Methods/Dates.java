package java_continued.methods.Methods;

public class Dates {

  //   private long seconds;

  public static String convertSeconds(long seconds) {
    long hours = seconds / 3600;
    long remainder = seconds % 3600;
    long minutes = remainder / 60;
    long sec = remainder % 60;

    return String.format("%02dh%02dm%02ds", hours, minutes, sec);
  }

  public static String convertSeconds(long seconds, long minutes) {
    long totalSeconds = minutes * 60 + seconds;
    return convertSeconds(totalSeconds);
  }
}
