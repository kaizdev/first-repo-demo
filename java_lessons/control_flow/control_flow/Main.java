package java_lessons.control_flow.control_flow;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // if statements have the same syntax with the exception of not being able to use truthy/falsy values

        byte age = 18;
        boolean isCitizen = true;
        if(age >= 18 && isCitizen) {
            System.out.println("You can vote");
        } else {
            System.out.println("No voting for you");
        }

        // else if -> returns the first match, so order is important
        // Note: if we write bad code inside the if-statement, it won't compile correctly - pick up mistakes even if the code doesn't get run e..g. the 2nd else statement
        String country = "au";

        if (age >=21 ) {
            System.out.println("You can drink in America");
        } else if (age >=18 && country.equals("au")) {
            System.out.println("You can drink in Australia");
        } else {
            System.out.println("No alcohol for you");
        }

        // better to use .equals (rather than ==), which compares the values
        String string1 = "Alex";
        String string2 = "Alex";
        if (string1 == string2) {
            System.out.println("Same same");
        };

        boolean comparison = string1.equals("Alex");
        System.out.println(comparison);

        // Challenge: Positive or Negative?
        // Scan user input and print...
        // "n is positive" if n (the number that was scanned) is positive
        // "n is negative" if n is negative
        System.out.println("---Positive or Negative Challenge---");
        Scanner s = new Scanner(System.in);
        System.out.println("Please enter a number");
        int num = s.nextInt();
        if (num > 0) {
            System.out.println("number is positive");
        } else {
            System.out.println("number is negative");
            System.out.println(String.format("%d",num));
        }


        
        // Challenge: Find the largest input
        // Get 3 numbers from the user
        // Print "n is the largest", n being the largest of the 3 inputs

        System.out.println("---Find the largest input Challenge---");
        System.out.println("Please enter 3 numbers");
        int num1 = s.nextInt();
        int num2 = s.nextInt();
        int num3 = s.nextInt();
        if (num1 > num2 && num1 > num3) {
            System.out.println(String.format("%d is the largest", num1));
        } else if (num2 > num1 && num2 > num3){
            System.out.println(String.format("%d is the largest", num2));
        } else {
            System.out.println(String.format("%d is the largest", num3));
        }
        s.close();

        //* alternative way to find the largest:
        // double largestNum = num1;
        // if (num2 > largestNum) {
        // largestNum = num2;
        // }
        // if (num3 > largestNum) {
        // largestNum = num3;
        // }
        // System.out.println(largestNum + "is the largest number");



        for (int i = 0; i <=10; i+=2 ) {
            if (i ==2) {
                continue;
            }
            if (i == 8) {
                break;
            }
            System.out.println(i);
        }

    }
}

