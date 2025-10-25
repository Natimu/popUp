import React from "react";
import {FlatList, StyleSheet} from "react-native";
import QuoteLibraryQuoteCard from "./QuoteLibraryQuoteCard";
import { View, ActivityIndicator } from "react-native";


export default function QuoteList({quotes, category, onEndReached, loadingMore}){

    return(
        <FlatList
            style={styles.container}
            data={quotes}
            keyExtractor={(item, index) => index.id?.toString()||index.toString()}
            renderItem={({item})=> (
                <QuoteLibraryQuoteCard quote={item.text} by={item.by}/>
            )}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                loadingMore ? (
                    <View style={{padding:20}}>
                        <ActivityIndicator size="small" color="black"/>
                    </View>
                ) : null
            }
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