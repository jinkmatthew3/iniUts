import { Injectable } from '@angular/core';
import { CPU, GPU, Motherboard, RAM } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private barangCPU: CPU[] = [{
    id: 'cpu1',
    merk: 'Intel',
    urlFoto: 'https://cf.shopee.co.id/file/1e1c19aad2032e30e773ad5831d743e8',
    harga: '3000000',
    stok: '2',
    model: 'i5',
    baseClock: '4.0 G.Hz',
    boostClock: '4.0 G.Hz',
    jumlahCore: '4',
    jumlahThread: '8'
  }];

  private barangRAM: RAM[] = [{
    id: 'ram1',
    merk: 'Asus',
    urlFoto: 'https://www.teckknow.com/wp-content/uploads/2017/09/GeIL-EVO-X-ROG-certified-RGB-Gaming-Memory-3.jpg',
    harga: '2500000',
    stok: '8',
    model: 'Evo-X',
    speed: 'PC-19200',
    size: '2x8gb'
  }];

  private barangMotherboard: Motherboard[] = [{
    id: 'mot1',
    merk: 'Asus',
    urlFoto: 'https://i.ebayimg.com/images/g/J5wAAOSwnXde1bNx/s-l400.jpg',
    harga: '6800000',
    stok: '25',
    model: 'ROG Maximus XII Extreme',
    chipset: 'Intel Z490',
    processor: 'Intel 10th Gen Processor'
  }];

  private barangGPU: GPU[] = [{
    id: 'gpu1',
    merk: 'NVIDIA',
    urlFoto: 'https://s.yimg.com/os/creatr-uploaded-images/2020-09/c7eb5610-ec71-11ea-bd7f-6070d2d4c561',
    harga: '15000000',
    stok: '1',
    model: '3090TI',
  }];


  constructor() { }

  getAllBarangCPU() {
    return [...this.barangCPU];
  }

  getAllBarangRAM() {
    return [...this.barangRAM];
  }

  getAllBarangMotherboard() {
    return [...this.barangMotherboard];
  }

  getAllBarangGPU() {
    return [...this.barangGPU];
  }

  getBarangCPU(barangCPUId: string) {
    return {
      ...this.barangCPU.find(barangCPU => {
        return barangCPU.id === barangCPUId;
    })};
  }

  getBarangRAM(barangRAMId: string) {
    return {
      ...this.barangRAM.find(barangRAM => {
        return barangRAM.id === barangRAMId;
    })};
  }

  getBarangMotherboard(barangMotId: string) {
    return {
      ...this.barangMotherboard.find( barangMotherboard => {
        return barangMotherboard.id === barangMotId;
    })};
  }

  getBarangGPU(barangGPUId: string) {
    return {
      ...this.barangGPU.find(barangGPU => {
        return barangGPU.id === barangGPUId;
    })};
  }

  deleteBarang(idBarang: String) {
    if (idBarang.includes("cpu")) {
      this.barangCPU = this.barangCPU.filter(barang => {
        return barang.id !== idBarang;
      })
    }
    else if (idBarang.includes("ram")) {
      this.barangRAM = this.barangRAM.filter(barang => {
        return barang.id !== idBarang;
      })
    }
    else if (idBarang.includes("mot")) {
      this.barangMotherboard = this.barangMotherboard.filter(barang => {
        return barang.id !== idBarang;
      })
    }
    else if (idBarang.includes("gpu")) {
      this.barangGPU = this.barangGPU.filter(barang => {
        return barang.id !== idBarang;
      })
    }
  }

  tambahBarang(barangBaru) {
    let size, tipe;

    if (barangBaru.value.tipe === 'c') {
      size = this.barangCPU.length + 1;
      tipe = "cpu";
    }
    else if (barangBaru.value.tipe === 'r') {
      size = this.barangRAM.length + 1;
      tipe = "ram";
    }
    else if (barangBaru.value.tipe === 'm') {
      size = this.barangMotherboard.length + 1;
      tipe = "mot";
    }
    else if (barangBaru.value.tipe === 'g') {
      size = this.barangGPU.length + 1;
      tipe = "gpu";
    }

    let barangDiPush = {
      id: tipe + size,
      merk: barangBaru.value.merk,
      model: barangBaru.value.model,
      harga: barangBaru.value.harga,
      stok: barangBaru.value.stok,
      urlFoto: barangBaru.value.urlFoto,
      baseClock: "",
      boostClock: "",
      jumlahCore: "",
      jumlahThread: "",
      speed: "",
      size: "",
      chipset: "",
      processor: ""
    };

    console.log("masuk pak eko");
    if (barangBaru.value.tipe === 'c') {
      //console.log("masuk pak eko");
      this.barangCPU.push(barangDiPush);
    }
    else if (barangBaru.value.tipe === 'r') {
      this.barangRAM.push(barangDiPush);
    }
    else if (barangBaru.value.tipe === 'm') {
      this.barangMotherboard.push(barangDiPush);
    }
    else if (barangBaru.value.tipe === 'g') {
      this.barangGPU.push(barangDiPush);
    }
  }
}
