package Model;


public class Station {

    private String nom;

    private boolean hasIncident;

    private int tpsArret;

    private Position position;

    public Station () {
    }

    public boolean getHasIncident () {
        return hasIncident;
    }

    public void setHasIncident (boolean val) {
        this.hasIncident = val;
    }

    public String getNom () {
        return nom;
    }

    public void setNom (String val) {
        this.nom = val;
    }

    public Position getPosition () {
        return position;
    }

    public void setPosition (Position val) {
        this.position = val;
    }

    public int getTpsArret () {
        return tpsArret;
    }

    public void setTpsArret (int val) {
        this.tpsArret = val;
    }

}

