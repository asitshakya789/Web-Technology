import java.net.InetAddress;
import java.net.UnknownHostException;

public class GetIP {
    public static void main(String[] args) {
        try {
            // Get the InetAddress object representing the local host
            InetAddress localHost = InetAddress.getLocalHost();
            
            // Get the IP address as a string
            String ipAddress = localHost.getHostAddress();
            
            // Display the IP address
            System.out.println("Your device's IP address is: " + ipAddress);
        } catch (UnknownHostException e) {
            System.out.println("Unable to get IP address");
            e.printStackTrace();
        }
    }
}
