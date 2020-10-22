import { getApi } from '../Utils/http'

//declaro mis tipos
const LOADING_APP = 'LOADING_APP'
const LOADED_APP = 'LOADED_APP'
const FETCH_POKE = 'FETCH_POKE'
const PAGINACION = 'PAGINACION'
const FETCH_INFO = 'FETCH_INFO'

//declaro un estado inicial
const defaultstate =
{
    loading: false,
    error: false,
    errorMsg: '',
    prev: '',
    nex: '',
    pokemones: [],
    url:"https://pokeapi.co/api/v2/pokemon/",
    info:[]

};


export default function reducers(state = defaultstate, action) {
    const { type, payload } = action;

    switch (type) {
        case LOADING_APP:
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: ''
            }
        case LOADED_APP:
            const { loading, error, errorMsg } = payload;
            return {
                ...state,
                loading,
                error,
                errorMsg
            }

        case FETCH_POKE:

            return {
                ...state,
                pokemones: payload
            }


            case PAGINACION:
                const{prev, nex} = payload;
                return {
                    ...state,
                    prev,
                    nex,
    
                }
          case FETCH_INFO:

            return {
                ...state,
               info: payload
                }

                
        default:
            return state;
    }

}

export function loadingApp() {
    return { type: LOADING_APP }
}

export function loadedApp(loading, error, errorMsg) {
    return {
        type: LOADED_APP,
        payload: { loading, error, errorMsg }
    }
}


export function paginacData(prev, nex) {
    return {
        type: PAGINACION,
        payload: { prev, nex }
    }
}
function fetchdata(data) {
    return {
        type: FETCH_POKE,
        payload: data
    }
}
function fetchinfo(data) {
    return {
        type: FETCH_INFO,
        payload: data
    }
}



export function getPokemones(url) {
    return async (dispatch, state) => {
        dispatch(loadingApp());
        console.log(state());
        try {
            const pokes = await getApi(url);
            console.log(pokes);
           pokes.results && dispatch(fetchdata(pokes.results));
           pokes.results && dispatch(paginacData(pokes.previous, pokes.next));
          pokes.abilities && dispatch(fetchinfo(pokes));
          pokes.accuracy && dispatch(fetchinfo(pokes));
            dispatch(loadedApp(false, false, null));

        }
        catch (error) {
            dispatch(loadedApp(false, true, "catcheó"));
        }
    }
}

export  function getCantLista(url,cant) {
    return async (dispatch, state) => {
        dispatch(loadingApp());
        console.log(state());
        try {
            const pokes = await getApi(`${url}?limit=${cant}&offset=${cant}`);
            console.log(pokes);
           pokes.results && dispatch(fetchdata(pokes.results));
            dispatch(loadedApp(false, false, null));
           dispatch(paginacData(pokes.previous, pokes.next));
        }
        catch (error) {
            dispatch(loadedApp(false, true, "catcheó"));
        }
    }
}

export function getInfo(url) {
    return async (dispatch, state) => {
      //  dispatch(loadingApp());
        console.log(state());
        try {
            const pokes = await getApi(url);
            console.log(pokes);
         //  pokes.results && dispatch(fetchdata(pokes.results));
          // pokes.results && dispatch(paginacData(pokes.previous, pokes.next));
          pokes.abilities && dispatch(fetchinfo(pokes));
           // dispatch(loadedApp(false, false, null));

        }
        catch (error) {
            dispatch(loadedApp(false, true, "catcheó"));
        }
    }
}


