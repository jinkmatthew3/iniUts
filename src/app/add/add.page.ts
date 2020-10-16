import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  barangBaru: FormGroup;
  
  constructor(
    private alertController: AlertController,
    private router: Router,
    private homeService: HomeService) { }

  ngOnInit() {
    this.barangBaru = new FormGroup({
      urlFoto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      tipe: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  async notifTambah() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tambah Barang',
      message: 'Apakah Data Barang Sudah Benar?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ya',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  onSubmit() {
    this.homeService.tambahBarang(this.barangBaru);
    this.router.navigate(['../admin']);
  }
}
