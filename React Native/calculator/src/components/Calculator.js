import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'
import Display from './Display';
import Botao from './botao';

function Calculator() {
    
    const [operacao, setOperacao] = useState("");
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [display, setDisplay] = useState(0);
    
    
    const addNumero = (int) => {
        if (numero1 == 0) {
            setNumero1(int)
            return
        }
        setNumero2(int)
    }

    const addOperacao = (oper) => {
        setOperacao(oper);
        setNumero1(0);
        setNumero2(0);
        setDisplay(oper);
    }

    const setResultado = () => {
        setNumero1;
        setNumero2
        let resultado = 0
        if (operacao == "+") resultado = parseInt(numero1[0]) + parseInt(numero2[1]);
        if (operacao == "-") resultado = parseInt(numero1[0]) - parseInt(numero2[1]);
        if (operacao == "*") resultado = parseInt(numero1[0]) * parseInt(numero2[1]);
        if (operacao == "/") resultado = parseInt(numero1[0]) / parseInt(numero2[1]);
        
        setDisplay(resultado);
    }

    const reset = () => {
        setNumero1(0);
        setNumero2(0);
        setOperacao("");
        setDisplay(0);
    }
    

    return (
        <View style={[styles.Container]}>
            <Text>Calculadora</Text>
            <Display value={display}/>
            <View style={[styles.Buttons]}>
                <Botao label="AC" funcao={reset}/>
                <Botao label="1" funcao={addNumero}/>
                <Botao label="2" funcao={addNumero}/>
                <Botao label="3" funcao={addNumero}/>
                <Botao label="4" funcao={addNumero}/>
                <Botao label="5" funcao={addNumero}/>
                <Botao label="6" funcao={addNumero}/>
                <Botao label="7" funcao={addNumero}/>
                <Botao label="8" funcao={addNumero}/>
                <Botao label="9" funcao={addNumero}/>
                <Botao label="+" funcao={addOperacao}/>
                <Botao label="-" funcao={addOperacao}/>
                <Botao label="*" funcao={addOperacao}/>
                <Botao label="/" funcao={addOperacao}/>
                <Botao label="=" funcao={setResultado}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appButtonText: {
        flexDirection: 'row',
        width: '100%',
    },
    texto: {
        fontSize: 60
    }
})

export default Calculator