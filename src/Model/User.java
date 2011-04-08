package Model;


public class User {

    private String nom;

    private Position position;

    public User () {
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

}

