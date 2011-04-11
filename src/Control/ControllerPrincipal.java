package Control;

import Model.Station;
import Model.Ligne;
import Model.Position;
import Model.Troncon;
import Model.User;

public class ControllerPrincipal
{

    private static final ControllerPrincipal INSTANCE = new ControllerPrincipal();
    private ControllerGPS controllerGps = new ControllerGPS();
    private ControllerMetro controllerMetro = new ControllerMetro();

    public void localiserUser(int x, int y)
    {
        User.getINSTANCE().setPosition(new Position(x, y));
    }

    public void calculerItineraire()
    {
        
    }

    public void ajouter(Station s)
    {
        controllerMetro.getStations().add(s);
    }

    public void ajouter(Troncon t)
    {
        controllerMetro.getTroncons().add(t);
    }

    public void ajouter(Ligne l)
    {
        controllerMetro.getLignes().add(l);
    }

    public static ControllerPrincipal getINSTANCE()
    {
        return INSTANCE;
    }

    public ControllerGPS getControllerGps()
    {
        return controllerGps;
    }

    public ControllerMetro getControllerMetro()
    {
        return controllerMetro;
    }
}
