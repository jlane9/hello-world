import React from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>Amsterdam</IonItem>
          <IonItem>Bogota</IonItem>
          <IonItem>Buenos Aires</IonItem>
          <IonItem>Cairo</IonItem>
          <IonItem>Dhaka</IonItem>
          <IonItem>Edinburgh</IonItem>
          <IonItem>Geneva</IonItem>
          <IonItem>Genoa</IonItem>
          <IonItem>Glasgow</IonItem>
          <IonItem>Hanoi</IonItem>
          <IonItem>Hong Kong</IonItem>
          <IonItem>Islamabad</IonItem>
          <IonItem>Istanbul</IonItem>
          <IonItem>Jakarta</IonItem>
          <IonItem>Kiel</IonItem>
          <IonItem>Kyoto</IonItem>
          <IonItem>Le Havre</IonItem>
          <IonItem>Lebanon</IonItem>
          <IonItem>Lhasa</IonItem>
          <IonItem>Lima</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
