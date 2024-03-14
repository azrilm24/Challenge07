class Contact {
    constructor(nama, nomor) {
      this.nama = nama;
      this.nomor = nomor;
    }
  
   
    showInfo() {
      console.log(`Nama: ${this.nama}, Nomor: ${this.nomor}`);
    }
  }
  
 
  class ContactList {
    constructor() {
      this.daftarKontak = [];
    }
  
    
    tambahKontak(nama, nomor) {
      const kontakBaru = new Contact(nama, nomor);
      this.daftarKontak.push(kontakBaru);
    }
  
  
    tampilkanSemuaKontak() {
      console.log("Daftar Kontak:");
      this.daftarKontak.forEach((kontak, index) => {
        console.log(`${index + 1}. Nama: ${kontak.nama}, Nomor: ${kontak.nomor}`);
      });
    }
  

    cariKontak(nama) {
      const hasilPencarian = this.daftarKontak.filter(
        kontak => kontak.nama.toLowerCase() === nama.toLowerCase()
      );
  
      if (hasilPencarian.length > 0) {
        console.log("Hasil Pencarian:");
        hasilPencarian.forEach(kontak => {
          console.log(`Nama: ${kontak.nama}, Nomor: ${kontak.nomor}`);
        });
      } else {
        console.log("Kontak tidak ditemukan.");
      }
    }
  
    
    hapusKontak(nama) {
      this.daftarKontak = this.daftarKontak.filter(
        kontak => kontak.nama.toLowerCase() !== nama.toLowerCase()
      );
      console.log(`Kontak dengan nama ${nama} telah dihapus.`);
    }
  }
  
  
  const daftarKontak = new ContactList();
  
  daftarKontak.tambahKontak("Andi", "1234567890");
  daftarKontak.tambahKontak("Budi", "0987654321");
  daftarKontak.tambahKontak("Cindy", "111222333");
  
  daftarKontak.tampilkanSemuaKontak();
  
  daftarKontak.cariKontak("andi");
  
  daftarKontak.hapusKontak("Cindy");
  
  daftarKontak.tampilkanSemuaKontak();
  