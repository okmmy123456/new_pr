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
  project_code !: FormGroup;
  
 
  constructor(private fb: FormBuilder) {
    this.project_code = this.fb.group({
      username : new FormControl('', Validators.required),
      pass : new FormControl('', Validators.required),
      name : new FormControl('', Validators.required),
      site : new FormControl('', Validators.required),
      dept : new FormControl('', Validators.required),
      operation : new FormControl('', Validators.required),
      position : new FormControl('', Validators.required),
      tel : new FormControl('', Validators.required),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      codebuyer : new FormControl('', Validators.required),
    })

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
  onHidepass(){
    if(this.myInput.nativeElement.type === 'password'){
      this.myInput.nativeElement.type="text"
    }else{
      this.myInput.nativeElement.type="password"
    }
  }
  get primEmail(){
    return this.project_code.get('email')
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
      codebuyer: values.codebuyer,
    }*/
    const values = this.project_code.value;
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
      codebuyer: values.codebuyer,
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
