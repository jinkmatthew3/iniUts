import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CPU, GPU, Motherboard, RAM } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  barangCPU: CPU[];
  barangRAM: RAM[];
  barangMot: Motherboard[];
  barangGPU: GPU[];

  constructor(private homeservice: HomeService) {}

  ngOnInit() {
    this.barangCPU = this.homeservice.getAllBarangCPU();
    this.barangRAM = this.homeservice.getAllBarangRAM();
    this.barangMot = this.homeservice.getAllBarangMotherboard();
    this.barangGPU = this.homeservice.getAllBarangGPU();
  }

  ionViewWillEnter() {
    this.barangCPU = this.homeservice.getAllBarangCPU();
    this.barangRAM = this.homeservice.getAllBarangRAM();
    this.barangMot = this.homeservice.getAllBarangMotherboard();
    this.barangGPU = this.homeservice.getAllBarangGPU();
  }
}
