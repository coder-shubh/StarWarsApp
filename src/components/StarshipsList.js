import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchStarships} from '../store/actions/starshipsActions';
import {loadMorePlanets} from '../store/reducers/searchSlice';

const StarshipsList = () => {
  const dispatch = useDispatch();
  const starships = useSelector(state => state.starships.starships);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    dispatch(fetchStarships());
  }, [dispatch]);

  useEffect(() => {
    const filtered = starships.filter(starship =>
      starship.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredStarships(filtered);
  }, [searchQuery, starships]);

  const handleLoadMore = () => {
    if (!loadingMore) {
      dispatch(loadMorePlanets());
      setLoadingMore(true);
    }
  };

  const renderStarship = ({item}) => (
    <View style={styles.starshipContainer}>
      <Text style={styles.starshipName}>Name: {item.name}</Text>
      <Text style={styles.starshipModel}>Model: {item.model}</Text>
      {/* Add more details as needed */}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search starships..."
      />
      <FlatList
        data={filteredStarships}
        renderItem={renderStarship}
        keyExtractor={item => item.name}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator size="large" color="#000" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  starshipContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  starshipName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  starshipModel: {
    fontSize: 16,
    color: '#666',
  },
});

export default StarshipsList;
