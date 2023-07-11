package java_lessons.intro;

public class Main {
    public static void main(String[] args) {

		// comments are the same
		// output - more options than JS
		// to a new line
		System.out.println("Hello there");
		
		// print without line breaks
		System.out.print("Hello \n");
		System.out.print("there \n");
		
		// Data Types
		// byte -128 to 127
		byte myByte = 126;
		System.out.println(myByte);
		
		myByte += 1;
		System.out.println(myByte);
		
		// numbers will overflow if we try and increase past the limit. Start counting back from the lowest value
		
		myByte++;
		System.out.println(myByte); // prints out -128 as it has overflowed
		
		
		// Range -32768 - 32767
		short myShort = 3252;
		short myShort2 = 13526;
		// with casting we also overflow
		short myBigShort = (short) 32769;
		System.out.println(myBigShort);
		
		// int - -2,147,483,648 to 2,147,483,647. Use underscore as thousands separators
		int myInt = 12_345_135;
		int smallestInt = -2_147-483_648;
		
		// long
		// gotcha with a long - we need to put an L at the end to specify a long
		long reallyBigNumber = 213_234_556_332_443L;
		
		
		// same gotcha with a float - put an F at the end. default decimal is a double
		float myFloat = 1.25252F;
		
		// double - java assumes by default
		double myDouble = 1.24156334;
		
		// booleans - 1 bit
		boolean myBool = true;
		myBool = false;
		
		// char single character - takes up to 2 bytes (16 bits)
		// represented by single quotes. Double quotes is for strings
		
		char myChar = 'A';
		
		
    }
}