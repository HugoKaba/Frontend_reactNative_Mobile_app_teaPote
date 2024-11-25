import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  copyTea,
  getAdminTea,
  searchTeaAdmin,
} from '../../services/teaService/TeaService';
import SearchBar from '../../components/searchTea/SearchBarTea';
import TeaList from '../../components/searchTea/TeaList';
import TeaModal from '../../components/searchTea/TeaModal';
import {LogBox} from 'react-native';

const SearchAddTeaScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);
  const [allTeas, setAllTeas] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTea, setSelectedTea] = useState(null);
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ]);
  useEffect(() => {
    const fetchAdminTeas = async () => {
      try {
        const data = await getAdminTea();
        setAllTeas(data);
      } catch (error) {
        console.error('Error when fetching admin teas:', error);
      }
    };

    fetchAdminTeas();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await searchTeaAdmin(name, type);
      setResults(data);
      setIsSearching(true);
    } catch (error) {
      console.error('Error when searching for teas:', error);
    }
  };

  const handleItemPress = tea => {
    setSelectedTea(tea);
    setModalVisible(true);
    const teaTypeName = tea.HasTypes?.TeaType?.name || 'Type not found';
  };

  const handleAddTea = () => {
    setModalVisible(false);
    copyTea(selectedTea.id);
  };
  console.log(selectedTea);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userIdText}>Ajouter un nouveau thé</Text>
      </View>
      <SearchBar
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        handleSearch={handleSearch}
      />
      <TeaList
        data={isSearching ? results : allTeas}
        handleItemPress={handleItemPress}
        isSearching={isSearching}
      />
      <TeaModal
        modalVisible={modalVisible}
        selectedTea={selectedTea}
        handleAddTea={handleAddTea}
        setModalVisible={setModalVisible}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4FB',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userIdText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'semibold',
    marginBottom: 20,
  },
});

export default SearchAddTeaScreen;
