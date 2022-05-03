package Java.ArraysAndStrings;

import java.util.HashMap;
import java.util.Map;

public class CheckPermutation {

    boolean checkPermutation(String str1, String str2) {
        if (str1.equals(str2)) {
            return true;
        }
        Map<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < str1.length(); i++) {
            map.put(str1.charAt(i), map.getOrDefault(str1.charAt(i), 0) + 1);
        }

        for (int i = 0; i < str2.length(); i++) {
            if (map.get(str2.charAt(i)) == null) {
                return false;
            } else {
                map.put(str2.charAt(i), map.get(str2.charAt(i)) - 1);
            }
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        CheckPermutation checkPermutation = new CheckPermutation();
        System.out.println(checkPermutation.checkPermutation("test13", "123test"));
    }

}
