package  Principal.Repository;

import  Principal.Interface.InterfaceReservation;
import  Principal.Model.Client;
import  Principal.Model.Reservation;
import  Principal.Zreports.CountClients;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



/**
 *
 * @author USUARIO
 */
@Repository
public class ReservationRepository {
     @Autowired
    private InterfaceReservation crud4;
    
    public List<Reservation> getAll(){
        return (List<Reservation>) crud4.findAll();
    }
    public Optional<Reservation> getReservation(int id){
        return crud4.findById(id);
    }
    public Reservation save(Reservation reservation){
        return crud4.save(reservation);
    }
    public void delete(Reservation reservacion){
        crud4.delete(reservacion);
    }
     
   
    public List<Reservation> ReservationStatusRepository (String status){
         return crud4.findAllByStatus(status);
     }
     

    public List<Reservation> ReservationTimeRepository (Date a, Date b){
         return crud4.findAllByStartDateAfterAndStartDateBefore(a, b);
     }
     

   public List<CountClients> getClientsRepository(){
       List<CountClients> res = new ArrayList<>();
       List<Object[]> report = crud4.countTotalReservationsByClient();
       for(int i=0; i<report.size(); i++){
             res.add(new CountClients((Long)report.get(i)[1],(Client) report.get(i)[0]));
         }
         return res;
       
   }
}
