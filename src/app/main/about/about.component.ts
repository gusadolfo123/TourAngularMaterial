import {Component, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private album = [];

  constructor(private lightbox: Lightbox) {
    const src = 'https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg';
    const caption = 'Image caption here';
    const thumb = 'https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg';
    const album = {src, caption, thumb};

    this.album.push(album);
  }

  ngOnInit() {}
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
