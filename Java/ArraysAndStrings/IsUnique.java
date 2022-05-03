package Java.ArraysAndStrings;

import java.util.HashMap;
import java.util.Map;

public class IsUnique {

    boolean isUnique(String str) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            map.put(str.charAt(i), map.getOrDefault(str.charAt(i), 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() > 1) {
                return false;
            }
        }

        return true;
    }

    boolean isUniqueWithoutExtraSpace(String str) {
        for (int i = 0; i < str.length() - 1; i++) {
            for (int j = i + 1; j < str.length(); j++) {
                if (str.charAt(i) == str.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        IsUnique isUnique = new IsUnique();
        String str = "tes123";
        System.out.println(isUnique.isUnique(str));
        System.out.println(isUnique.isUniqueWithoutExtraSpace(str));
    }

}
