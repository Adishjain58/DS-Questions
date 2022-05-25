package Java.ArraysAndStrings;

public class StringRotation {

    boolean stringRotation(String str1, String str2) {
        return isSubstring(str2 + str2, str1);
    }

    boolean isSubstring(String str1, String str2) {

        int i = 0, j = 0, match = 1;
        while (i < str1.length() && j < str2.length()) {
            if (match == str2.length()) {
                return true;
            }
            if (str2.charAt(j) != str1.charAt(i)) {
                i++;
                match = 1;
            } else {
                i++;
                j++;
                match++;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        StringRotation stringRotation = new StringRotation();
        System.out.println(stringRotation.stringRotation("waterbottle", "erbottlewat"));
    }

}
