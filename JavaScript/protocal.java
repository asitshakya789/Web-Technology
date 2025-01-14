import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;

public class protocal {
    public static void main(String[] args) throws MalformedURLException { 
        URL url = new URL("http://www.google.com");
        System.out.println("URL is: " + url.getHost());
        System.out.println("URL is: " + url.getProtocol());
        System.out.println("URL is: " + url.getPort());
        System.out.println("URL is: " + url.getPath());
    }
}
