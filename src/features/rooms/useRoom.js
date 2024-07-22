import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../../services/apiRooms";

export function useRoom(room) {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["room", id],
    queryFn: () => getRoom({ room, id }),
  });
  queryClient.prefetchQuery({
    queryKey: ["room", id],
    queryFn: () => getRoom({ room, id }),
  });

  return { isLoading, error, data };
}
