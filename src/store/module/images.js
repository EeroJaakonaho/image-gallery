import api from "../../services/api";

export const SET_TOTAL_COUNT = "setTotalCount";
export const SET_IMAGES = "setImages";
export const FETCH_IMAGES = "fetchImages";
export const SET_LOADING_IMAGES = "setLoadingImages";
export const SET_CURRENT_IMAGE = "setCurrentImage";
export const GET_IMAGES = "getImages";
export const GET_IMAGE = "getImage";
export const FETCH_IMAGE = "fetchImage";
export const GET_TOTAL_COUNT = "getTotalCount";
export const GET_LOADING_IMAGES = "getLoadingImages";
export const GET_CURRENT_IMAGE = "getCurrentImage";

function toIdIndexedObject(obj, item) {
  return { ...obj, [item.id]: item };
}

const state = {
  images: {},
  totalCount: 0,
  loadingImages: false,
  currentImage: {}
};

const getters = {
  [GET_IMAGES]: state => {
    return Object.keys(state.images).map(key => state.images[key]);
  },
  [GET_TOTAL_COUNT]: state => {
    return state.totalCount;
  },
  [GET_LOADING_IMAGES]: state => {
    return state.loadingImages;
  },
  [GET_CURRENT_IMAGE]: state => {
    return state.currentImage;
  }
};

const mutations = {
  [SET_IMAGES](state, images) {
    state.images = images;
  },
  [SET_TOTAL_COUNT](state, totalCount) {
    state.totalCount = totalCount;
  },
  [SET_LOADING_IMAGES](state, isLoading) {
    state.loadingImages = isLoading;
  },
  [SET_CURRENT_IMAGE](state, image) {
    state.currentImage = image;
  }
};

const actions = {
  async [FETCH_IMAGES](context, pagination) {
    context.commit(SET_LOADING_IMAGES, true);
    try {
      const { data, totalCount } = await api.fetchImages(pagination);
      context.commit(SET_IMAGES, data.reduce(toIdIndexedObject, {}));
      context.commit(SET_TOTAL_COUNT, totalCount);
      context.commit(SET_LOADING_IMAGES, false);
    } catch (err) {
      console.log(err);
      context.commit(SET_LOADING_IMAGES, false);
    }
  },
  async [FETCH_IMAGE](context, id) {
    context.commit(SET_LOADING_IMAGES, true);

    try {
      const imageData = await api.fetchImage(id);
      context.commit(SET_CURRENT_IMAGE, imageData);
      context.commit(SET_LOADING_IMAGES, false);
    } catch (err) {
      console.log(err);
      context.commit(SET_LOADING_IMAGES, false);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
