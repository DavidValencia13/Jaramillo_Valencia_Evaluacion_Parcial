import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  List: undefined;
  Detail: { id: number };
  Form: { id?: number };
};

export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
