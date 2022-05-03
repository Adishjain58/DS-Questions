package Java.ArraysAndStrings;

public class URLify {

    String urlIfy(String str) {
        System.out.println(str.replace(" ", "%20"));
        System.out.println(str.replaceAll("[ ]", "%20"));
        StringBuilder stringBuilder = new StringBuilder();
        char[] charArray = str.toCharArray();
        for (int i = 0; i < charArray.length; i++) {
            if (charArray[i] == ' ') {
                stringBuilder.append("%20");
            } else {
                stringBuilder.append("" + charArray[i]);
            }
        }

        return new String(stringBuilder);
    }

    public static void main(String[] args) {
        URLify urLify = new URLify();
        System.out.println(urLify.urlIfy("This is test"));
    }

}
