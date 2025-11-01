import React, {useCallback} from "react";
import {FlatList, StyleSheet} from "react-native";
import QuoteLibraryQuoteCard from "./QuoteLibraryQuoteCard";
import { View, ActivityIndicator } from "react-native";


export default function QuoteList({quotes, category, onEndReached, loadingMore}){
    const renderItem = useCallback(
    ({ item }) => (
      <QuoteLibraryQuoteCard quote={item.text} by={item.by} />
    ),
    [] // Only recreate if absolutely necessary (no deps)
  );

    return(
        <FlatList
            style={styles.container}
            data={quotes}
            keyExtractor={(item, index) => index.id?.toString()||index.toString()}
            renderItem={renderItem}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loadingMore ? (
                    <View style={{padding:20}}>
                        <ActivityIndicator size="small" color="black"/>
                    </View>
                ) : null
            }
            initialNumToRender={8}
            windowSize={5}
            removeClippedSubviews={true}
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