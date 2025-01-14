import java.net.InetAddress;
import java.net.Socket;

public class clientsocket {
    public class example{
        public static void main(String[] args) throws  Exception {
            InetAddress  address = InetAddress.getLocalHost();
            Socket socket = new Socket();
            System.out.println("Connected to server");
            socket.close();
            
        }
    }
}
