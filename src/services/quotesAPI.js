import {quoteAPI_list} from "../utils/constants";

export async function fetchQuotes(type){
    const url = quoteAPI_list[type];
    if (!url) throw new Error(`No API defined for type: ${type}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error ("Network error");
    const data = await response.json();

    console.log("API TYPE:", type);
  console.log("RAW RESPONSE:", JSON.stringify(data, null, 2));

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

    /*return data.results?.map((q, index) => ({
        id: q._id || index,
        text: q.content || q.text || q.quote || "",
    })) || [];*/
}