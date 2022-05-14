import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  data: FormGroup;

  constructor(public form:FormBuilder,
        private service:ServicesService,
        private router:Router) {
    this.data = this.form.group({
      title:[''],
      timestamp:['']
    });
  }

  ngOnInit(): void {
  }

  AddSubmit(): any {
    console.log("New event submit");
    console.log("data:", this.data.value);
    this.service.EventAdd(this.data.value).subscribe(() => {
      this.router.navigateByUrl('/event/list');
    });
  }
}
