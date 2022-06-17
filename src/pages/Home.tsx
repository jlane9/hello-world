import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ImageCard from '../components/ImageCard';
import { Div } from '../components/ui';


interface CatResult {
  url: string;
}

const Home: React.FC = () => {

  const maxCats = 12;
  const [cats, setCats] = useState<CatResult[]>();
  const [selected, setSelected] = useState<number>(1);

  const incrementCounter = () => {
    if (selected < maxCats) {
      console.log('right')
      setSelected(selected + 1);
    } else {
      console.log('reset')
      setSelected(1);
    }
  }

  const decrementCounter = () => {

    if (selected > 1) {
      console.log('left')
      setSelected(selected - 1);
    } else {
      console.log('reset')
      setSelected(maxCats);
    }
  }

  const arrowHandler = (event: KeyboardEvent) => {
    console.log(selected);
    if (event.key === 'ArrowRight') {
      incrementCounter();
    } else if (event.key === 'ArrowLeft') {
      decrementCounter();
    }
  }

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${maxCats}`)
      .then(res => res.json())
      .then(
        (result: CatResult[]) => {
          setCats(result);
        }
      )
  }, []);

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', arrowHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', arrowHandler);
    };
  }, [arrowHandler]); // Empty array ensures that effect is only run on mount and unmount

  return (
    <IonPage>
      <IonContent fullscreen scrollY={true}>
        <Div className="m-4">
          <Div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {
              cats?.map((cat, idx) => {
                return (
                  <Div className="max-h-64" key={idx + 1}>
                    <ImageCard
                      image={cat.url}
                      className={(idx + 1 === selected ? 'border-4 outline-offset-2 border-indigo-500'  : 'shadow-sm hover:shadow-xl') + ' max-h-64'}
                      imageClassName={ idx + 1 === selected ? 'max-h-60' : 'max-h-64' }
                    />
                  </Div>
                )
              })
            }
          </Div>
        </Div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
