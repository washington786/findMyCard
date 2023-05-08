import React, { useState,useEffect } from "react";
import {  View, ScrollView, StyleSheet, Dimensions, } from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";
import { Button } from "react-native-paper";
import { Caption, Card, FAB, Text, TextInput, Title } from "react-native-paper";
import { db,auth } from "../../screens/Auth/firebase";
import { ref,onValue,push } from "firebase/database";

const height=Dimensions.get('screen').height;

interface b{
    handleScanner():void;
}

const BottomSheets = ({data}) => {
  const user = auth.currentUser?.uid;
  
  const [Surname,setSurname]=useState('')
  const [Uid,setUid]=useState('')
  const [Email,setEmail]=useState('')
  const [comment,setComment]=useState('')
  useEffect(() => {
   const StudentRef= ref(db,'/Studens/' + user)
   onValue(StudentRef, snap => {

        setSurname(snap.val() && snap.val().Surname);
        
        setEmail(snap.val().email)
        setUid(snap.val().uid)
    }) 

}, [])
const onHandleAdd=()=>{
  const AddRef =ref(db,'LostCard')
  push(AddRef,{
      
    Surname,
    Email,
    LostStudentCard:data,
    comment,user
  })
}
  const [isVisible, setVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={"Notifications"}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: "white",
          maxHeight: "50%",
          minHeight: "50%",
          width: "100%",
          height: height*0.5,
        }}
        bottomSheetTitleStyle={{ color: "#0A2463" }}
        onRequestClose={() => setVisible(!isVisible)}
        bottomSheetVisible={isVisible}
      >
        <ScrollView>
            <Button mode="outlined" labelStyle={{color:'blue'}}>Scan Again 📷 </Button>
          <Text>{data} {Surname}</Text>
          <Text>Enter your contact details</Text>
          <View style={styles.inputCon}>
            <TextInput
              outlineStyle={{
                borderRadius: 20,
                borderWidth: 0.2,
              }}
              placeholder="enter your contact details...."
              autoCapitalize="none"
              mode="outlined"
              style={styles.input}
              contentStyle={styles.input}
              value={comment}
              onChangeText={(text)=>setComment(text)}
              // onSubmitEditing={onSubmitEditing}
            />
            <View style={styles.comment}>
            <FAB
              icon="plus"
              onPress={onHandleAdd}
              mode="flat"
              size="small"
            />
          </View>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheets;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    width: "100%",
    height: height*0.5,
    bottom: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3E92CC",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  comment: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  inputCon: {
    marginVertical: 7,
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
  },
});
