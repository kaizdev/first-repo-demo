package java_lessons.control_flow.control_flow;

import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        boolean isRunning = true;

        while (isRunning) {
            System.out.println("Type c to continue, or 'e' or 'x' to exit");
            // note: no .nextChar - we need to use .next().charAt(index)
            char command = scan.next().charAt(0);
        
            switch(command) {
                case 'c': 
                    System.out.println("Continue running");
                    break;
                case 'e':
                case 'E':
                case 'x':
                case 'X':
                    System.out.println("Exiting");
                    isRunning = false;
                    break;
                default: 
                    System.out.println("Command not recognised");
            }
        }
        
        scan.close();
    }
}
