import java.util.*;

public class Pangram {

    public static Boolean checkPangramOrNot(String str) {
        int n = str.length();
        // validation check or edge case
        if (n < 26)
            return false;
        // Taking an array of size 26. (a-0,b-1, .....z-25)
        int HashArr[] = new int[26];
        for (int i = 0; i < n; i++) {
            // checking value is between A to Z
            // incrementing corresponding hash value;
            if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
                HashArr[str.charAt(i) - 'A']++;
            } else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
                HashArr[str.charAt(i) - 'a']++;
            }
        }
        // if any hashvalue is 0 then it means string does not consist of all alphabets.
        for (int i = 0; i < 26; i++) {
            if (HashArr[i] == 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        // taking input
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        sc.close();

        // function call
        if (checkPangramOrNot(str)) {
            System.out.println("Pangram");
        } else {
            System.out.println("Not a Pangram");
        }
    }
}
// Time Complexity:O(n) where n is length of the string
// Space Complexity:O(26) constant Space