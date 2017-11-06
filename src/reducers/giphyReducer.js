export default function reducer(
  state = {
    giphy: [],
    shouldFetch: true,
    fetched: false,
    userInput: null,
    error: null,
    comingFromInput: false,
    updateMenu: 0,
    zoomImageUrl: null,
    showZoomImage: false,
  },
  action
) {
  switch (action.type) {
    case "FETCH_GIPHY_REJECTED": {
      return { ...state, fetched: true, error: action.payload };
    }
    case "FETCH_GIPHY_FULFILLED": {
      return {
        ...state,
        shouldFetch: false,
        fetched: true,
        giphy: action.payload.giphyData,
        comingFromInput: false,
      };
    }
    case "CHANGE_ShouldFetch": {
      return {
        ...state,
        shouldFetch: action.payload,
      };
    }

    case "CHANGE_USERINPUT": {
      return {
        ...state,
        userInput: action.payload,
      };
    }

    case "CHANGE_ComingFromInput": {
      return {
        ...state,
        comingFromInput: action.payload,
      };
    }

    case "UPDATE_MENU": {
      return {
        ...state,
        updateMenu: state.updateMenu + 1,
      };
    }

    case "ZOOM_IMAGE": {
      return {
        ...state,
        zoomImageUrl: action.payload.zoomImageUrl,
        showZoomImage: action.payload.showZoomImage,
      };
    }

    default:
      return state;
  }
}
