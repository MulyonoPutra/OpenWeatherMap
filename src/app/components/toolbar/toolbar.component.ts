import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route: string) {
    if (route === 'current') {
      this.router.navigate(['/current']);
      Swal.fire(
        'warning',
        'Please allow location access in your computer!',
        'warning'
      )
    } else if (route === 'forecast') {
      this.router.navigate(['/forecast']);
    }

  }

}
