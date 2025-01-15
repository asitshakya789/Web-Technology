import java.net.InetAddress;
import java.net.UnknownHostException;

public class GetIP {
    public static void main(String[] args) {
        try {
            InetAddress localHost = InetAddress.getLocalHost();
            
            String ipAddress = localHost.getHostAddress();
            
            System.out.println("Your device's IP address is: " + ipAddress);
        } catch (UnknownHostException e) {
            System.out.println("Unable to get IP address");
            e.printStackTrace();
        }
    }
}
        