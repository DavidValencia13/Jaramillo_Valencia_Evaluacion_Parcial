import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { formStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { NewGadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"Form">;

export const FormScreen = ({ route, navigation }: Props) => {
  // Si llega id por params 
  const id = route.params?.id;
  const isEditMode: boolean = id !== undefined;

  // Estado del formulario
  const [form, setForm] = useState<NewGadget>({
    name: "",
    brand: "",
    category: "",
    price: undefined,
    purchaseYear: undefined,
  });

  // Evita que el usuario presione Save dos veces
  const [saving, setSaving] = useState<boolean>(false);

  // Si es modo editar, carga los datos del gadget
  useEffect(() => {
    if (isEditMode && id !== undefined) {
      loadGadget(id);
    }
  }, [id]);

  const loadGadget = async (gadgetId: number): Promise<void> => {
    try {
      const gadget = await gadgetService.getById(gadgetId);
      if (gadget === null) {
        Alert.alert("Error", "Gadget no encontrado");
        navigation.goBack();
        return;
      }
      setForm({
        name: gadget.name,
        brand: gadget.brand,
        category: gadget.category,
        price: gadget.price,
        purchaseYear: gadget.purchaseYear,
      });
    } catch (error) {
      Alert.alert("Error", "El gadget no se puede cargar");
      console.error(error);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = async (): Promise<void> => {
    // Validar campos vacíos
    if (
      form.name.trim() === "" ||
      form.brand.trim() === "" ||
      form.category.trim() === ""
    ) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos");
      return;
    }

    // Validar precio
    const priceNumber = Number(form.price);
    if (!form.price || isNaN(priceNumber) || priceNumber <= 0) {
      Alert.alert("Precio inválido", "Ingresa un precio mayor a 0");
      return;
    }

    // Validar año
    const yearNumber = Number(form.purchaseYear);
    if (
      !form.purchaseYear ||
      isNaN(yearNumber) ||
      yearNumber < 2000 ||
      yearNumber > 2026
    ) {
      Alert.alert("Año inválido", "Ingresa un año entre 1950 y 2026");
      return;
    }

    try {
      setSaving(true);
      if (isEditMode && id !== undefined) {
        await gadgetService.update(id, {
          ...form,
          price: priceNumber,
          purchaseYear: yearNumber,
        });
        Alert.alert("Éxito", "Gadget actualizado correctamente");
      } else {
        await gadgetService.create({
          ...form,
          price: priceNumber,
          purchaseYear: yearNumber,
        });
        Alert.alert("Éxito", "Gadget guardado correctamente");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el gadget");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView
      style={formStyles.container}
      contentContainerStyle={formStyles.scrollContent}
    >
      {/* titulo */}
      <View style={formStyles.hero}>
        <Text style={formStyles.heroTitle}>
          {isEditMode ? "Editar Gadget" : "Agregar al inventario"}
        </Text>
        <Text style={formStyles.heroSubtitle}>
          {isEditMode
            ? "Actualiza la información del gadget"
            : "Completa la información del gadget"}
        </Text>
      </View>

      {/* Nombre */}
      <Text style={formStyles.label}>NOMBRE *</Text>
      <TextInput
        style={formStyles.input}
        value={form.name}
        onChangeText={(value) => handleInputChange("name", value)}
        placeholder="MacBook Pro 14"
        placeholderTextColor="#6B7A8D"
        maxLength={60}
      />

      {/* Marca */}
      <Text style={formStyles.label}>MARCA *</Text>
      <TextInput
        style={formStyles.input}
        value={form.brand}
        onChangeText={(value) => handleInputChange("brand", value)}
        placeholder="Apple"
        placeholderTextColor="#6B7A8D"
        maxLength={60}
      />

      {/* Categoría */}
      <Text style={formStyles.label}>CATEGORÍA *</Text>
      <TextInput
        style={formStyles.input}
        value={form.category}
        onChangeText={(value) => handleInputChange("category", value)}
        placeholder="Laptop"
        placeholderTextColor="#6B7A8D"
        maxLength={40}
      />

      {/* Precio y Año en dos columnas */}
      <View style={formStyles.rowInputs}>
        <View style={formStyles.rowInput}>
          <Text style={formStyles.label}>PRECIO *</Text>
          <TextInput
            style={formStyles.input}
            value={form.price?.toString()}
            onChangeText={(value) => handleInputChange("price", value)}
            placeholder="1999.99"
            placeholderTextColor="#6B7A8D"
            keyboardType="numeric"
          />
        </View>
        <View style={formStyles.rowInput}>
          <Text style={formStyles.label}>AÑO *</Text>
          <TextInput
            style={formStyles.input}
            value={form.purchaseYear?.toString()}
            onChangeText={(value) => handleInputChange("purchaseYear", value)}
            placeholder="2024"
            placeholderTextColor="#6B7A8D"
            keyboardType="numeric"
            maxLength={4}
          />
          <Text style={formStyles.hint}>Rango: 2000-2026</Text>
        </View>
      </View>

      {/* Botón Guardar */}
      <TouchableOpacity
        style={[formStyles.saveButton, saving && formStyles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={formStyles.saveButtonText}>
          {saving ? "Guardando..." : isEditMode ? "Actualizar Gadget" : "Guardar Gadget"}
        </Text>
      </TouchableOpacity>

      {/* Botón Cancelar */}
      <TouchableOpacity
        style={formStyles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={formStyles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
