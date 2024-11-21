import { fetchGetCarData } from "../../api/getCars";
import { carModel } from "./props";

export const loadCarData = async (
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
  ) => {
    try { 
      await fetchGetCarData(id, setCarData);
    } catch (error) {
      console.error("Erro ao buscar dados da api:", error);
    }
  };

export const handlePreviousItem = async (carData: carModel | null, setCarData:React.Dispatch<React.SetStateAction<carModel | null>>) => {
    if (carData && carData.id > 1) {
        await fetchGetCarData(carData.id - 1, setCarData);
    }
};

export const handleNextItem = async (carData: carModel | null, setCarData:React.Dispatch<React.SetStateAction<carModel | null>>) => {
    if (carData && carData.id < 10) {
        await fetchGetCarData(carData.id + 1,setCarData);
      }
};