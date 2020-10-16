export interface CPU {
  id: string;
  merk: string;
  urlFoto: string;
  harga: string;
  stok: string;
  model: string;
  baseClock: string;
  boostClock: string;
  jumlahCore: string;
  jumlahThread: string;
}

export interface RAM {
  id: string;
  merk: string;
  urlFoto: string;
  harga: string;
  stok: string;
  model: string;
  speed: string;
  size: string;
}

export interface Motherboard {
  id: string;
  merk: string;
  urlFoto: string;
  harga: string;
  stok: string;
  model: string;
  chipset: string;
  processor: string;
}

export interface GPU {
  id: string;
  merk: string;
  urlFoto: string;
  harga: string;
  stok: string;
  model: string
}