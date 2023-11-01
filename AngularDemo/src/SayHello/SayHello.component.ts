import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/APIService.service';

@Component({
  selector: 'app-SayHello',
  templateUrl: './SayHello.component.html',
  styleUrls: ['./SayHello.component.css']
})
export class SayHelloComponent implements OnInit {
  message: string="";
  constructor(private apiService: APIServiceService) {}

  ngOnInit(): void {
    this.apiService.getMessage().subscribe((message) => {
      this.message = message;
    });
}

}
