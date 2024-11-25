import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createContext} from 'react';
import {Tea} from '../models/tea';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getTea} from '../services/teaService/TeaService';
import apiClient from '../../config/axios/apiConfig';
import {useFocusEffect} from '@react-navigation/native';
import * as Strings from '../lib/strings';

export const Context = createContext([]);
export const useContext = () => {
  const context = React.useContext(Context);
  if (!context) throw new Error('Contexte de séléction cassé');
  return context;
};

export const Provider = props => {
  const [teaTypes, setTeaTypes] = useState<Tea[]>([]);
  const [categories, setCategories] = useState({});
  const [teaCategories, setTeaCategories] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchText, setSearchText] = useState('');
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isTypeModalVisible, setTypeModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTeaTypes = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      console.error('No token found');
      setLoading(false);
      return;
    }
    try {
      const data: Tea[] = await getTea();
      if (data.length === 0) {
        console.log('Aucun thé disponible.');
        setLoading(false);
        return;
      }

      setTeaTypes(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des thés de l'utilisateur:",
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const categories = teaTypes.reduce((accumulator, tea) => {
      if (selectedType && tea?.HasTypes?.TeaType.name !== selectedType)
        return accumulator;

      if (!Strings.serialize(tea.name).includes(Strings.serialize(searchText)))
        return accumulator;
      const {name: category} = tea?.HasTypes?.TeaType || {name: 'Autres'};

      return {
        ...accumulator,
        [category]: [
          ...(accumulator[category] || []),
          {
            ...tea,
            HasTypes: {
              ...(tea.HasTypes || {}),
              TeaType: {
                ...(tea.HasTypes?.TeaType || {}),
                name: tea.HasTypes?.TeaType.name || 'Autres',
              },
            },
          },
        ],
      };
    }, {});
    setCategories(categories);
  }, [teaTypes, searchText, selectedType]);

  const isEmpty = category => {
    return categories[category] ? true : false;
  };
  const fetchTeaCategories = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await apiClient.get('/teatype/tea');
      const categories = response.data.map(category => category.name);
      const uniqueCategories = Array.from(new Set(categories)); // Filtrer les doublons
      setTeaCategories(uniqueCategories);
    } catch (error) {
      console.error('Erreur lors de la récupération des types de thés:', error);
    }
  };
  /* 
  const searchTeas = async (name: string, type: string) => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      setLoading(true);
      const data: Tea[] = await searchTea(name, type);
      setTeaTypes(data.map(tea => ({...tea, key: tea.id.toString()})));
    } catch (error) {
      console.error('Erreur lors de la recherche des thés:', error);
    } finally {
      setLoading(false);
    }
  }; */
  useFocusEffect(
    useCallback(() => {
      fetchTeaTypes();
      fetchTeaCategories();
    }, []),
  );

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (searchText || selectedType) {
        // searchTeas(searchText, selectedType);
      } else {
        fetchTeaTypes();
      }
    }, 500);

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchText, selectedType]);

  const toggleTypeModal = () => {
    setTypeModalVisible(!isTypeModalVisible);
  };

  const handleTypeSelect = type => {
    type === selectedType ? setSelectedType('') : setSelectedType(type);
    toggleTypeModal();
  };

  return (
    <Context.Provider
      value={{
        teaTypes,
        setTeaTypes,
        fetchTeaTypes,
        loading,
        setLoading,
        categories,
        fetchTeaCategories,
        teaCategories,
        // searchTeas,
        searchTimeout,
        searchText,
        setSearchText,
        setSelectedType,
        toggleTypeModal,
        handleTypeSelect,
        isTypeModalVisible,
        selectedType,
        isEmpty,
      }}
      {...props}
    />
  );
};
