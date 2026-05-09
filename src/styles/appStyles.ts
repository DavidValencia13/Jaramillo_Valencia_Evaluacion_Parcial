import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#0D1B2A",
  secondary: "#1B4332",
  accent: "#00B4D8",
  accentGreen: "#06D6A0",
  background: "#0D1B2A",
  cardBg: "#1E2D3D",
  white: "#FFFFFF",
  textDark: "#FFFFFF",
  textMedium: "#A8B2C1",
  textLight: "#6B7A8D",
  border: "#2A3F55",
  inputBg: "#162030",
  danger: "#EF233C",
  dangerBg: "#2D1B1E",
  success: "#06D6A0",
  shadow: "#000000",
};

export const SIZES = {
  paddingSmall: 8,
  paddingMedium: 16,
  paddingLarge: 24,
  borderRadius: 12,
  fontSmall: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontTitle: 22,
  fabSize: 60,
};

// LIST SCREEN STYLES

export const listStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    padding: SIZES.paddingLarge,
    paddingTop: 50,
    paddingBottom: SIZES.paddingMedium,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.white,
    marginTop: 4,
  },
  headerSubtitle: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  badge: {
    backgroundColor: COLORS.accent,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  badgeNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.white,
  },
  badgeLabel: {
    fontSize: 10,
    color: COLORS.white,
    textTransform: "uppercase",
  },
  sectionLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingHorizontal: SIZES.paddingLarge,
    marginBottom: SIZES.paddingSmall,
  },
  list: { padding: SIZES.paddingMedium },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.inputBg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardIcon: { fontSize: 26 },
  cardInfo: { flex: 1 },
  cardName: {
    fontSize: SIZES.fontMedium,
    fontWeight: "700",
    color: COLORS.white,
  },
  cardBrand: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  cardCategory: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    marginTop: 6,
  },
  cardCategoryText: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  cardRight: { alignItems: "flex-end" },
  cardPrice: {
    fontSize: SIZES.fontMedium,
    fontWeight: "800",
    color: COLORS.accentGreen,
  },
  cardYear: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textMedium,
    fontSize: SIZES.fontMedium,
  },
  fabContainer: {
    position: "absolute",
    bottom: SIZES.paddingLarge,
    right: SIZES.paddingLarge,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  fabLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: "dashed",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  fab: {
    width: SIZES.fabSize,
    height: SIZES.fabSize,
    borderRadius: SIZES.fabSize / 2,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
  },
});

// DETAIL SCREEN STYLES

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.paddingLarge,
  },
  hero: {
    alignItems: "center",
    marginBottom: SIZES.paddingLarge,
  },
  heroIconBox: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: COLORS.cardBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  heroIcon: { fontSize: 56 },
  heroCategoryBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  heroCategoryText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  sectionLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: SIZES.paddingSmall,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
    marginBottom: 12,
  },
  field: { marginBottom: SIZES.paddingMedium },
  fieldRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  fieldHalf: { flex: 1 },
  label: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  value: {
    fontSize: SIZES.fontLarge,
    color: COLORS.white,
    fontWeight: "600",
  },
  priceCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.accentGreen,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.accentGreen,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: SIZES.paddingMedium,
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: COLORS.accent,
    padding: 14,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
  },
  editButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: COLORS.dangerBg,
    padding: 14,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.danger,
  },
  deleteButtonText: {
    color: COLORS.danger,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textMedium,
  },
});

// FORM SCREEN STYLES

export const formStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: SIZES.paddingLarge },
  hero: {
    marginBottom: SIZES.paddingLarge,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.white,
  },
  heroSubtitle: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 4,
  },
  label: {
    fontSize: SIZES.fontSmall,
    fontWeight: "600",
    color: COLORS.textMedium,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.borderRadius,
    padding: 12,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
    color: COLORS.white,
  },
  rowInputs: {
    flexDirection: "row",
    gap: 12,
  },
  rowInput: { flex: 1 },
  hint: {
    fontSize: 11,
    color: COLORS.textLight,
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: COLORS.accent,
    padding: 14,
    borderRadius: SIZES.borderRadius,
    marginTop: SIZES.paddingLarge,
    alignItems: "center",
  },
  saveButtonDisabled: { backgroundColor: COLORS.textLight },
  saveButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 14,
    borderRadius: SIZES.borderRadius,
    marginTop: SIZES.paddingSmall,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cancelButtonText: {
    color: COLORS.textMedium,
    fontSize: SIZES.fontMedium,
  },
});

// CATEGORY STYLES
export const categoryStyles: Record<string, { color: string; bg: string; emoji: string }> = {
  laptop:     { color: "#00B4D8", bg: "#0A2540", emoji: "💻" },
  phone:      { color: "#A855F7", bg: "#1E0A40", emoji: "📱" },
  tablet:     { color: "#F59E0B", bg: "#2D1F00", emoji: "📟" },
  camera:     { color: "#EF4444", bg: "#2D0A0A", emoji: "📷" },
  headphones: { color: "#06D6A0", bg: "#002D20", emoji: "🎧" },
  default:    { color: "#6B7A8D", bg: "#1E2D3D", emoji: "🔧" },
};