// src/components/BottomSheet.jsx
import React from 'react';
import { X } from 'lucide-react';
import ImageGallery from './ImageGallery';

const BottomSheet = ({ isOpen, onClose, children, title, images }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998]"
          onClick={onClose}
        />
      )}

      {/* BottomSheet - Mobile (bottom slide) + Desktop (left slide) */}
      <div
        className={`
          fixed z-[999] bg-white shadow-xl transition-transform duration-300 ease-out
          px-4 py-6
          
          /* MOBILE STYLES */
          w-full h-[80vh] bottom-0 left-0 rounded-t-2xl 
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}

          /* DESKTOP STYLES */
          md:top-0 md:left-0 md:bottom-auto md:right-auto
          md:w-[500px] md:h-[85vh] md:rounded-xl md:mt-28 md:translate-y-0
          ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>

        {/* Content scrollable */}
        <div className="overflow-y-auto h-[calc(100%-80px)] pr-1">
          <ImageGallery images={images} />
          {children}
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
