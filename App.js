import { config } from "@gluestack-ui/config";
import StackNavigator from "./StackNavigator";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
    <Provider store={store}>  
      <GluestackUIProvider config={config}>
        <StackNavigator />
        <ModalPortal />
        
      </GluestackUIProvider>
      </Provider>
    </>
  );
}
