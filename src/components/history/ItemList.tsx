import { FlatList, StyleSheet } from "react-native";
import React,{useEffect,useState} from "react";
import Item from "./Item";
import { db,auth } from "../../screens/Auth/firebase";
import { ref,onValue } from "firebase/database";
export const data = [
  {
    date: "14 march 2023",
    studentNo: "216617162",
    location: "Tut Cafeteria",
  },
  {
    date: "16 march 2023",
    studentNo: "219917169",
    location: "Limpopo Mall Wimpy",
  },
];

const ItemList = () => {
  const CurrentID = auth.currentUser?.uid;
  const [StudHistory, setStudHistory] = useState([])
  
  useEffect(() => {
   const StudentRef= ref(db,'/LostCard')
   onValue(StudentRef, snap => {

        const StudHistory = []
        snap.forEach(action => {
            const key = action.key
            const data = action.val()
            StudHistory.push({
                key:key,Surname:data.Surname,
                LostStudentCard:data.LostStudentCard,user:data.user
            })
            
            const text=CurrentID
            if(text){
             const newData = StudHistory.filter(function(item){
                 const itemData = item.user ? item.user
                 :'';
                 const textData = text;
                 return itemData.indexOf( textData)>-1;
 
             })
             setStudHistory(newData)
            
           }


        })
    })
 
}, [])
  const _renderItems = ({ item, index }) => {
    const { date, studentNo, location } = item;
    return (
      <Item
        place={item.Surname}
        reported_date={date}
        studentNo={item.LostStudentCard}
        key={index}
      />
    );
  };

  return (
    <FlatList
      data={StudHistory}
      renderItem={_renderItems}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.con}
    />
  );
};

export default ItemList;

const styles = StyleSheet.create({
    con:{
        flexGrow:1,
        backgroundColor:'white'
    }
});
