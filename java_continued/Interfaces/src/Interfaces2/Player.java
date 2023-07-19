package Interfaces2;

public class Player {

  public int health;
  public final int max = 100; // final is a constant, can't change

  public Player(int health) {
    this.health = 100;
  }

  public void setHealth(int health) {
    if (health > this.max) {
      this.health = this.max;
    } else if (health < 0) {
      this.health = 0;
    } else {
      this.health = health;
    }
  }
}
