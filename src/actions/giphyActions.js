const API_KEY = "zFRBGyY2Tigp2Es8DUs6oDKHssUtl5iI";
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

export function fetchGiphy(userInput) {
  return function(dispatch) {
    fetch(`${URL}&q=${userInput}&limit=6&rating=PG&lang=en`)
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: "FETCH_GIPHY_FULFILLED",
          payload: {
            giphyData: response.data,
            giphyId: response.meta.response_id,
          },
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_GIPHY_REJECTED", payload: err });
      });
  };
}

export function changeUserInput(value) {
  return function(dispatch) {
    dispatch({ type: "CHANGE_USERINPUT", payload: value });
  };
}

export function changeShouldFetch(value) {
  return function(dispatch) {
    dispatch({ type: "CHANGE_ShouldFetch", payload: value });
  };
}

export function changeComingFromInput(value) {
  return function(dispatch) {
    dispatch({ type: "CHANGE_ComingFromInput", payload: value });
  };
}

export function updateMenu() {
  return function(dispatch) {
    dispatch({ type: "UPDATE_MENU", payload: null });
  };
}

export function zoomImage(zoomImageUrl, showZoomImage) {
  return function(dispatch) {
    dispatch({
      type: "ZOOM_IMAGE",
      payload: {
        zoomImageUrl,
        showZoomImage,
      },
    });
  };
}
