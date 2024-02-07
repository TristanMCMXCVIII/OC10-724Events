import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );// trie les datas par ordre descendant 
  const nextCard = () => {
    setTimeout(
      () => setIndex(byDateDesc && (index < byDateDesc.length - 1 ? index + 1 : 0)), // err = add "-1" in the list because arrays starts at 0 
      5000 // ajout d'un ternaire && sur le byDateDesc pour traiter le cas undefined
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.title}>
          
          <div
            
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((actualEvent, radioIdx) => (
                <input
                  key={`${actualEvent.title}`} // add 'actual index' instead of _
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx} // idx remplacé par index 
                  onChange={() => {}}
                /> // erreur dans la console mais on l'utilise
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
