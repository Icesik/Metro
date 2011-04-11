package Model;

import java.io.Serializable;
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

    public Troncon trouverIncidentOnStation () {
        return null;
    }

    public Station trouverIncidentOnTroncon () {
        return null;
    }

}

