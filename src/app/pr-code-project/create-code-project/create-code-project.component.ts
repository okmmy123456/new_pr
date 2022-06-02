import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { site } from '../../models/site.models';
import { section } from '../../models/section.models';
import { map, Observable, startWith } from 'rxjs';
import { codeproject } from 'src/app/models/codeproject.models';


export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-create-code-project',
  templateUrl: './create-code-project.component.html',
  styleUrls: ['./create-code-project.component.css']
})

export class CreateCodeProjectComponent implements OnInit {

  @ViewChild('myInput') myInput !:ElementRef;
  @ViewChild('mypassword') mypassword !:ElementRef;
  @ViewChild('Cpassword') Cpassword !:ElementRef;
  text =""
  hide = true;
  code_project !: FormGroup;

  selected_Site !: string;
  selected_Section !: string;

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  selectedSiteC = new FormControl('', Validators.required);
  filtered_site: Observable<site[]> | undefined

  selectedSectionC = new FormControl('', Validators.required);
  filtered_section: Observable<section[]> | undefined
  
  project_codeForm !: FormGroup;
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    Validators.email],);
 
  constructor(private fb: FormBuilder) {
    this.project_codeForm = this.fb.group({
      username : new FormControl('', Validators.required),
      pass : new FormControl('', Validators.required),
      cpass : new FormControl('', Validators.required),
      name : new FormControl('', Validators.required),
      site : new FormControl('', Validators.required),
      dept : new FormControl('', Validators.required),
      operation : new FormControl('', Validators.required),
      position : new FormControl('', Validators.required),
      tel : new FormControl('', [Validators.required,Validators.pattern("[- +()0-9]+")]),
      email : this.emailFormControl,
      buyercode : new FormControl('', Validators.required),
    },{validator: this.checkIfMatchingPasswords('pass', 'cpass')});

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );

    this.filtered_site = this.selectedSiteC.valueChanges.pipe(
      startWith(''),
      map(site => (site ? this._filterSite(site) : this.sites.slice())),
    );

    this.filtered_section = this.selectedSectionC.valueChanges.pipe(
      startWith(''),
      map(section => (section ? this._filterSection(section) : this.sections.slice())),
    );


  }
 
checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  return (group: FormGroup) => {
    let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
    if (passwordInput.value !== passwordConfirmationInput.value) {
      return passwordConfirmationInput.setErrors({notEquivalent: true})
    }
    else {
        return passwordConfirmationInput.setErrors(null);
    }
  }
}

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  private _filterSite(value: string): site[] {
    const filterValue = value.toLowerCase();
    return this.sites.filter(site => site.site.toLowerCase().includes(filterValue));
  }

  private _filterSection(value: string): section[] {
    const filterValue = value.toLowerCase();
    return this.sections.filter(section => section.section.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }

  conpass(){
    if(this.mypassword.nativeElement.id === this.Cpassword.nativeElement.id){
      console.log("password macth")
    }else {
      console.log("password not macth")
    }
    this.text="777"
    console.log(this.text)
  }

  
  get primEmail(){
    return this.project_codeForm.get('email')
    }
  onSubmit() {
    
   /* if (projectForm.invalid) {
      return;
    }
    const values = projectForm.value;
    let codeproject: codeproject = {
      username: values.username,
      pass: values.pass,
      name: values.name,
      site: values.site,
      dept: values.dept,
      operation: values.operation,
      position: values.position,
      tel: values.tel,
      email: values.email,
      buyercode: values.buyercode,
    }*/
    const values = this.project_codeForm.value;
    let codeproject : codeproject={
      username: values.username,
      pass: values.pass,
      name: values.name,
      site: values.site,
      dept: values.dept,
      operation: values.operation,
      position: values.position,
      tel: values.tel,
      email: values.email,
      buyercode: values.buyercode,
    }
    
    console.log(JSON.stringify(codeproject));
    console.log(codeproject);
  }


  sites: site[] = [
    { site: '27', sitename: 'engine' },
    { site: 'ss', sitename: 'support' },
    { site: '22', sitename: 'fanc' },
  ];

  sections: section[] = [
    { section: 'e71', sectionname: 'produce' },
    { section: 'c10', sectionname: 'computer and it' },
    { section: '21', sectionname: 'engineer' },
  ];

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },]
    
}
