package Interfaces2;

public class HealthPotion implements ApplyEffect {

  @Override
  public void apply(Player player) {
    player.setHealth(player.health + 20);
  }
}
