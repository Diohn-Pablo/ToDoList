import { View, Text, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import Logo from '../../../assets/Imagens/Logo.png';
import ClipBoard from '../../../assets/Imagens/Clipboard.png';
import { Tarefa } from '../../../components/Tarefa';
import { useState } from 'react';


export function Home() {

    const [listaTarefas, setListaTarefas] = useState<{ texto: string; concluida: boolean }[]>([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [countConcluida, setCountConcluida] = useState(0)
    const [countCriada, setCountCriada] = useState(0)




    function handleRemoverTarefa(tarefaNova: {texto: string, concluida: boolean}) {
        Alert.alert('Remover', 'Deseja remover esta tarefa?', [
            {
                text: 'Sim',
                onPress: () => {
                    setListaTarefas(prevState => prevState.filter((tarefa) => tarefa.texto !== tarefaNova.texto))
                    if(tarefaNova.concluida) {
                        setCountConcluida(prevState => (prevState - 1) < 0 ? 0 : prevState -1)

                    } else {

                        setCountCriada(prevState => (prevState - 1) < 0 ? 0 : prevState -1)
                    }
                    
                }
            },

            {
                text: 'Não',
            }
        ])
    }

    function handleAdicionarTarefa() {
        if (novaTarefa.trim() !== '') {
            setListaTarefas(prevState => [...prevState, {texto: novaTarefa, concluida: false}]);
            setNovaTarefa('')
            setCountCriada(prevState => prevState + 1)
        } else {
            Alert.alert('Tarefa inválida', 'Para adicionar digite uma tarefa!')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={Logo} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adiciona uma nova tarefa'
                    placeholderTextColor="gray"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.button} onPress={handleAdicionarTarefa}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerTarefa}>
                <View style={styles.contadorTarefas}>
                    <View style={styles.contador}>
                        <Text style={styles.criadas}>Criadas</Text>
                        <View style={styles.contadorBorder}>
                            <Text style={styles.textContador}>{countCriada}</Text>
                        </View>
                    </View>
                    <View style={styles.contador}>
                        <Text style={styles.concluidas}>Concluidas</Text>
                        <View style={styles.contadorBorder}>
                            <Text style={styles.textContador}>{countConcluida}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <FlatList
                data={listaTarefas}
                keyExtractor={item => item.texto}
                renderItem={({ item }) => (
                    <Tarefa
                        onRemove={() => handleRemoverTarefa(item)}
                        text={item.texto}
                        setCountConcluida={setCountConcluida}
                        setCountCriada={setCountCriada}
                        tarefas={item}
                        setListaTarefas={setListaTarefas}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.containerClipBoard}>
                        <Image source={ClipBoard} />
                        <View>
                            <Text style={styles.clipBoardText}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.clipBoardText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    </View>
                )}
            />




        </View>
    )
}