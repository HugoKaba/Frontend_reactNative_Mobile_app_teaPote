export interface Tea {
  Comments: any[];
  HasIngredients: (Ingredient | {ingredientId: number})[];
  HasMoment: {
    Moment: {
      name: string;
      urlImage: string;
    };
  };
  HasTypes: {
    TeaType: {
      name: string;
      urlImage: string;
    };
  } | null;
  Image: {
    urlImage: string;
    localImg?: any;
  };
  countryId: number;
  date?: string;
  id?: number;
  isBio: boolean;
  isFavorite: boolean;
  isInTeabag: boolean;
  name: string;
  tempMax: number;
  tempMin: number;
  theine: number;
  timeMax: number;
  timeMin: number;
  tips: string;
  userId?: number;
}

type Ingredient = {
  name: string;
};

type Props = {
  item: Tea;
};
