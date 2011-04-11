package Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


public class Ligne implements Serializable{

    private List<Troncon> parcours;

    public Ligne () {
    }

    public List<Troncon> getParcours () {
        return parcours;
    }

    public void setParcours (List<Troncon> val) {
        this.parcours = val;
    }

    public List<Troncon> trouverIncidentOnTroncon () {
        List<Troncon> tronconIncident = new ArrayList<Troncon>();
        for(Troncon troncon : parcours) {
            if(troncon.getHasIncident()) {
                tronconIncident.add(troncon);
            }
        }

        return tronconIncident;
    }

    public List<Station> trouverIncidentOnStation () {
        List<Station> stationIncident = new ArrayList<Station>();
        for(Troncon troncon : parcours) {
            if(troncon.getDepart().getHasIncident()) {
                stationIncident.add(troncon.getDepart());
            }
            if(troncon.getArrivee().getHasIncident()) {
                stationIncident.add(troncon.getArrivee());
            }
        }
        return stationIncident;
    }

}

