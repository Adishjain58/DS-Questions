package Java.ArraysAndStrings;

public class StringCompression {

    String stringCompression(String str) {
        StringBuilder res = new StringBuilder();
        int count = 1;
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) != str.charAt(i - 1)) {
                res.append(str.charAt(i - 1));
                res.append(count);
                count = 1;
            } else {
                count++;
            }
        }

        res.append(str.charAt(str.length() - 1));
        res.append(count);
        return res.length() > str.length() ? str : new String(res);
    }

    public static void main(String[] args) {
        StringCompression stringCompression = new StringCompression();
        System.out.println(stringCompression.stringCompression("aabcccccaaa"));
    }

}
