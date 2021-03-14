import { equal } from '../utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  reviews: [],
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {},
  accessToken: '',
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  setReviews(state, { payload: { reviews } }) {
    return {
      ...state,
      reviews,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return ({
      ...state,
      accessToken,
    });
  },

  setLoginFields(state, { payload: { loginFields } }) {
    return ({
      ...state,
      loginFields,
    });
  },

  logOut(state) {
    return ({
      ...state,
      accessToken: '',
    });
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
