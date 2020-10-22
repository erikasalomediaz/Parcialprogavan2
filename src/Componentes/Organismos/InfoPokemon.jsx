import React from 'react'


export default function InfoPokemon(props) {
    const info = props.props;

    return (
        <div>

            <h3>{info?.species?.name} </h3>

            <div id="carousel-example-2"  class="row align-items-center" style={{ backgroundColor: '#ad90dd', width: 'auto'}} class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li  data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-2" data-slide-to="1"></li>
                    <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    <li data-target="#carousel-example-2" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner" role="listbox" >
                    <div class="carousel-item active" >
                        <div class="view" >
                            <img align="center"class="img-circle" src={info?.sprites?.front_default} alt="1" width="300" height="300" />
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="view">
                            <img class="img-circle" src={info?.sprites?.back_default} alt="2 " width="300" height="300" />
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="view">
                            <img class="img-circle" src={info?.sprites?.front_shiny} alt="3" width="300" height="300" />
                            <div class="mask rgba-black-light"></div>
                        </div>
        
                    </div>

                    <div class="carousel-item">

                        <div class="view">
                            <img class="img-circle" src={info?.sprites?.back_shiny} alt="4" width="300" height="300" />
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="False"></span>
                    <span class="sr-only" >Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="false"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
            <h5> </h5>
            <h5>Habilidades: </h5>
            {info?.abilities?.map(ability => {
                return <div key={ability.slot}>{ability.ability.name}</div>

            })}

        </div>)


}