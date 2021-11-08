package  Principal.Repository;

import  Principal.Interface.InterfaceCategory;
import  Principal.Model.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



/**
 *
 * @author USUARIO
 */
@Repository
public class CategoryRepository {
       @Autowired
    private InterfaceCategory crud2;
    
     public List<Category> getAll(){
        return (List<Category>) crud2.findAll();       
    }
    
    public Optional <Category> getCategoria(int id){
        return crud2.findById(id);
    }
    
    public Category save(Category category){
        return crud2.save(category);
    }
     public void delete(Category category){
        crud2.delete(category);
    }

}
