import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';
import styles from './styles';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </ScrollView>
    </View>
  )
};

export default Favorites;
