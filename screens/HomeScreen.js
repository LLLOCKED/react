import React, {useState, useEffect} from 'react';
import AnimeItem from '../componets/AnimeItem'
import { StyleSheet, Text, View , SafeAreaView, ActivityIndicator, FlatList, Image} from 'react-native';

const url = 'https://api.aniapi.com/v1/anime/11';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  const getAnime = async () => {
     try {
      const response = await fetch(`https://api.aniapi.com/v1/anime?page=${currentPage}`);
      const json = await response.json();
      setData([...data, ...json.data.documents]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const renderLoader = () => {
    return (
        <View >
          <ActivityIndicator size="large" color="red" />
        </View> 
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getAnime();
  }, [currentPage]);


  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          columnWrapperStyle = {{flex: 1, justifyContent: 'space-around'}}
          numColumns = {3}
          contentContainerStylen = {{paddingBottom: 100}}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <AnimeItem anime = {item} />
          )}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      )}
    </View>
    
  );
  
};