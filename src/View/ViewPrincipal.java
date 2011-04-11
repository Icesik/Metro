package View;

import Control.ControllerPrincipal;
import Model.Troncon;
import Model.Ligne;
import Model.Station;
import java.util.Scanner;

public class ViewPrincipal implements Runnable
{

    public void run()
    {
        Scanner sc = new Scanner(System.in);
        Integer choix = 0;

        do
        {
            System.out.println("MENU");
            choix = Integer.valueOf(sc.nextLine());
        }
        while(choix != 0);
    }

    public void saisirPosition(int x, int y)
    {
        ControllerPrincipal.getINSTANCE().localiserUser(x, y);
    }

    public void calculerItineraire()
    {
        ControllerPrincipal.getINSTANCE().calculerItineraire();
    }

    public void ajouter(Station s)
    {
        ControllerPrincipal.getINSTANCE().ajouter(s);
    }

    public void ajouter(Troncon t)
    {
        ControllerPrincipal.getINSTANCE().ajouter(t);
    }

    public void ajouter(Ligne l)
    {
        ControllerPrincipal.getINSTANCE().ajouter(l);
    }
}
