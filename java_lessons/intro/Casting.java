package java_lessons.intro;

public class Casting {
    public static void main(String[] args) {
        byte byte1 = 12; // I can turn this into another data type
		short short1 = (short) byte1;
		System.out.println(short1);
		
		// be careful with casting. We can lose data when casting - which can lead to bugs
		short short2 = 300;
		byte byte2 = (byte) short2;
		System.out.println(byte2); // we get 44
		short short3 = (short) byte2;
		System.out.println(short3); // still 44
		
		// We can cast more than just numbers
		int charCode = (int) 'B';
		System.out.println(charCode); // we get 66
    }
}
