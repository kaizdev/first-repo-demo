package java_lessons.control_flow.control_flow;

import java.util.Scanner;

public class Challenge {
    public static void main(String[] args) {

// Challenge: Rounding Floats
// Request 2 float inputs from the user
// Round both to 3 decimal places
// if they are the same number after rounding:
// print "Both numbers are n after rounding"
// else
// print "n1, and n2 are different numbers", n1s and n2 being the 2 rounded values
        Scanner s = new Scanner(System.in);
        System.out.println("Please enter the first float");
        float num1 = s.nextFloat();
        System.out.println("Please enter the second float");
        float num2 = s.nextFloat();
        float roundedNum1 = Math.round(num1 * 1000) / 1000f;
        float roundedNum2 = Math.round(num2 * 1000) / 1000f;
        if (roundedNum1 == roundedNum2) {
            System.out.println(String.format("Both numbers are the same (%.3f) after rounding",roundedNum1));
        } else {
            System.out.println(String.format("%.3f and %.3f are different numbers",roundedNum1, roundedNum2));
        }
        s.close();

        // Challenge: What's the number of x in y?
// Scan user input twice
// Allowed inputs:
// "s" => seconds
// "m" => minutes
// "h" => hours
// "D" => days
// "M" => months
// "Y" => years
// Input => Output Examples:
// 1st: "M", 2nd: "D" => "There are 30 days in a month"
// 1st: "M", 2nd: "h" => "There are 720 hours in a month"
// 1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
// 1st: "M", 2nd: "Y" => "There are no years in a month"
// 1st: "s", 2nd: "h" => "There are no hours in a second"
// Assumptions:
// There are 30 days in a month
        // System.out.println("Type s, m , h, D, M, or Y");
        // char command = s.next().charAt(0);
        // System.out.println(command);
    }
}





