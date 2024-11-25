const teaData = {
  name: 'testea',
  isInTeabag: true,
  tempMin: 75,
  tempMax: 80,
  timeMin: 3,
  timeMax: 5,
  isBio: false,
  tips: 'Best brewed at a moderate temperature.',
  countryId: 217,
  theine: 30,
  isFavorite: false,
  HasTypes: {
    TeaType: {
      name: 'Green Tea',
      urlImage:
        'https://www.palaisdesthes.com/media/catalog/product/cache/50708da259540eeb20337bcdb367a3c9/2/8/282-71014-l2d495381d.jpg',
    },
  },
  HasIngredients: [
    {ingredientId: 1},
    {ingredientId: 2},
    {Ingredient: {name: 'GreenTea'}},
    {Ingredient: {name: 'Lemo'}},
  ],
  Image: {
    urlImage:
      'https://www.palaisdesthes.com/media/catalog/product/cache/50708da259540eeb20337bcdb367a3c9/2/8/282-71014-l2d495381d.jpg',
  },
  HasMoment: {
    Moment: {
      name: 'Matin',
      urlImage: '../../assets/image/teaTime/matin.png',
    },
  },
};

export default teaData;
