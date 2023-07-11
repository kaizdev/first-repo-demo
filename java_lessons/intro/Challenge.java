package java_lessons.intro;

import java.util.Scanner;

public class Challenge {
    public static void main(String[] args) {
    		//- Create a byte, integer and double using the scanner to take input
		Scanner s = new Scanner(System.in);
		System.out.println("Please enter a byte");
		byte byte1 = s.nextByte();
		System.out.println("Byte printed:" + byte1);
		
		System.out.println("Please enter a number");
		int num = s.nextInt();
		System.out.println("Integer printed: " + num);

		
		System.out.println("Please enter a double");
		double double1 = s.nextDouble();
		System.out.println("Double printed: " + double1);
		
		//- Create an integer that is the result of dividing your byte by a number selected by the user
		
		System.out.println("Please select a divisor");
		int divisor = s.nextInt();
		int result = byte1 / divisor;
		System.out.println(String.format("%d divided by %d. Your result is %d", byte1, divisor, result));
		
				
		//- Create a long by taking input from the user for a short and multiplying that by another short
		
		System.out.println("Please enter the first short");
		short short1 = s.nextShort();
		System.out.println("Please enter the second short");
		short short2 = s.nextShort();
		long longResult = short1 * short2;
		System.out.println(String.format("%d multiplied by %d is %d", short1, short2, longResult));
		
		
		s.close();
    }
}