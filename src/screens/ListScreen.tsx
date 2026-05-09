import { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { listStyles, categoryStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";
import { useFocusEffect } from "@react-navigation/native";

type Props = ScreenProps<"List">;

export const ListScreen = ({ navigation }: Props) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  // Cada vez que la pantalla vuelve a estar visible, recarga los gadgets
  useFocusEffect(
    useCallback(() => {
      loadGadgets();
    }, []),
  );

  const loadGadgets = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await gadgetService.getAll();
      setGadgets(data);
    } catch (error) {
      Alert.alert("Error", "No se pueden cargar los gadgets");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar por nombre o marca en tiempo real
  const filteredGadgets = gadgets.filter(
    (gadget) =>
      gadget.name.toLowerCase().includes(searchText.toLowerCase()) ||
      gadget.brand.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={listStyles.container}>
      {/* Titulo personalizado */}
      <View style={listStyles.header}>
        <View style={listStyles.headerTop}>
          <View>
            <Text style={listStyles.headerLabel}>INVENTARIO</Text>
            <Text style={listStyles.headerTitle}>Mis Gadgets</Text>
            <Text style={listStyles.headerSubtitle}>
              Rastrea tu colección tech
            </Text>
          </View>
          <View style={listStyles.badge}>
            <Text style={listStyles.badgeNumber}>{gadgets.length}</Text>
            <Text style={listStyles.badgeLabel}>ARTÍCULOS</Text>
          </View>
        </View>
      </View>

      {/* Barra de búsqueda */}
      <View style={listStyles.searchContainer}>
        <TextInput
          style={listStyles.searchInput}
          placeholder="🔍 Buscar por nombre o marca..."
          placeholderTextColor={COLORS.textLight}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <Text style={listStyles.sectionLabel}>AGREGADOS RECIENTEMENTE</Text>

      {/* Lista de gadgets */}
      <FlatList
        data={filteredGadgets}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.list}
        ListEmptyComponent={
          <Text style={listStyles.emptyText}>
            {loading
              ? "Cargando..."
              : searchText
                ? "No se encontraron gadgets"
                : "No hay gadgets aún. ¡Agrega el primero!"}
          </Text>
        }
        renderItem={({ item }) => {
          const catStyle =
            categoryStyles[item.category.toLowerCase()] ??
            categoryStyles.default;
          return (
            <TouchableOpacity
              style={listStyles.card}
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <View style={listStyles.cardIconBox}>
                <Text style={listStyles.cardIcon}>{catStyle.emoji}</Text>
              </View>

              <View style={listStyles.cardInfo}>
                <Text style={listStyles.cardName}>{item.name}</Text>
                <Text style={listStyles.cardBrand}>  {item.brand}</Text>
                <View
                  style={[
                    listStyles.cardCategory,
                    { backgroundColor: catStyle.bg },
                  ]}
                >
                  <Text
                    style={[
                      listStyles.cardCategoryText,
                      { color: catStyle.color },
                    ]}
                  >
                    {item.category}
                  </Text>
                </View>
              </View>

              <View style={listStyles.cardRight}>
                <Text style={listStyles.cardPrice}>${item.price}</Text>
                <Text style={listStyles.cardYear}>{item.purchaseYear}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Botón flotante */}
      <View style={listStyles.fabContainer}>
        <TouchableOpacity
          style={listStyles.fab}
          onPress={() => navigation.navigate("Form", {})}
        >
          <Text style={listStyles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
