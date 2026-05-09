import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { detailStyles, categoryStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";
import { useFocusEffect } from "@react-navigation/native";

type Props = ScreenProps<"Detail">;

export default function DetailScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const [gadget, setGadget] = useState<Gadget | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadGadget();
    }, []),
  );

  const loadGadget = async (): Promise<void> => {
    try {
      const data = await gadgetService.getById(id);
      setGadget(data);
      if (data === null) {
        Alert.alert("Error", "Gadget no encontrado");
        navigation.goBack();
        return;
      }
    } catch (error) {
      Alert.alert("Error", "No se puede cargar el gadget");
      console.error(error);
    }
  };

  const confirmDelete = (): void => {
    if (gadget === null) return;
    Alert.alert(
      "Eliminar Gadget",
      `¿Estás seguro de que quieres eliminar "${gadget.name}"? Esta acción no se puede deshacer.`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: handleDelete },
      ],
    );
  };

  const handleDelete = async (): Promise<void> => {
    if (gadget === null) return;
    try {
      await gadgetService.delete(gadget.id);
      Alert.alert("Éxito", "Gadget eliminado correctamente");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar el gadget");
      console.error(error);
    }
  };

  if (gadget === null) {
    return (
      <View style={detailStyles.container}>
        <Text style={detailStyles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  const catStyle = categoryStyles[gadget.category.toLowerCase()] ?? categoryStyles.default;

  return (
    <ScrollView style={detailStyles.container}>

      {/* Hero con emoji y badge de categoría */}
      <View style={detailStyles.hero}>
        <View style={detailStyles.heroIconBox}>
          <Text style={detailStyles.heroIcon}>{catStyle.emoji}</Text>
        </View>
        <View style={[detailStyles.heroCategoryBadge, { backgroundColor: catStyle.bg }]}>
          <Text style={[detailStyles.heroCategoryText, { color: catStyle.color }]}>
            {gadget.category}
          </Text>
        </View>
      </View>

      {/* Sección PRODUCT INFO */}
      <Text style={detailStyles.sectionLabel}>INFORMACIÓN DEL PRODUCTO</Text>

      {/* Card nombre */}
      <View style={detailStyles.card}>
        <Text style={detailStyles.label}>NOMBRE</Text>
        <Text style={detailStyles.value}>{gadget.name}</Text>
      </View>

      {/* Card brand y year en dos columnas */}
      <View style={detailStyles.fieldRow}>
        <View style={[detailStyles.card, detailStyles.fieldHalf]}>
          <Text style={detailStyles.label}>MARCA</Text>
          <Text style={detailStyles.value}>{gadget.brand}</Text>
        </View>
        <View style={[detailStyles.card, detailStyles.fieldHalf]}>
          <Text style={detailStyles.label}>AÑO</Text>
          <Text style={detailStyles.value}>{gadget.purchaseYear}</Text>
        </View>
      </View>

      {/* Card precio destacada */}
      <View style={detailStyles.priceCard}>
        <Text style={detailStyles.label}>PRECIO</Text>
        <Text style={detailStyles.priceValue}>${gadget.price}</Text>
      </View>

      {/* Botones Editar y Eliminar */}
      <View style={detailStyles.buttonContainer}>
        <TouchableOpacity
          style={detailStyles.editButton}
          onPress={() => navigation.navigate("Form", { id: gadget.id })}
        >
          <Text style={detailStyles.editButtonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={detailStyles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={detailStyles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}