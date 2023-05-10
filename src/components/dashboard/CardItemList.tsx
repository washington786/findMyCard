import { StyleSheet } from "react-native";
import React ,{useEffect,useState}from "react";
import { FlatList } from "react-native-gesture-handler";
import { ContentCardItem } from "./Content";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../screens/Auth/firebase";
import { ref,onValue } from "firebase/database";
const data = [
  {
    id: 1,
    student_info: "Sekgoka LM",
    student_no: "212676162",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
  {
    id: 2,
    student_info: "Furie SK",
    student_no: "212676166",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
  {
    id: 3,
    student_info: "Json DK",
    student_no: "212676177",
    message:
      "anyone who find the student card with the above details, please bring to student admin office.",
    admin: "Daniel Washington",
  },
];

export const CardItemList = () => {
  const [Student, setStudent] = useState([])
  useEffect(() => {

  const studentRef= ref(db,'/LostCard')
  onValue(studentRef, snap => {

        const Student = []
        snap.forEach(action => {
            const key = action.key
            const data = action.val()
            Student.push({
                key: key,
                Email:data.Email,
                Surname:data.Surname, LostStudCard:data.LostStudentCard,
                Comment:data.comment
            })
            setStudent(Student)
            
            

        })
    })
}, [])
  const navigation = useNavigation();

  const transitToDetails=(item:any|object):void=>{
    navigation.navigate('details',{item});
  }

  const _renderItem = ({item}) => {
    const { id, student_info, LostStudCard, message, admin } = item;
    return (
      <ContentCardItem
        admin={item.Surname}
        date_posted={""}
        message={item.Comment}
        student_name={student_info}
        student_no={item.LostStudCard}
        id={id}
        onPress={transitToDetails.bind(this,item)}
      />
    );
  };
  return (
    <>
      <FlatList
        renderItem={_renderItem}
        data={Student}
        // keyExtractor={(item) => {
        //   return item.id.toString();
        // }}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default CardItemList;

const styles = StyleSheet.create({});
