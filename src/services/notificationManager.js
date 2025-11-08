import * as Notifications from "expo-notifications";

export async function askNotificationPermission(){
    const {notificationStatus} = await Notifications.requestPermissionAsync();

    if (notificationStatus !== 'granted') {
        console.log('Notification permission not granted');
        return false;
    }
    console.log('Notification permission granted');
    return true;

}

export async function sendQuoteNotification (quote){
    try{
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Quote time", 
                body: `${quote.te}`
            }
        })
    }
}