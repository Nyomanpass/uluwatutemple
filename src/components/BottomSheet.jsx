// src/components/BottomSheet.jsx
import React from 'react';
import { X } from 'lucide-react'; // Pastikan lucide-react terinstal
import ImageGallery from './ImageGallery'; // <<< TAMBAHKAN INI

const BottomSheet = ({ isOpen, onClose, children, title, images }) => { // <<< TAMBAHKAN 'images' di props
  return (
    <>
      {/* Bottom Sheet Konten */}
      <div
        className={`fixed bottom-0 left-0 w-full  bg-white rounded-t-2xl shadow-xl px-4 py-8 transform transition-transform duration-300 ease-out z-[999] md:hidden
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[65vh] pb-4"> {/* Batasi tinggi konten bottom sheet */}
          {/* Tampilkan galeri gambar di sini */}
          <ImageGallery images={images} /> {/* <<< PANGGIL IMAGEGALLERY DI SINI */}
          {children} {/* Konten lain (deskripsi, detail) akan tetap tampil di bawah gambar */}
        </div>
      </div>
    </>
  );
};

export default BottomSheet;