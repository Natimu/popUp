import {quoteAPI_list} from "../utils/constants";

export async function fetchQuotes(type){
    const url = quoteAPI_list[type];
    if (!url) throw new Error(`No API defined for type: ${type}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error ("Network error");
    const data = await response.json();

  switch (type){
    case "BIBLE":
        return[
            {
                id: 1,
                text: data.verse?.details?.text,
                by: data.verse?.details?.reference,
            },
        ];
    case "MOTIVATION":
        return data.map((q, index) => ({
            id: index,
            text: `${q.q}`,
            by: `${q.a}`,
        }));
  }
}