import { StyleSheet, Text, View } from "react-native";
import type { GroceryItem } from "../lib/types";

type GroceryItemRowProps = {
  item: GroceryItem;
};

export default function GroceryItemRow({ item }: GroceryItemRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>

      <Text style={styles.quantity}>Qty: {item.quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 12,
  },

  details: {
    flex: 1,
    gap: 4,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  category: {
    fontSize: 13,
    color: "#666",
  },

  quantity: {
    fontSize: 14,
    fontWeight: "600",
  },
});
