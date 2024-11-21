import { CAR_API_BASE_URL } from '../constants/car';
import { carModel } from './../components/CardView/props';
import axios from 'axios';

interface ApiResponse {
    cars: carModel[]
}

export const fetchGetCarData = async(
    id: number, 
    setCarDataCallback: React.Dispatch<React.SetStateAction<carModel | null>>
)=>{
    try{
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL)
        const carData = response.data.cars.find((car) => car.id === id) || null;
        setCarDataCallback(carData);
    } catch(error){
        console.log('Erro ao buscar dados da api: ', error)
        setCarDataCallback(null);
    }
}
