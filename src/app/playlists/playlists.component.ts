import { Component, OnInit } from '@angular/core';
import {PlaylistsService} from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  data_id:any;

  data_nomli:any;
  data_nomli1:any;
  data_nomli2:any;
  data_nomli3:any;
  data_accesoli: any;
  data_nomlinew:any;

  constructor(private serviciod: PlaylistsService) { }

  save(event) {
    event.preventDefault();

    var newList={
      "id":null,
      "nombre_list": this.data_nomli,
      "tipo_acceso": this.data_accesoli
    }
    this.serviciod.crearPlaylist(this.data_id, newList);

    var newList = {
      "nombre_list": this.data_nomli1,
      "tipo_acceso": this.data_accesoli
    }
    this.serviciod.crearPlaylist(this.data_id,newList);


  }


  ngOnInit() {
  }

}
