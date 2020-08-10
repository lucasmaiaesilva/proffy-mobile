import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const TeacherCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/diego3g.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Diego Fernandes</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {`Entusiasta das melhores tecnologias de Química avançada. \n\n aksdhkahsdkjahsdjk aksjdhkajsdh aksjdh akjsdh kajshd kjashd kajhsd kajshd kjashd kjahsd kasjdh kjasdh kjshad.`}
      </Text>
    </View>
  )
};

export default TeacherCard;
