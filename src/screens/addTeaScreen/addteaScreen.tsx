import React, {useState} from 'react';
import {
  Text,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
  View,
  Switch,
  LogBox,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './addTeaStyles';
import teaType from '../../components/addTea/teaType';
import TeaTypeSelector from '../../components/addTea/teaTypeSelector';
import DayTimeAndBioSelector from '../../components/addTea/dayTimeAndBio';
import {TemperatureSlider, MinTimePicker} from '../../components/addTea/slider';
import {teaTimeImages} from '../../components/addTea/teaImages';
import {addTea} from '../../services/teaService/TeaService';
import teaData from './teaMock';
import TheineLevelSelector from '../../components/addTea/theineLevelSelector';
import TeaCountry from '../../components/addTea/teaCountry';
import TeaIngredient from '../../components/addTea/teaIngredient';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../styles/colors';
type ErrorState = {
  teaName?: string;
  selectedTeaType?: string;
  selectedTimeOfDay?: string;
  temps?: string;
};
const AddTeaScreen = ({navigation}) => {
  const [teaName, setTeaName] = useState('');
  const [selectedTeaType, setSelectedTeaType] = useState(null);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(null);
  const [isOrganic, setIsOrganic] = useState(false);
  const [temps, setTemps] = useState(0);
  const [timeMinMin, setTimeMinMin] = useState('2');
  const [timeMaxMin, setTimeMaxMin] = useState('10');
  const [timeMin, setTimeMin] = useState(2);
  const [timeMax, setTimeMax] = useState(10);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isInTeabag, setIsInTeabag] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [teaImage, setTeaImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});

  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews',
    'Possible unhandled promise rejection',
  ]);
  const onTemperatureChange = value => {
    setTemps(value);
  };
  /*   const onTimeChange = values => {
    setTimeMin(values[0]);
    setTimeMax(values[1]);
  }; */

  const onMaxTimeChange = value => {
    const maxTime = value.hours * 3600 + value.minutes * 60 + value.seconds;
    maxTime <= timeMin ? setTimeMax(maxTime) : setTimeMax(maxTime);
  };

  const onMinTimeChange = value => {
    const minTime = value.hours * 3600 + value.minutes * 60 + value.seconds;
    setTimeMin(minTime);
  };
  const onTeaTypeSelect = image => {
    setTeaImage(image);
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs < 10 ? '0' : ''}${secs} sec`;
  };

  const showModal = value => {
    setIsModalVisible(value);
    const timeMinMinFormatted = formatTime(timeMin);
    const timeMaxMinFormatted = formatTime(timeMax);

    if (timeMin >= timeMax) {
      setTimeMax(timeMin);
    }

    setTimeMinMin(timeMinMinFormatted);
    setTimeMaxMin(timeMaxMinFormatted);
  };
  const validateForm = () => {
    const newErrors: ErrorState = {};
    if (!teaName) newErrors.teaName = 'Le nom du thé est requis';
    if (!selectedTeaType)
      newErrors.selectedTeaType = 'Le type de thé est requis';
    if (!selectedTimeOfDay)
      newErrors.selectedTimeOfDay = 'Le moment de la journée est requis';
    if (temps === 0) newErrors.temps = 'La température est requise';
    return newErrors;
  };
  const submitTea = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const updatedTeaData = {
      ...teaData,
      name: teaName,
      isBio: isOrganic,
      tempMin: temps,
      tempMax: temps,
      timeMin: timeMin,
      timeMax: timeMax,
      isInTeabag: isInTeabag,
      HasTypes: {
        TeaType: {
          ...teaData.HasTypes.TeaType,
          name: selectedTeaType,
        },
      },
      Image: {
        urlImage: teaImage,
      },
      HasMoment: {
        Moment: {
          ...teaData.HasMoment.Moment,
          name: selectedTimeOfDay,
        },
      },
      theine: selectedLevel !== null ? selectedLevel : teaData.theine,
      countryId: selectedCountry ? selectedCountry.id : null,
      HasIngredients: selectedIngredients.map(ingredient =>
        ingredient.id
          ? {ingredientId: ingredient.id}
          : {Ingredient: {name: ingredient.name}},
      ),
    };
    try {
      const response = await addTea(updatedTeaData);
      setTeaName('');
      setSelectedTeaType(null);
      setSelectedTimeOfDay(null);
      setIsOrganic(false);
      setTemps(0);
      setTimeMin(2);
      setTimeMax(10);
      setSelectedLevel(null);
      setSelectedCountry(null);
      setSelectedIngredients([]);
      setIsModalVisible(false);
      navigation.navigate('TabNav', {screen: 'Liste'});
    } catch (error) {
      Alert.alert('Erreur', "Une erreur est survenue lors de l'ajout du thé.");
    }
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Text style={styles.title}>Ajouter un Thé</Text>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}>
        <View style={{paddingHorizontal: 16, width: '100%'}}>
          <TextInput
            style={styles.input}
            placeholder="Nom du thé"
            value={teaName}
            onChangeText={setTeaName}
          />
          {errors.teaName && (
            <Text style={styles.errorText}>{errors.teaName}</Text>
          )}
        </View>
        <Text style={styles.subtitle}>Type de thé </Text>
        <FlatList
          nestedScrollEnabled={true}
          data={teaType}
          renderItem={({item}) => (
            <TeaTypeSelector
              teaType={item}
              selectedTeaType={selectedTeaType}
              setSelectedTeaType={setSelectedTeaType}
              onSelectImage={onTeaTypeSelect}
            />
          )}
          keyExtractor={item => item.type}
          contentContainerStyle={styles.teaListContainer}
          numColumns={3}
        />
        {errors.selectedTeaType && (
          <Text style={styles.errorText}>{errors.selectedTeaType}</Text>
        )}
        <Text style={styles.subtitle}>Stockage du thé </Text>
        <View style={styles.teabagContainer}>
          <Text style={styles.teabagLabel}>
            {isInTeabag ? 'En sachet' : 'En vrac'}
          </Text>
          <Switch
            value={isInTeabag}
            onValueChange={setIsInTeabag}
            thumbColor={colors.primary}
            trackColor={{false: colors.lightPrimary, true: colors.lightPrimary}}
          />
        </View>
        <Text style={styles.subtitle}>Niveau de théine </Text>
        <TheineLevelSelector
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />
        <DayTimeAndBioSelector
          selectedTimeOfDay={selectedTimeOfDay}
          setSelectedTimeOfDay={setSelectedTimeOfDay}
          isOrganic={isOrganic}
          setIsOrganic={setIsOrganic}
          teaImages={teaTimeImages}
        />
        {errors.selectedTimeOfDay && (
          <Text style={styles.errorText}>{errors.selectedTimeOfDay}</Text>
        )}
        <TemperatureSlider
          temps={temps}
          onTemperatureChange={onTemperatureChange}
        />
        {/*  <TimeSlider
          timeMin={timeMin}
          timeMax={timeMax}
          onTimeChange={onTimeChange}
        /> */}
        {errors.temps && <Text style={styles.errorText}>{errors.temps}</Text>}

        <Text style={styles.subtitle}>Temps d'infusion :</Text>
        <MinTimePicker
          timeMin={timeMin}
          timeMax={timeMax}
          onMinTimeChange={onMinTimeChange}
          onMaxTimeChange={onMaxTimeChange}
        />
        <TeaIngredient
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <TeaCountry onSelectCountry={setSelectedCountry} />
        <Pressable style={styles.addTeaBtn} onPress={() => showModal(true)}>
          <Text style={styles.addTeaText}>
            Ajouter le thé à ma bibliothèque
          </Text>
        </Pressable>
        <Image
          style={{
            width: '90%',
            height: 522,
            resizeMode: 'cover',
            marginTop: 24,
            borderRadius: 8,
            marginBottom: 100,
          }}
          source={require('../../assets/image/Teapots.jpg')}
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => showModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Récupération des données</Text>
            <Text>Nom du thé: {teaName}</Text>
            <Text>Type de thé: {selectedTeaType}</Text>
            <Text>Moment de la journée: {selectedTimeOfDay}</Text>
            <Text>Température: {temps}°C</Text>
            <Text>
              Temps d'infusion: {timeMinMin} - {timeMaxMin}
            </Text>
            <TouchableOpacity
              style={styles.addTeaBtn}
              onPress={() => submitTea()}>
              <Text style={styles.addTeaText}>Ajouter le thé</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addTeaBtn}
              onPress={() => showModal(false)}>
              <Text style={styles.addTeaText}>Annulé</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default AddTeaScreen;
