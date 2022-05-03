package Java.ArraysAndStrings;

import java.util.HashMap;
import java.util.Map;

public class PalindromePermutation {

    boolean palindromePermutation(String str) {
        str = str.replace(" ", "").toLowerCase();
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            map.put(str.charAt(i), map.getOrDefault(str.charAt(i), 0) + 1);
        }

        int oddCharacterCount = 0;
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() % 2 != 0) {
                oddCharacterCount++;
            }
            if (oddCharacterCount > 1) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        PalindromePermutation palindromePermutation = new PalindromePermutation();
        System.out.println(palindromePermutation.palindromePermutation("Tact Coa obba"));
    }

}
