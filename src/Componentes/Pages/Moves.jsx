import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import http, { getApi } from '../../Redux/Utils/http'
import { useSelector } from 'react-redux';
import { loadingApp, loadedApp, getPokemones } from '../../Redux/Ducks/ducksgral.jsx';
import { useDispatch } from 'react-redux';
import {InfoMoves} from '../Organismos'



export default function Moves(props) {
    const { id } = useParams();
    const urlCompleta = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const { ducksgral } = useSelector(state => state);
    const { loading, error, errorMsg, prev, nex, pokemones, url, info } = ducksgral;

 
    const dispatch = useDispatch();
console.log(info);

    useEffect(() => {
        dispatch(getPokemones(urlCompleta));
    }, [dispatch, urlCompleta]);

    return (
        <div>
            {<InfoMoves props={info}></InfoMoves>}

        </div>

    )


}