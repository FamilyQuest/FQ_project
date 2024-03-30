import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, Modal, TextInput, Button } from 'react-native';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';
import dbConnectionPhysicalShop from '../DataBase/dbConnectionPhysicalShop';
import styles from './PhysicalShopScroll.style';

const useUserDataAndShopItems = (userId) => {
    const { getUserById } = dbConnectionUsers();
    const user = getUserById(userId);
    const { shopItems } = dbConnectionPhysicalShop(user?.Enviorment_id);
    return { user, shopItems };
};

const PhysicalItemScroll = ({ userId }) => {
    const [showModal, setShowModal] = useState(false);
    const [showItemModal, setItemModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [insufficientPoints, setInsufficientPoints] = useState(false);
    const [newPrizeName, setNewPrizeName] = useState('');
    const [newPrizePoints, setNewPrizePoints] = useState('');


    const handleItem = (itemValue) => {
        setSelectedItem(itemValue);
        setItemModal(true);
    };
    const { dbSetNewPrize, updateStatus } = dbConnectionPhysicalShop();
    const { user, shopItems } = useUserDataAndShopItems(userId);
    const { updatePointsByUserId } = dbConnectionUsers();
    const handleConfirmPurchase = () => {
        if (user && selectedItem && user.Points - selectedItem.points >= 0) {
            updatePointsByUserId(userId, user.Points - selectedItem.points);
            updateStatus(user.Enviorment_id, selectedItem.name, "acquired")
            setItemModal(false);
        } else {
            setInsufficientPoints(true);
        }
    };
    const handleSetNewPrize = () => {
        setShowModal(true);
    };
    const handleConfirmNewPrize = () => {
        dbSetNewPrize(user.Enviorment_id, newPrizeName, newPrizePoints);
        setShowModal(false);
        setNewPrizeName('');
        setNewPrizePoints('');
    };

    return (
        <View style={styles.formContainer}>
            <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                <View>
                    {/* Render shop items */}
                    <View style={styles.columnContainer}>
                        {shopItems.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.item} onPress={item.status === 'available' ? () => handleItem(item) : null}>
                                <Text style={{ fontWeight: 'bold', width: '24%' }}>{item.name}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.points}P</Text>
                                {item.status === 'available' ? (
                                    <Image style={{}} source={require('../../assets/Avatar-Shop/giftbox.png')} />
                                ) : (
                                    <Image style={{ width: "22%", height: "90%" }} source={require('../../assets/Avatar-Shop/present.png')} />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
            {user && user.userType === 'admin' && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Btn3} onPress={handleSetNewPrize}>
                        <Text style={styles.textBtn}>Set New Prize</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Modal
                visible={showModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalContentText}>Set New Prize</Text>
                        <TextInput
                            style={styles.modalContentInput}
                            placeholder="Enter prize name"
                            value={newPrizeName}
                            onChangeText={setNewPrizeName}
                        />
                        <TextInput
                            style={styles.modalContentInput}
                            placeholder="Enter points"
                            keyboardType="numeric"
                            value={newPrizePoints}
                            onChangeText={setNewPrizePoints}
                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.Btn4} onPress={handleConfirmNewPrize}>
                                <Text style={styles.textBtn}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Btn5} onPress={() => { setShowModal(false); }}>
                                <Text style={styles.textBtn}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <Modal
                    visible={showItemModal}
                    onRequestClose={() => {
                        setItemModal(false);
                    }}
                    animationType="slide"
                    transparent={true} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalItemContent}>
                            <Text style={styles.modalContentText}>
                                {insufficientPoints
                                    ? `Insufficient points! your current points: ${user.Points}.`
                                    : `Do you wish to purchase the item?`}
                            </Text>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity style={styles.Btn2} onPress={handleConfirmPurchase}>
                                    <Text style={styles.textBtn}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Btn1} onPress={() => {
                                    setInsufficientPoints(false);
                                    setItemModal(false);
                                }}>
                                    <Text style={styles.textBtn}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default PhysicalItemScroll;
