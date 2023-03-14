import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  name: string;
  onRemove: () => void;
  onSelect: () => void;
  selected: boolean;
};

export function Task({ name, onRemove, onSelect, selected }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1F1E25",
        height: 50,
        borderRadius: 12,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      {selected ? (
        <TouchableOpacity  onPress={onSelect}>
          <View
            style={{
              backgroundColor: "#5E60CE",
              borderRadius: 25,
              height: 24,
              width: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="check" size={18} color="white" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onSelect}>
          <Feather name="circle" size={24} color="#1E6F9F" />
        </TouchableOpacity>
      )}

      <Text style={{ color: "white" }}>{name} </Text>
      <TouchableOpacity onPress={onRemove}>
        <FontAwesome name="trash-o" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
