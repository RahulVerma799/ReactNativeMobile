import React from "react";
import { View, Text } from "react-native";

import "./global.css"


import Home from "./src/Page/Home";






const App = () => {
  return (
   <View className="bg-slate-300 h-full w-full p-4">
      <Text>
          <Home/>
      </Text>
   </View>
  );
};

export default App;
