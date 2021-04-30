import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged:boolean = false;
  constructor(private userService:UsuarioService) { }

  ngOnInit(): void {
    this.logged = this.userService.isLoggedUser();
  }

  signOut(){
    this.userService.logout();
    location.pathname = '/login'
  }

}
