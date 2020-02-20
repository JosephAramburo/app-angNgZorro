import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  isCollapsed : boolean = false;
  
  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  signOff():void{
    console.log("close ");
    this._router.navigate(['/login']);
  }

}
