package Interfaces;

public interface MakesSound {
  // interfaces can have fields but they are FINAL, which means I can never update the value
  //! String sound = "some sound here";

  // In here I put method signatures, no implementations
  // Each class that will IMPLEMENT the interface, needs to provide the methods implementation

  public String sound(); // e.g. if inheritance, we would have to keep overriding the methods
}
