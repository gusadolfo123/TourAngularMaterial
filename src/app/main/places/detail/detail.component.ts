// import '../../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';
import {Component, OnInit} from '@angular/core';
// declare let L;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detail = {};
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit() {
    // const map = L.map('map').setView([4.600807, -74.06949], 10);
    // const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);
    // const control = L.Routing.control({
    //   waypoints: [L.latLng(4.625563, -74.065931), L.latLng(4.618901, -74.068126), L.latLng(4.600807, -74.06949)],
    //   routeWhileDragging: true,
    // }).addTo(map);
    // control._container.style.display = 'None';
  }

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
