import { useEffect, useState } from 'react';
import api from '../../services/api'

import './home.scss'

function Home() {
  const [personagens, setPersonagens] = useState([])

  useEffect(()=>{

    async function loadCharacters(){
      const response = await api.get('api/characters')

      //console.log(response.data.slice(0, 10))
      setPersonagens(response.data.slice(0, 16))
    }

    loadCharacters()
  }, [])



  return (
    <>
       <div className='container-body'>
         <h3 className='title-page'>Lista Personagens</h3>
         <div className='lista-personagens'>
          {personagens.map((item) => {
            return(
              <div className='card-flip' key={item.id}>
                <div className='front '>
                  <div className='imagem-character'>
                      <img src={item.image} alt={item.name} />
                    <div className='name-character'>
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </div>
                <div className='back'>
                <div className='infos-personagens'>
                    <div className='info'>
                      <p className='info-p title-name'>
                        <span></span> {item.name}
                      </p>
                      <p className='info-p year'>
                        <span>Aniversário:</span> {item.dateOfBirth}
                      </p>
                      <p className='info-p house'>
                        <span>Casa:</span> {item.house}
                      </p>
                      <p className='info-p magic'>
                        <span>Patrono:</span> {item.patronus}
                      </p>
                      <p className='info-p actor'>
                        <span>Ator:</span> {item.actor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
         </div>
       </div>
    </>
  );
}

export default Home;
