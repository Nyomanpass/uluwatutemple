import Navbar from '../components/Navbar'
import CustomMap from '../components/CustomMap'
import { useState } from 'react';

function Map(){
     const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
    return (
        <>  
                <Navbar/>
                 <div className="absolute top-0 left-0 w-full h-full z-0">
                    <CustomMap onBottomSheetChange={setBottomSheetOpen}/>
                </div>
        </>
    )
}

export default Map