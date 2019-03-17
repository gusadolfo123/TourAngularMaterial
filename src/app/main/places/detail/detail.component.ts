import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detail = {};
  constructor() {}

  ngOnInit() {}

  ShowDetailSite(site: any) {
    this.detail = {
      Site: 'Museo Nacional',
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum pariatur eos totam adipisci
            Consequuntur recusandae eos, repellat optio odio ad, quae nam inventore assumenda at maxime iure sint
            explicabo`,
      images: [
        {url: 'https://picsum.photos/1000/600/?100'},
        {url: 'https://picsum.photos/1000/600/?120'},
        {url: 'https://picsum.photos/1000/600/?131'},
      ],
    };
  }
}
