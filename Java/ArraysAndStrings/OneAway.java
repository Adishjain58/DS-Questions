package Java.ArraysAndStrings;

import java.util.HashMap;
import java.util.Map;

public class OneAway {

    boolean oneAway(String str1, String str2) {
        if (str1.equals(str2)) {
            return true;
        }
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str1.length(); i++) {
            map.put(str1.charAt(i), map.getOrDefault(str1.charAt(i), 0) + 1);
        }

        for (int i = 0; i < str2.length(); i++) {
            map.put(str2.charAt(i), map.getOrDefault(str2.charAt(i), 0) - 1);
        }

        int positiveCount = 0;
        int negativeCount = 0;

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() > 0) {
                positiveCount += entry.getValue();
            } else if (entry.getValue() < 0) {
                negativeCount -= entry.getValue();
            }
        }

        if (positiveCount > 1 || negativeCount > 1) {
            return false;
        }

        return true;
    }

    public static void main(String[] args) {
        OneAway oneAway = new OneAway();
        System.out.println(oneAway.oneAway("pale", "ple"));
        System.out.println(oneAway.oneAway("pales", "paez"));
        System.out.println(oneAway.oneAway("pale", "bale"));
        System.out.println(oneAway.oneAway("pale", "pakes"));
    }

}
