import Navbar from '../components/Navbar'
import CustomMap from '../components/CustomMap'

function Map(){
    return (
        <>
           
                <Navbar/>
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <CustomMap />
                </div>

        </>
    )
}

export default Map