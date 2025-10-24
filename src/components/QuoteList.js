import React from "react";
import {FlatList, StyleSheet} from "react-native";
import QuoteLibraryQuoteCard from "./QuoteLibraryQuoteCard";


export default function QuoteList({quotes, category}){

    return(
        <FlatList
            style={styles.container}
            data={quotes}
            keyExtractor={(item, index) => index.id?.toString()||index.toString()}
            renderItem={({item})=> (
                <QuoteLibraryQuoteCard quote={item.text} by={item.by}/>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: "#F9F7FF",
        paddingBottom: 2,
    }
});