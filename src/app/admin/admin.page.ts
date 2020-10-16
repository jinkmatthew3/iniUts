import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CPU, GPU, Motherboard, RAM } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  barangCPU: CPU[];
  barangRAM: RAM[];
  barangMot: Motherboard[];
  barangGPU: GPU[];

  constructor(
    private homeservice: HomeService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.barangCPU = this.homeservice.getAllBarangCPU();
    this.barangRAM = this.homeservice.getAllBarangRAM();
    this.barangMot = this.homeservice.getAllBarangMotherboard();
    this.barangGPU = this.homeservice.getAllBarangGPU();
  }

  async presentDeleteAlert(product) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Product',
      message: 'Are you sure want to delete ' + product.merk + ' ' + product.model + ' ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteProduct(product)
        }
      ]
    });
    await alert.present();
  }

  refresh() {
    this.barangCPU = this.homeservice.getAllBarangCPU();
    this.barangRAM = this.homeservice.getAllBarangRAM();
    this.barangMot = this.homeservice.getAllBarangMotherboard();
    this.barangGPU = this.homeservice.getAllBarangGPU();
  }

  deleteProduct(product) {
    this.homeservice.deleteBarang(product.id);
    this.refresh();
  }
}