package Model;


public class Troncon {

    private Station depart;

    private Station arrivee;

    private boolean hasIncident;

    private int tpsParcours;

    public Troncon () {
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

