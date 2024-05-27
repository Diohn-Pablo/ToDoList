import { View, Text, Image, Pressable, Alert } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { useState } from 'react';


type Props = {
    onRemove: () => void;
    text: string;
    setCountConcluida: React.Dispatch<React.SetStateAction<number>>;
    setCountCriada: React.Dispatch<React.SetStateAction<number>>;
    setListaTarefas: React.Dispatch<React.SetStateAction<{ texto: string; concluida: boolean; }[]>>;
    tarefas: {texto: string; concluida: boolean;};
}

export function Tarefa({ onRemove, text, setCountConcluida, setCountCriada, setListaTarefas, tarefas }: Props) {
    const [concluida, setConcluida] = useState(tarefas.concluida);

    function handleConcluir() {
        if (concluida) {
            Alert.alert('Desmarcar', 'Deseja desmarcar essa tarefa?', [
                {
                    text: 'Sim',
                    onPress: () => {
                        setConcluida(false)
                        setCountConcluida(prevState => prevState - 1);
                        setCountCriada(prevState => prevState + 1);
                    }
                },

                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
        } else {
            Alert.alert('Concluir', 'Marcar como concluída?', [
                {
                    text: 'Sim',
                    onPress: () => {
                        setConcluida(true)
                        setCountConcluida(prevState => prevState + 1)
                        setCountCriada(prevState => prevState - 1)
                        setListaTarefas(prevState => prevState.map(tarefa => {
                            if (tarefa.texto === text) {
                                return { ...tarefa, concluida: true };
                            }
                            return tarefa;
                        }));
                    }
                },

                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerTarefa}>
                <Pressable onPress={handleConcluir}>
                    {
                        (concluida) ?
                            <AntDesign name="checkcircle" size={24} color="#5e60ce" />
                            :
                            <Entypo name="circle" size={24} color="#4ea8de" />
                    }
                </Pressable>
                <Text style={styles.tarefaText}>{text}</Text>
                <Pressable onPress={onRemove}>
                    <FontAwesome name="trash-o" size={24} color="grey" />
                </Pressable>
            </View>
        </View>
    )
}