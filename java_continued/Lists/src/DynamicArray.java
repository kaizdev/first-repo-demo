import java.util.Arrays;

public class DynamicArray {

  private int[] data;
  private int length = 0; // defaults to 0
  private int buffer;

  public DynamicArray() {
    this.buffer = 5;
    this.data = new int[this.buffer];
  }

  //   creating an abstraction
  public void viewContent() {
    System.out.println(Arrays.toString(this.data));
  }

  private void resize() {
    this.buffer *= 2;
    this.data = Arrays.copyOf(this.data, this.buffer);
  }

  public void add(int item) {
    // note that this will get the value and then add +1
    this.data[this.length++] = item;
    if (this.length == this.buffer) {
      this.resize(); // we only use resize here, not in main as it is private.
    }
  }

  public int size() {
    return this.length;
  }

  public int get(int index) {
    return this.data[index];
  }
}
