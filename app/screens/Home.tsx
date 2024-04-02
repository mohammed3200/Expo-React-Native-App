import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../context/AuthContext'

const Home = () => {
  const [student, setStudent] = useState<any>()

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`${API_URL}/student/me`);
        setStudent(result.data.data)
      } catch (e: any) {
        alert(e.message);
      }
    };

    loadUser();
  }, [])

  return (
    <View>
      <View>
 <Image source={{uri: student?.PersonalPicture}} style={{width: 100, height: 100}} />
 <Text>Name: {student?.StudentName}</Text>
 <Text>Registration Number: {student?.RegistrationNumber}</Text>
 <Text>Department Name: {student?.DepartmentName}</Text>
 <Text>Date of Birth: {student?.DateOfBirth}</Text>
 <Text>Nationality: {student?.Nationality}</Text>
 <Text>Gender: {student?.gender}</Text>
 <Text>Email: {student?.citemail}</Text>
 <Text>Cumulative Average: {student?.CumulativeAverage}</Text>
 <Text>Units Completed: {student?.UnitsCompleted}</Text>
 <Text>Diploma GPA: {student?.DiplomaGPA}</Text>
 <Text>Phone Number: {student?.PhoneNumber}</Text>
 {/* For properties like PersonalPicture, you might want to use an Image component */}
 <Text>QR Code: {student?.QrCode}</Text>
 <Text>School System: {student?.SchoolSystem}</Text>
</View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})