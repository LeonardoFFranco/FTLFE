import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule, RequestOptions, Headers} from '@angular/http';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RegistrarseService } from './registrarse/registrarse.service';
import { EditarUsuarioService } from './editar-usuario/editar_usuario.service';
import { MostrarUsuarioService } from './mostrar-usuario/mostrar-usuario.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import {PlaylistsService} from './playlists/playlists.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    MostrarUsuarioComponent,
    EditarUsuarioComponent,
    WelcomeComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path:'registrarse',
      component: RegistrarseComponent
    },
    {
      path:'iniciar_sesion',
      component: IniciarSesionComponent
    },
    {
      path:'mostrar_usuario',
      component: MostrarUsuarioComponent
     },
      {
        path:'welcome',
        component: WelcomeComponent
      },
     {
      path:'editar_usuario',
      component:EditarUsuarioComponent
     },
      {
        path:'playlists',
        component:PlaylistsComponent
      }
    ])
  ],
  providers: [RegistrarseService,EditarUsuarioService,MostrarUsuarioService,PlaylistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
