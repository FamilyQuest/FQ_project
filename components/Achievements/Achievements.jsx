import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './achievements.style';
import AchievementCard from './AchievementCard';
import dbConnectionAchivements from "../DataBase/dbConnectionAchivements";
import dbConnectionUsersAchivements from '../DataBase/dbConnectionUsersAchivements';

const Achievements = ({ navigation, userId }) => {
    const { achivements, countAchivements, countMaxByAchivementId } = dbConnectionAchivements();
    const { usersAchivements, getUserAchivementsByUserId, incrementUserAchivement, countStatusTrue } = dbConnectionUsersAchivements();

    let combinedAchivements = null
    if (usersAchivements) {
        const userAchivements = getUserAchivementsByUserId(userId);
        if (userAchivements.length > 0) {
            combinedAchivements = achivements.map((achivement) => {
                const userAchivement = userAchivements.find((userAchivement) => userAchivement.achivement_id === achivement.id);
                if (userAchivement) {
                    return {
                        ...achivement,
                        count: userAchivement.count,
                        status: userAchivement.count === achivement.countMax,
                    };
                }
                return achivement;
            });
        }
    }
    
    // const countMax = countMaxByAchivementId(2);
    // if(countMax){
    //     incrementUserAchivement(userId, 2, countMax);
    // }

    const count = countStatusTrue(userId);
    const maxCount = countAchivements();

    const imageMap = {
        'Toilet Titan': require('../../assets/Achievements/Toilet Titan.png'),
        'Sir Soaps-a-Lot': require('../../assets/Achievements/Sir Soaps-a-Lot.png'),
        'Task Master': require('../../assets/Achievements/Task Master.png'),
        'Impulsive Buyer Expert': require('../../assets/Achievements/Impulsive Buyer Expert.png'),
    };

    return (
        <View style={styles.contianer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Achievements</Text>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>{count}/{maxCount}</Text>
                <Image style={styles.subImage} source={require('../../assets/Achievements/Trophy.png')} />
            </View>
            <View style={styles.scrollViewContainer} >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollContainer}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    {combinedAchivements && combinedAchivements.map((achivement, key) => (
                        <AchievementCard
                            key={key}
                            image={imageMap[achivement.image]}
                            text={achivement.title}
                            countMax={achivement.countMax}
                            count={achivement.count}
                            status={achivement.status}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default Achievements;
