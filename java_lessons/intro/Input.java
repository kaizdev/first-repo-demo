package java_lessons.intro;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        // Scanner is built into the Java library
		Scanner s = new Scanner(System.in);
		System.out.println("Please enter your name");
		String name = s.nextLine();
		System.out.println("Hello "+ name);
		System.out.println("Input a number");
		int num = s.nextInt();
		System.out.println("You picked " + num);
		s.close();
		
		// whenever we use the scanner, we need to close the scanner to prevent resource leak
    }
}
