import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function App() {
    const [nomePersonagem, setNomePersonagem] = useState('');
    const [personagem, setPersonagem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    async function buscarPersonagem() {
        const termo = nomePersonagem.trim();

        if (termo === '') {
            // Sem nome, sem portal. Tenta de novo, morty.
            Alert.alert('Aviso', 'Digite o nome de um personagem.');
            setMensagemErro('Digite o nome de um personagem para abrir o portal.');
            setPersonagem(null);
            return;
        }

        Keyboard.dismiss();
        setPersonagem(null);
        setMensagemErro('');
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/?name=${encodeURIComponent(termo)}`);

            if (!response.ok) {
                if (response.status === 404) {
                    // O multiverso nao trouxe esse personagem desta vez.
                    setMensagemErro('Nenhum personagem foi encontrado neste universo.');
                    Alert.alert('Nao encontrado', 'Nenhum personagem foi encontrado.');
                } else {
                    // A nave deu ruim na conexão com a API.
                    setMensagemErro('Nao foi possivel consultar a API.');
                    Alert.alert('Erro', 'Nao foi possivel consultar a API.');
                }

                return;
            }

            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setPersonagem(data.results[0]);
                setMensagemErro('');
            } else {
                // Portal aberto, mas sem criatura nessa dimensao.
                setMensagemErro('Nenhum personagem foi encontrado neste universo.');
                Alert.alert('Nao encontrado', 'Nenhum personagem foi encontrado.');
            }
        } catch (erro) {
            // Burp... a conexão caiu no meio da viagem interdimensional.
            setMensagemErro('Nao foi possivel conectar. Verifique sua internet.');
            Alert.alert('Erro', 'Nao foi possivel conectar. Verifique sua internet.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.portalGlow} />
            <View style={styles.portalOrb} />

            <Text style={styles.titulo}>Rick and Morty API</Text>
            <Text style={styles.subtitulo}>Busque personagens da serie</Text>

            <TextInput
                style={styles.input}
                placeholder='Ex: Rick, Morty, Summer...'
                value={nomePersonagem}
                onChangeText={setNomePersonagem}
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor='#999'
            />

            <Pressable
                style={({ pressed }) => [
                    styles.botao,
                    pressed && styles.botaoPressionado,
                    loading && styles.botaoDesativado,
                ]}
                onPress={buscarPersonagem}
                disabled={loading}>
                <Text style={styles.botaoTexto}>
                    {loading ? 'BUSCANDO...' : 'BUSCAR PERSONAGEM'}
                </Text>
            </Pressable>

            {loading && (
                <View style={styles.areaLoading}>
                    <ActivityIndicator size='large' color='#B6FF3B' />
                    <Text style={styles.textoLoading}>Buscando personagens...</Text>
                </View>
            )}

            {!loading && mensagemErro !== '' && (
                <View style={styles.erroBox}>
                    <Text style={styles.erroTitulo}>Erro no multiverso</Text>
                    <Text style={styles.erroTexto}>{mensagemErro}</Text>
                </View>
            )}

            {!loading && personagem && (
                <View style={styles.resultado}>
                    <Image source={{ uri: personagem.image }} style={styles.imagemPersonagem} />

                    <Text style={styles.nome}>{personagem.name.toUpperCase()}</Text>

                    <Text style={styles.item}>Espécie: {personagem.species}</Text>
                    <Text style={styles.item}>Status: {personagem.status}</Text>
                    <Text style={styles.item}>Origem: {personagem.origin?.name}</Text>
                </View>
            )}

            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08111f',
        padding: 20,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    portalGlow: {
        position: 'absolute',
        top: -80,
        right: -90,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#7CFF00',
        opacity: 0.12,
    },
    portalOrb: {
        position: 'absolute',
        left: -70,
        bottom: -60,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#35d07f',
        opacity: 0.08,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 10,
        color: '#B6FF3B',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#d6f8df',
        marginBottom: 24,
        fontStyle: 'italic',
    },
    input: {
        backgroundColor: '#0f172a',
        borderWidth: 1,
        borderColor: '#37d27b',
        borderRadius: 14,
        padding: 15,
        fontSize: 16,
        marginBottom: 12,
        color: '#F8FAFC',
        elevation: 4,
    },
    botao: {
        backgroundColor: '#B6FF3B',
        borderRadius: 14,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1f4d2e',
        elevation: 6,
    },
    botaoDesativado: {
        opacity: 0.78,
    },
    botaoPressionado: {
        opacity: 0.9,
        transform: [{ scale: 0.99 }],
    },
    botaoTexto: {
        color: '#08111f',
        fontSize: 16,
        fontWeight: '900',
        letterSpacing: 1,
    },
    areaLoading: {
        marginTop: 24,
        alignItems: 'center',
        backgroundColor: '#0f172a',
        borderWidth: 1,
        borderColor: '#214d2f',
        borderRadius: 14,
        paddingVertical: 16,
    },
    textoLoading: {
        marginTop: 10,
        color: '#B6FF3B',
        fontStyle: 'italic',
        fontWeight: '600',
    },
    erroBox: {
        marginTop: 24,
        backgroundColor: '#1f1021',
        borderWidth: 1,
        borderColor: '#ff6b6b',
        borderRadius: 14,
        padding: 16,
    },
    erroTitulo: {
        color: '#ffb86b',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    erroTexto: {
        color: '#ffd6d6',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 22,
    },
    resultado: {
        marginTop: 28,
        backgroundColor: 'rgba(15, 23, 42, 0.96)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#4cf16a',
        elevation: 8,
    },
    imagemPersonagem: {
        width: 160,
        height: 160,
        borderRadius: 22,
        backgroundColor: '#0f172a',
        marginBottom: 12,
        borderWidth: 3,
        borderColor: '#B6FF3B',
        elevation: 6,
    },
    nome: {
        fontSize: 24,
        fontWeight: '900',
        color: '#F8FAFC',
        marginBottom: 10,
        letterSpacing: 1,
        textAlign: 'center',
    },
    item: {
        fontSize: 16,
        color: '#d6f8df',
        marginBottom: 5,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
});
