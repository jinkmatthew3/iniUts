import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loaded;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idBarang')) { return; }
      const idBarang = paramMap.get('idBarang');
      console.log(idBarang);
      if (idBarang.includes('cpu')) {
        this.loaded = this.homeService.getBarangCPU(idBarang);
      }
      else if (idBarang.includes('ram')) {
        this.loaded = this.homeService.getBarangRAM(idBarang);
      }
      else if (idBarang.includes('mot')) {
        this.loaded = this.homeService.getBarangMotherboard(idBarang);
      }
      else if (idBarang.includes('gpu')) {
        this.loaded = this.homeService.getBarangGPU(idBarang);
      }
    })
  }

}
