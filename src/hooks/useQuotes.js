import { useQuery } from "@tanstack/react-query";
import { fetchQuotes } from "../services/quotesAPI";

export default function useQuotes(type){
    return useQuery({
  queryKey: ["quotes", type],
  queryFn: () => fetchQuotes(type),
  staleTime: 1000 * 60 * 5,
  enabled: !!type,
});

}