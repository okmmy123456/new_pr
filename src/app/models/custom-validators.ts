import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class Customvalidators{
     static checkForWhitespace(control: AbstractControl): ValidationErrors |null{
          if(control.value && control.value.length){
               let isOnlyWitespace =(control.value || '').trim().length ==0;
               let isValid = !isOnlyWitespace;
               return isValid ? null :{'onlyWhitespace':true}
          }
          return null;

     }
}