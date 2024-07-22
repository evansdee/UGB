import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";


export function useRooms(room){
    const { data, isLoading,error } = useQuery({
        queryKey: [room || 'modern'],
        queryFn: ()=>getRooms(room),
      });


      return {data,isLoading,error}
}