// src/data/locationsData.js
import { atm, atmIcon, carIcon, shop, p3k, foto, toilet } from '../utils/CustomIcons';

export const GetLocations = (imageBounds) => {
  if (!imageBounds) return [];

  return [
    //car taxi
    {
    id: 'taxi',
    position: [imageBounds[1][0] * 0.42, imageBounds[1][1] * 0.66],
    title: 'Transport Services',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: carIcon,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },

    //toilet ada 5 toilet
     {
    id: 'toiletsatu',
    position: [imageBounds[1][0] * 0.60, imageBounds[1][1] * 0.79],
    title: 'Toilet Satu',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: toilet,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
     images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    {
    id: 'toiletdua',
    position: [imageBounds[1][0] * 0.77, imageBounds[1][1] * 0.90],
    title: 'Toilet Dua',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: toilet,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    {
    id: 'toilettiga',
    position: [imageBounds[1][0] * 0.23, imageBounds[1][1] * 0.47],
    title: 'Toilet Tiga',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: toilet,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    {
    id: 'toiletempat',
    position: [imageBounds[1][0] * 0.35, imageBounds[1][1] * 0.07],
    title: 'Toilet empat',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan inormasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: toilet,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

     {
    id: 'toiletlima',
    position: [imageBounds[1][0] * 0.73, imageBounds[1][1] * 0.50],
    title: 'Toilet Lima',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan inormasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: toilet,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },


    
    //p3k
    {
    id: 'p3k',
    position: [imageBounds[1][0] * 0.26, imageBounds[1][1] * 0.44],
    title: 'Pertolonga pertama obat obatan',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: p3k,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
     images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    //shop
     {
    id: 'shopsatu',
    position: [imageBounds[1][0] * 0.35, imageBounds[1][1] * 0.55],
    title: 'Shop Satu',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: shop,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
     images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    //atm

     {
    id: 'atm',
    position: [imageBounds[1][0] * 0.46, imageBounds[1][1] * 0.55],
    title: 'atm',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: atm,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg']
    },

    //sport foto

    {
    id: 'fotosatu',
    position: [imageBounds[1][0] * 0.80, imageBounds[1][1] * 0.87],
    title: 'foto satu',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/galeryhomeempat.jpeg', '/galeryhomelima.jpeg','/galeryhomedua.jpg', '/aboutkecak.jpg', '/galeryhometiga.jpeg', '/hometiga.jpeg']
    },

    {
    id: 'fotodua',
    position: [imageBounds[1][0] * 0.65, imageBounds[1][1] * 0.66],
    title: 'foto dua',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },


    {
    id: 'fototiga',
    position: [imageBounds[1][0] * 0.65, imageBounds[1][1] * 0.50],
    title: 'foto tiga',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },

    {
    id: 'fotoempat',
    position: [imageBounds[1][0] * 0.63, imageBounds[1][1] * 0.37],
    title: 'foto empat',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },


    {
    id: 'fotolima',
    position: [imageBounds[1][0] * 0.77, imageBounds[1][1] * 0.38],
    title: 'foto lima',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },

    {
    id: 'fotoenam',
    position: [imageBounds[1][0] * 0.47, imageBounds[1][1] * 0.19],
    title: 'foto enam',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },

     {
    id: 'fototujuh',
    position: [imageBounds[1][0] * 0.41, imageBounds[1][1] * 0.05],
    title: 'foto tujuh',
    description:
        'Tempat pertama yang akan Anda jumpai saat mengunjungi kawasan Pura Uluwatu. Di sini, pengunjung dapat membeli tiket masuk dan mendapatkan informasi dasar terkait peraturan kawasan. Antrian biasanya mulai ramai pada pukul 16:00 menjelang pertunjukan Tari Kecak, jadi sebaiknya datang lebih awal untuk menghindari keramaian.' +
        ' Selain loket tiket, tersedia juga petugas keamanan dan informasi yang siap membantu wisatawan lokal maupun mancanegara. Anda juga akan mendapatkan selempang atau sarung tradisional Bali yang wajib dikenakan saat memasuki area suci pura.' +
        ' Pastikan Anda menyimpan tiket dengan baik karena akan diperiksa kembali sebelum masuk ke area panggung atau area pura utama. Tiket berlaku untuk kunjungan satu kali masuk dan tidak bisa digunakan ulang.',

    icon: foto,
    details: (
        <div>
        <p><strong>Jam Buka:</strong> 07:00 - 19:00 WITA</p>
        <p><strong>Tips:</strong> Datang pagi untuk menghindari antrean panjang dan mendapatkan informasi wisata lengkap.</p>
        <p>Di area ini juga tersedia papan informasi yang menjelaskan tata tertib, harga tiket, dan lokasi-lokasi utama di dalam kawasan Pura. Bagi pengunjung asing, tersedia pula brosur dalam bahasa Inggris dan Mandarin.</p>
        </div>
    ),
    images: ['/uluwatulogo.jpg', '/monyet.jpg','/uluwatulogo.jpg', '/monyet.jpg']
    },

  ];
};
