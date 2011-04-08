package Control;

import Model.Ligne;
import Model.Station;
import Model.Troncon;
import java.util.List;


public class ControllerMetro {

    private List<Ligne> lignes;

    private List<Station> stations;

    private List<Troncon> troncons;

    public ControllerMetro () {
    }

    public List<Ligne> getLignes () {
        return lignes;
    }

    public void setLignes (List<Ligne> val) {
        this.lignes = val;
    }

    public List<Station> getStations () {
        return stations;
    }

    public void setStations (List<Station> val) {
        this.stations = val;
    }

    public List<Troncon> getTroncons () {
        return troncons;
    }

    public void setTroncons (List<Troncon> val) {
        this.troncons = val;
    }

}

