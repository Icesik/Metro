package Model;


public class Position {

    private int x;

    private int y;

    public Position(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    public int getX () {
        return x;
    }

    public void setX (int val) {
        this.x = val;
    }

    public int getY () {
        return y;
    }

    public void setY (int val) {
        this.y = val;
    }

}

