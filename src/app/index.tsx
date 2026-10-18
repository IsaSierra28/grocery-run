import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroceryItemRow from "../components/GroceryItemRow";
import type { GroceryItem } from "../lib/types";

type FormErrors = {
  name?: string;
  quantity?: string;
  category?: string;
};

export default function Index() {
  const [items, setItems] = useState<GroceryItem[]>([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleAdd() {
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Item name is required";
    }

    if (!quantity.trim()) {
      nextErrors.quantity = "Quantity is required";
    } else {
      const quantityNumber = Number(quantity.trim());

      if (!Number.isInteger(quantityNumber) || quantityNumber < 1) {
        nextErrors.quantity = "Enter a whole number greater than 0";
      }
    }

    if (!category.trim()) {
      nextErrors.category = "Category is required";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const newItem: GroceryItem = {
      id: Date.now().toString(),
      name: name.trim(),
      quantity: Number(quantity.trim()),
      category: category.trim(),
    };

    setItems((currentItems) => [newItem, ...currentItems]);

    setName("");
    setQuantity("");
    setCategory("");
    setErrors({});
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroceryItemRow item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Grocery Run</Text>
            <Text style={styles.subtitle}>
              Your shopping list, all in one place.
            </Text>

            <View style={styles.form}>
              <Text style={styles.formTitle}>Add an item</Text>

              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Item name"
                style={styles.input}
              />
              {errors.name && <Text style={styles.error}>{errors.name}</Text>}

              <TextInput
                value={quantity}
                onChangeText={setQuantity}
                placeholder="Quantity"
                keyboardType="number-pad"
                style={styles.input}
              />
              {errors.quantity && (
                <Text style={styles.error}>{errors.quantity}</Text>
              )}

              <TextInput
                value={category}
                onChangeText={setCategory}
                placeholder="Category"
                style={styles.input}
              />
              {errors.category && (
                <Text style={styles.error}>{errors.category}</Text>
              )}

              <Button title="Add item" onPress={handleAdd} />
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Your list is empty</Text>
            <Text style={styles.emptyMessage}>
              Add your first grocery item to get started.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  list: {
    flex: 1,
  },

  listContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 32,
  },

  header: {
    marginBottom: 24,
    gap: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#172554",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
  },

  form: {
    marginTop: 20,
    marginBottom: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    gap: 10,
  },

  formTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#172554",
  },

  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: "#0f172a",
  },

  error: {
    color: "#b91c1c",
    fontSize: 13,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 8,
  },

  emptyTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#334155",
  },

  emptyMessage: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },

  separator: {
    height: 12,
  },
});
