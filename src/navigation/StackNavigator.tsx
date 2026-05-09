import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../styles/appStyles";
import { ListScreen } from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
import { RootStackParamList } from "./typesNavigation";
import { FormScreen } from "../screens/FormScreen";

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.cardBg },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalles del Gadget" }}
      />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={({ route }) => ({
          title: route.params?.id ? "Editar Gadget" : "Nuevo Gadget",
        })}
      />
    </Stack.Navigator>
  );
};