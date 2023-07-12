package java_continued.Classes;

public class Person {
    // public String name = "Alex";
    // int age = 35;
    // leave off the keyword, it is public by default

    // can use inside the person class, but can't access outside of this class
    // public void stateAge() {
    //     System.out.println(age);
    // }

    private String name;
    private byte age;

    // making the constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = (byte) age;
    }

    // methods are functions that are attached to objects
    // this is a getter
    public String getName() {
        return this.name;

    }
        /**
         * Sets the name of the object.
         *
         * @param  name  the new name to set
         * @throws IllegalArgumentException  if the name is null or empty
         */

    // this is a setter
    public void setName(String newName) {
        // some logic around setting a name
        // .e.g validation
        if (newName.length() < 3) {
            return;
        }
        this.name = newName;
    }

    public byte getAge() {
        return this.age;
    }


}
