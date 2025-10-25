import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchQuotes } from "../services/quotesAPI";

export default function useQuotes(type){
  return useInfiniteQuery({
    queryKey: ["quotes", type],
    queryFn: async ({pageParam = 0}) =>{
      const newQuotes = await fetchQuotes(type, 50);
        return newQuotes;
      },
      getNextPageParam: (lastPage, allPage) => {
        return allPage.length;
      },
  });
    
}
 
