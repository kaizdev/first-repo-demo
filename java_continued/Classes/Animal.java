package java_continued.Classes;

public class Animal {

// It should have a species property (for the name of the animal, e.g cat, dog)

private String species;
private String name;
private String sound;

// default constructor
public Animal() {
    this.species = "cat";
    this.name = "cat";
    this.sound = "meow";
}


public Animal(String species, String name, String sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
}

public String getSpecies() {
    return this.species;
}

public String getName() {
    return this.name;
}

public String getSound() {
    return this.sound;
}

// It should have a name property (for the name of the animal, e.g cat, dog)
// It should have a sound property (for the noise is makes, e.g oink)
// It should default to a cat that meows
// It should have a constructor that sets name and sound based on arguments
// In you main function:
// instantiate a dog that woofs
// ... a bear that roars
// print each of their sounds to the console
}
