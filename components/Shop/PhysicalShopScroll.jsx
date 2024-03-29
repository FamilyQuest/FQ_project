import React, { useState, useEffect } from 'react';
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
    const [showPages, setShowPages] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [insufficientPoints, setInsufficientPoints] = useState(false);
    const [newPrizeName, setNewPrizeName] = useState('');
    const [newPrizePoints, setNewPrizePoints] = useState('');

    // Fetch shopItems from the database whenever userId changes
    const { user, shopItems } = useUserDataAndShopItems(userId);

    const handleConfirmPurchase = () => {
        if (user && selectedItem && user.Points - selectedItem.points >= 0) {
            // Update points and close modal
            setShowModal(false);
        } else {
            setInsufficientPoints(true);
        }
    };

    const handleSetNewPrize = () => {
        setShowModal(true);
    };

    const { dbSetNewPrize } = dbConnectionPhysicalShop();
    const handleConfirmNewPrize = () => {
        dbSetNewPrize(user.Enviorment_id, newPrizeName, newPrizePoints);
        setShowModal(false);
        setNewPrizeName('');
        setNewPrizePoints('');
    };

    return (
        <View style={styles.formContainer}>
            {showLoading && (
                <View style={styles.loading}>
                    {/* Render loading indicator */}
                </View>
            )}
            <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                <View>
                    {/* Render shop items */}
                    <View style={styles.columnContainer}>
                        {shopItems.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.item}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{item.points}P</Text>
                                <Image style={{ width: "20%", height: "85%" }} source={require('../../assets/Avatar-Shop/giftbox.png')} />
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
                    {/* Add delete button here if needed */}
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
                        <TouchableOpacity style={styles.Btn5} onPress={() => {setShowModal(false);}}>
                            <Text style={styles.textBtn}>Cancel</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PhysicalItemScroll;
