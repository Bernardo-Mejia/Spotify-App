import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

interface mockCoverModel {
  cover: string,
  album?: string,
  name: string,
}

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})

export class MediaPlayerComponent implements OnInit {


  mockCover: TrackModel = {
    cover: 'https://i2.wp.com/iopera.es/wp-content/uploads/2012/05/puccini-giacomo.jpg?fit=1200%2C755&ssl=1',
    album: 'La bohème',
    name: 'Che Gelida Manina',
    url: "http://localhost/track1.pm3",
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
