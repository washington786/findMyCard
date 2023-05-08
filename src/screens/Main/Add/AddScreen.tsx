import React, { useState, useEffect } from "react";
import { Page, SafeView } from "../../../components/Mains";
import { CustomHeader } from "../../../components/CustomHeader";

// in relation to barcode scanner
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BottomSheets from "../../../components/scan/BottomSheet";

const AddScreen = () => {
  return (
    <SafeView>
      <Page>
        <CustomHeader title="add recovered card" />
        <ScannerComponent/>
      </Page>
    </SafeView>
  );
};

export default AddScreen;


const ScannerComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data,setData] = useState(null);
  const [type,setType] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }): void => {
    setScanned(true);
    setData(data);
    setType(type)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const resetScan=()=>{
    setData(null);
    setType(null);
    setScanned(false);
  }

  return (
    <View style={styles.scan}>
      <BarCodeScanner
        onBarCodeScanned={
          scanned ? undefined : handleBarCodeScanned
        }
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <BottomSheets data={data}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scan: {
    flex: 1,
  },
});
