import Bracelets from "./Bracelets";
import Rings from "./Rings";
import Culons from "./Culons";
function SelectDB(nameDB) {
    switch (nameDB) {
        case 'Rings':
            return Rings;
    
        case 'Culons':
            return Culons;
        
         case 'Bracelets':
            return Bracelets;
         
        default:
            return [];
         
    }
}
export default SelectDB;