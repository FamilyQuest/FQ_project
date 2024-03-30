import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, update } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionPhysicalShopItems = (enviormentId) => {
    const [shopItems, setShopItems] = useState([]);
    const [shopItemCount, setShopItemCount] = useState(0);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGINGSENDER_ID,
            appId: APP_ID,
            measurementId: MEASUREMETN_ID,
        };

        if (!firebase.apps.length) {
            initializeApp(firebaseConfig);
        }
        const db = getDatabase();
        const shopItemsRef = ref(db, '/PhysicalShop');

        get(shopItemsRef)
            .then((snapshot) => {
                let count = 0;
                const items = [];
                snapshot.forEach((childSnapshot) => {
                    count++;
                    const item = childSnapshot.val();
                    if (item.Enviorment_id === enviormentId) { // Filter items based on Enviorment_id
                        items.push({ id: childSnapshot.key, ...item });
                    }
                });
                setShopItems(items);
                setShopItemCount(count);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [enviormentId]);

    const dbSetNewPrize = (enviormentId, newPrizeName, newPrizePoints) => {
        const db = getDatabase();
        const shopItemsRef = ref(db, `/PhysicalShop/${shopItemCount}`);
        set(shopItemsRef, {
            Enviorment_id: enviormentId,
            name: newPrizeName,
            points: newPrizePoints,
            status: "available"
        })
            .then(() => {
                console.log('New prize added successfully');
                get(shopItemsRef)
                    .then((snapshot) => {
                        const items = [];
                        snapshot.forEach((childSnapshot) => {
                            const item = childSnapshot.val();
                            items.push({ id: childSnapshot.key, ...item });
                        });
                        setShopItems(items);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error('Error adding new prize:', error);
            });
    };

    const updateStatus = (enviormentId, itemName, newStatus) => {
        const db = getDatabase();
        const shopItemsRef = ref(db, '/PhysicalShop');
        
        get(shopItemsRef)
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const item = childSnapshot.val();
                    if (item.Enviorment_id === enviormentId && item.name === itemName) {
                        const itemId = childSnapshot.key;
                        const itemRef = ref(db, `/PhysicalShop/${itemId}`);
                        update(itemRef, { status: newStatus })
                            .then(() => {
                                console.log('Status updated successfully');
                                
                            })
                            .catch((error) => {
                                console.error('Error updating status:', error);
                            });
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
    };

    return { shopItems, dbSetNewPrize, updateStatus };
};

export default dbConnectionPhysicalShopItems;
