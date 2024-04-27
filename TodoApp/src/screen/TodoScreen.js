import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native'
import React from 'react';
import { IconButton } from 'react-native-paper';


const dummy = [{
    "id": "01",
    "text": "Hello"
},
{
    "id": "02",
    "text": "Hello"
}, {
    "id": "03",
    "text": "Hello"
},
{
    "id": "04",
    "text": "Hello"
},
{
    "id": "05",
    "text": "Hello"
},
{
    "id": "06",
    "text": "Hello"
},
{
    "id": "07",
    "text": "Hello"
}
]

const renderTodo = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: "#FC4100",
            marginTop: 5,
            paddingVertical: 16,
            paddingHorizontal: 6,
            borderRadius: 20,
            flexDirection: "row"
        }}>
            <Text style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                flex: 1
            }}>
                {item.text}
            </Text>
            <IconButton icon="pencil" iconColor='white' />
            <IconButton icon="delete" iconColor='white' />
        </View>
    )
}
const TodoScreen = () => {
    const [Todo, setTodo] = React.useState("");

    const handlerAddTodo = ()=>{
        console.log(Todo);
        setTodo("");
    }
    return (
        <View style={{ marginHorizontal: 16 }}>
            {/* <Text>TodoScreen</Text> */}
            <TextInput
                style={{
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 6,
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    marginBottom: 20
                }}
                placeholder="Add a Task"
                value={Todo}
                onChangeText={(text) => setTodo(text)}
            />
            <Button
                title="Add"
                onPress={()=>handlerAddTodo()}
            />

            <FlatList data={dummy} renderItem={renderTodo}></FlatList>
        </View>
    )
}

export default TodoScreen