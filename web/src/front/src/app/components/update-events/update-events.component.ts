import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css']
})
export class UpdateEventsComponent implements OnInit {

  data: FormGroup;
  id:any;

  constructor(public form:FormBuilder,
        private service:ServicesService,
        private router:Router,
        private ar:ActivatedRoute) {
    this.data = this.form.group({
      title:[''],
      timestamp:['']
    });
    this.id = this.ar.snapshot.paramMap.get('id');
    this.service.EventGet(this.id).subscribe(res => {
      console.log(res._id);
      this.data.setValue({
        title: res.title,
        timestamp: res.timestamp,
        id: res._id,
        rev: res._rev
      })
    });
    this.data = this.form.group({
      title:[''],
      timestamp:[''],
      id:[''],
      rev:['']
    });
  }

  ngOnInit(): void {
  }

  UpdateSubmit(): any {
    console.log("Update event submit");
    console.log("data:", this.data.value);
    this.service.EventUpdate(this.data.value).subscribe(() => {
      this.router.navigateByUrl('/event/list');
    });
  }

}
