import Navbar from '../components/Navbar'
import CustomMap from '../components/CustomMap'
import { useState } from 'react';

function Map(){
     const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
    return (
        <>  
                <Navbar/>
                        {!bottomSheetOpen && (
                            <a
                            href="https://wa.me/6281236937479"
                            target="_blank"
                            className="fixed bottom-6 right-6 z-50 text-white animate-bounce focus:outline-none transition duration-300"
                            >
                            <div className="flex gap-2 items-center">
                                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14" />
                            </div>
                            </a>
                        )}

                            <div className="absolute top-0 left-0 w-full h-full z-0">
                    <CustomMap onBottomSheetChange={setBottomSheetOpen}/>
                </div>
        </>
    )
}

export default Map