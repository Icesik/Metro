package Model;

import java.io.Serializable;


public class Troncon implements Serializable{

    private Station depart;

    private Station arrivee;

    private boolean hasIncident;

    private int tpsParcours;

    public Troncon(Station depart, Station arrivee, int tpsParcours)
    {
        this.depart = depart;
        this.arrivee = arrivee;
        this.tpsParcours = tpsParcours;
        this.hasIncident = false;
    }

    public Station getArrivee () {
        return arrivee;
    }

    public void setArrivee (Station val) {
        this.arrivee = val;
    }

    public Station getDepart () {
        return depart;
    }

    public void setDepart (Station val) {
        this.depart = val;
    }

    public boolean getHasIncident () {
        return hasIncident;
    }

    public void setHasIncident (boolean val) {
        this.hasIncident = val;
    }

    public int getTpsParcours () {
        return tpsParcours;
    }

    public void setTpsParcours (int val) {
        this.tpsParcours = val;
    }

}

