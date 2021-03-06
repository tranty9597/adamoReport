/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the push notification config.
 * @author ADAMO
 * @since  10/15/2018
 */
import { PushNotificationIOS } from 'react-native';

import PushNotification from "react-native-push-notification"

export function pushNotificationConfigue(){
    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
          console.log('TOKEN:', token);
        },
  
        // (required) Called when a remote or local notification is opened or received
        onNotification: function (notification) {
          console.log('NOTIFICATION:', notification);
          // PushNotification.localNotification({
          //   message: notification.message
          // })
          // process the notification
  
          // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
  
        // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "423474697908",
  
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true
        },
  
        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
      });
      
}