import { useState } from 'react';
import bg from './assets/pixil-background.png';
import './App.css';

import img0 from './assets/pixil-frame-0.png';
import img1 from './assets/pixil-frame-1.png';
import img2 from './assets/pixil-frame-2.png';
import img3 from './assets/pixil-frame-3.png';
import minimizeIcon from './assets/pixil-minimalize.png';
import closeIcon from './assets/pixil-close.png';

function App() {
  const imagens = [img0, img1, img2, img3];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const avancarImagem = () => {
    setIndiceAtual((indiceAtual + 1) % imagens.length);
  };

  return (
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        className="flex items-center justify-center w-screen h-screen"
      >
      <div className="border-3 border-black px-3 py-3 bg-[#e0173f] rounded-md shadow-lg">
        <div className="flex items-center justify-between px-3 py-3 bg-[#e0173f] text-white text-xl">
          <span>For you! &lt;3</span>
          <div className="flex gap-2">
            <button>
              <img src={minimizeIcon} alt="minimalize" className="w-[24px] cursor-pointer" />
            </button>
            <button>
              <img src={closeIcon} alt="close" className="w-[24px] cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="w-[420px] bg-neutral-100 border-3 border-black rounded-md overflow-hidden">
          <div className="p-5 flex items-center justify-center">
            <div onClick={avancarImagem} style={{ cursor: 'pointer' }}>
              <img
                src={imagens[indiceAtual]}
                alt={`Cartão ${indiceAtual + 1}`}
                style={{ width: '300px', height: 'auto' }}
                title="Clique para avançar para a próxima imagem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
