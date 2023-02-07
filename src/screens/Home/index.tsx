import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {/* input e button */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 36,
            marginBottom: 42,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#1F1E25",
              height: 56,
              borderRadius: 5,
              color: "#FFF",
              padding: 16,
              fontSize: 16,
              flex: 1,
              marginRight: 10,
            }}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity
            style={{
              width: 56,
              height: 56,
              borderRadius: 5,
              backgroundColor: "#1E6F9F",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 24, color: "#fff" }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Create - Fim */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#6B6B6B",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#4EA8DE", fontSize: 14 }}>Criadas</Text>
            <View
              style={{
                backgroundColor: "#6B6B6B",
                borderRadius: 12,
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "400" }}>20</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#8284FA", fontSize: 14 }}>Concluidas</Text>
            <View
              style={{
                backgroundColor: "#6B6B6B",
                borderRadius: 12,
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "400" }}>20</Text>
            </View>
          </View>
        </View>
              <View style={{alignItems:'center', marginTop:50}}>
              <Image style={{marginBottom:20}}
              source={require("../../assets/Clipboard.png")} />
        <Text style={{ color: "#808080", textAlign: "center", fontSize: 16, fontWeight:'bold' }}>
          Adicione participantes a sua lista de presença
        </Text>
        <Text style={{ color: "#808080", textAlign: "center", fontSize: 16 }}>
            Crie tarefas e organize seus itens a fazer
        </Text>
              </View>
      </View>
    </View>
  );
}
