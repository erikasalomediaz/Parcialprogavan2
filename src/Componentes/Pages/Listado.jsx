import React from 'react'
import { useEffect } from 'react'
import { Boton } from '../Atomos'
import { Pokemones } from '../Templates'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { loadingApp, loadedApp, getPokemones, getCantLista} from '../../Redux/Ducks/ducksgral.jsx'
import { useDispatch } from 'react-redux';



export default function Listado(props) {
    const { ducksgral } = useSelector(state => state);
    const { loading, error, errorMsg, prev, nex, pokemones, url, info } = ducksgral;

    // el dispatch permite acceder a los reducers
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPokemones(url));
    }, [dispatch]);

   
    return (
        <div>
            VER:
            <Button style={{ width: '3rem' }} onClick={() => { dispatch(getCantLista(url, 10)) }}>10</Button>
            <Button style={{ width: '3rem' }} onClick={() => { dispatch(getCantLista(url, 20)) }}>20</Button>
            <Button style={{ width: '3rem' }} onClick={() => { dispatch(getCantLista(url, 30)) }}>30</Button>
            
            
            {Array.isArray(pokemones) && pokemones.map((item => {
  
       
                return (
                    <Pokemones props={item} ></Pokemones>)}))
            }

            <br />
            {prev ? <Button style={{ width: '5rem' }} onClick={() => { dispatch(getPokemones(prev)) }}>Previous</Button> : null}
            {nex ? <Button style={{ width: '5rem' }} onClick={() => { dispatch(getPokemones(nex)) }}>Next</Button> : null}

        </div>
    )
}

