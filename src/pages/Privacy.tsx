import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Privacy Policy</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          This is a test app, no data collection here...
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicy;
