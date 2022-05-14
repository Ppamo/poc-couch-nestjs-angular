import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  Events:any;

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    console.log("List event");
    this.service.EventList().subscribe(
      res => {
        console.log(res);
        this.Events = res;
        return res;
      }
    );
  }

  deleteEvent(id:any, rev:any, i:any){
    this.service.EventDelete(id, rev).subscribe((res) => {
      this.Events.splice(i, 1);
    });
  }
}
