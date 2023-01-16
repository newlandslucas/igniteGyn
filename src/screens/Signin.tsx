import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { AuthNavigatorROutesProps } from '../routes/auth.routes';
import LogoSvg from '../assets/logo.svg'
import BackGroundImg from '../assets/background.png';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Signin() {

    const navigation = useNavigation<AuthNavigatorROutesProps>();

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1}  px={10}>
                <Image
                    defaultSource={BackGroundImg}
                    source={BackGroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm">Treine a sua mente, e o seu corpo.</Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>
                </Center>

                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Input
                    placeholder='Senha'
                    secureTextEntry

                />

                <Button title="Acessar" />

                <Center mt={24}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda não tem acesso?
                    </Text>
                </Center>

                <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />



            </VStack>
        </ScrollView>

    )
}