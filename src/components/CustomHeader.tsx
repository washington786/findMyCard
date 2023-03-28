import { Header } from "react-native-elements";

interface h {
  title: string;
}

export const CustomHeader = (props: h) => {
  return (
    <>
      <Header
        barStyle="light-content"
        backgroundColor="blue"
        centerComponent={{
          text: `${props.title}`,
          style: {
            textTransform: "uppercase",
            color: "white",
            alignSelf: "center",
            height: "100%",
            maxHeight: 50,
            minHeight: 50,
            paddingVertical: 5,
            fontWeight: "700",
            letterSpacing: 1,
          },
        }}
        centerContainerStyle={{
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        containerStyle={{
          backgroundColor: "blue",
          minHeight: 60,
          maxHeight: 60,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};
