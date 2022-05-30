import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

import { UsuarioService } from '../../service/usuario.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css'],
})
export class LogoAPComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  sobreMi: string | undefined;
  loginModal: Modal | undefined;
  editarPerfil: Modal | undefined;
  isLogin: boolean | undefined = false;
  constructor(
    public usuarioService: UsuarioService,
    public personaService: PersonaService,
  ) { }

  ngOnInit(): void {
  }

  openLoginModal(){
    this.loginModal = new bootstrap.Modal(document.getElementById('loginModal')!, {
      keyboard: false
    })
    this.loginModal?.show();
  }

  editarPerfilModal(){
    this.editarPerfil = new bootstrap.Modal(document.getElementById('editarPerfil')!, {
      keyboard: false
    })
    this.editarPerfil?.show();
  }

  login(){
    const user = {
      email: this.email,
      password: this.password,
    };

    this.usuarioService.login(user).subscribe( data => {
      this.isLogin = data
      this.loginModal?.hide();
      console.log(data);
    });
  }
  
  editar(){
    const perfil = {
      acercademi: this.sobreMi,
    };

    this.personaService.editPersona(perfil).subscribe( (data: boolean | undefined) => {
      console.log('==== Edit result =====', data);
    });
    this.editarPerfil?.hide();
  }
}
