package Control;

import Model.Station;
import Model.Ligne;
import Model.Troncon;


public class ControllerPrincipal {
    
    public static final ControllerPrincipal INSTANCE = new ControllerPrincipal();

    public void localiserUser () {
    }

    public void calculerItineraire () {
    }

    public void ajouter (Station s) {
    }

    public void ajouter (Troncon t) {
    }

    public void ajouter (Ligne l) {
    }

    public static ControllerPrincipal getINSTANCE()
    {
        return INSTANCE;
    }
}

