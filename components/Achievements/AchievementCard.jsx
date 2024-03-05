import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './achievementsCard.style';

const AchievementCard = ({ image, text, countMax, count, status }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {image && (<Image style={styles.achievementImage} source={image} />)}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.description1}>{text}</Text>
                <Text style={styles.description2}>{count}/{countMax}</Text>
            </View>
        </View>

    );
};

export default AchievementCard;
