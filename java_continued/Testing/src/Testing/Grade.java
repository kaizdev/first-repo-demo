package Testing;

public class Grade {

  private int points;
  private boolean isPassing;
  private final int THRESHOLD = 50;

  //   Grade(int points) {
  //     this.points = points;
  //     this.setPassing();
  //   }

  Grade() {}

  // need a way to read that value
  public boolean getIsPassing() {
    return this.isPassing;
  }

  // setter
  public void setPassing() {
    this.isPassing = this.points >= THRESHOLD;
  }

  public char calculateGrade(int points) {
    if (points > 80) {
      return 'a';
    } else if (points > 60) {
      return 'b';
    } else if (points > 40) {
      return 'c';
    } else {
      return 'd';
    }
  }

  public int getPoints() {
    return this.points;
  }

  public void setPoints(int points) throws PointsOutOfRange {
    // i want some logic here
    if (points < 0 || points > 100) {
      // throw an exception
      throw new PointsOutOfRange("Invalid points amount");
    }
    this.points = points;
    this.setPassing();
  }
}
