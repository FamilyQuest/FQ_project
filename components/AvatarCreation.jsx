import React from 'react';
import { Text, View } from 'react-native';

import Avatar from './Avatar';
import styles from './avatarCreation.style';

const AvatarCreation = ({params, name ,age , score}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar params={params}/>
            </View>
            <View style={styles.detailsContainer}>
                    <View>
                    <Text style={styles.textTitle}>Name</Text>
                    <Text style={styles.text}>{name}</Text>
                    </View>
                    <View>
                    <Text style={styles.textTitle}>Age</Text>
                    <Text style={styles.text}>{age}</Text>
                    </View>
                    <View>
                    <Text style={styles.textTitle}>Score</Text>
                    <Text style={styles.text}>{score}pt</Text>
                    </View>
            </View>
        </View>
    );
};  

export default AvatarCreation;
