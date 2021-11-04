import React, {useState, useEffect} from 'react';
import { Text,TouchableOpacity, Image, StyleSheet} from 'react-native';

const AnimeItem = ({anime}) => {
    return (<TouchableOpacity style= {styles.item}>
        <Image style= {styles.image} source = {{uri: `${anime.cover_image}`}} />
        <Text>{anime.titles.en}</Text>
    </TouchableOpacity>
    )

}

export default AnimeItem;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 200,
        resizeMode: 'contain'
    },
    item:{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
        
    }
})