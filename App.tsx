import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    //DEBBUGAR EVENTO ############################
    //const subscription = Notifications.addNotificationReceivedListener(
    //  async (notification) => {
    //    const data = notification.request.content.data.plant as PlantProps;
    //    console.log(data);
    //  }
    //);
    //return () => subscription.remove();
    // ###########################################
    //PEGANDO INFORAÇÔES DAS NOTIFICAÇOES ########
    //async function notifications() {
    //  const data = await Notifications.getAllScheduledNotificationsAsync();
    //  console.log('NOTIFICAÇÕES AGENDADAS ############');
    //  console.log(data);
    //}
    //notifications();
    // ###########################################
    // CANCELANDO TODAS AS NOTIFICAÇÕES ##########
    //async function notifications() {
    //  await Notifications.cancelAllScheduledNotificationsAsync();
    //  const data = await Notifications.getAllScheduledNotificationsAsync();
    //  console.log('NOTIFICAÇÕES AGENDADAS ############');
    //  console.log(data);
    //}
    //notifications();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
