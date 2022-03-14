import React from "react";
import { useState } from "react";

import './Calculator.css'

export default function Calculator () {

    const [visorNumber, setvisorNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operation, setOperation] = useState(' ')

    const [clicouMais, setClicouMais] = useState(false)

    function getOperation(e) {

        if (operation != '0' & oldNumber != 0 & visorNumber != 0)  {
            if (operation === '+') {
                var result = parseFloat(oldNumber) + parseFloat(visorNumber)
                setvisorNumber(0)
                setOldNumber(result)
                setOperation(e.target.value)
            } else if (operation === '-') {
                var result = parseFloat(oldNumber) - parseFloat(visorNumber)
                setvisorNumber(0)
                setOldNumber(result)
                setOperation(e.target.value)
            }else if (operation === '*') {
                var result = parseFloat(oldNumber) * parseFloat(visorNumber)
                setvisorNumber(0)
                setOldNumber(result)
                setOperation(e.target.value)
            }else if (operation === '/') {
                var result = parseFloat(oldNumber) / parseFloat(visorNumber)
                setvisorNumber(0)
                setOldNumber(result)
                setOperation(e.target.value)
            }

        }else{ 
            var operator = e.target.value
            setOldNumber(visorNumber)
            setvisorNumber(0)
            console.log(operator);
            setOperation(operator)
        }

        
    }


    function addNumber(e) {
        var numberClique = e.target.value
        if (visorNumber === 0) {
            setvisorNumber(numberClique)
        }else{
            setvisorNumber(visorNumber + numberClique)
        }

    }

    function clear() {
        setvisorNumber(0)
        setOldNumber(0)
        setOperation(' ')
    }

    function porcentage() {
        setvisorNumber(visorNumber/100)
    }

    function calculate() {
        if (operation === '+') {
            var result = parseFloat(oldNumber) + parseFloat(visorNumber)
            setvisorNumber(result)
            setOldNumber(0)
            setOperation(' ')
        }else if (operation === '-') {
            var result = parseFloat(oldNumber) - parseFloat(visorNumber)
            setvisorNumber(result)
            setOldNumber(0)
            setOperation(' ')
        }else if (operation === '*') {
            var result = parseFloat(oldNumber) * parseFloat(visorNumber)
            setvisorNumber(result)
            setOldNumber(0)
            setOperation(' ')
        }else if (operation === '/') {
            var result = parseFloat(oldNumber) / parseFloat(visorNumber)
            setvisorNumber(result)
            setOldNumber(0)
            setOperation(' ')
        }

    }

    return (
        <div className="wrapper">
            <section className="top">
                <h2>Calculator</h2>
               <div className="visor">
                  <div className="left">
                      <p>{oldNumber + ' ' + operation}</p>
                  </div>
                  <div className="right">
                      <p>{visorNumber}</p>
                  </div>
               </div>
            </section>
        
            <div className="ac">
                <button onClick={clear} >AC</button>
            </div>
                
            <button onClick={getOperation} value={'+'}>+</button>
            <button onClick={getOperation} value={'-'}>-</button>
            <button onClick={getOperation} value={'*'}>*</button>
            <button onClick={getOperation} value={'/'}>/</button>
            <button onClick={porcentage}>%</button>
        
        
            <button onClick={addNumber} value={1}>1</button>
            <button onClick={addNumber} value={2}>2</button>
            <button onClick={addNumber} value={3}>3</button>
            <button onClick={addNumber} value={4}>4</button>
            <button onClick={addNumber} value={5}>5</button>
            <button onClick={addNumber} value={6}>6</button>
            <button onClick={addNumber} value={7}>7</button>
            <button onClick={addNumber} value={8}>8</button>
            <button onClick={addNumber} value={9}>9</button>
            <button onClick={addNumber} value={0}>0</button>
        
            <button onClick={addNumber} value={'.'}>.</button>
            <button onClick={calculate}>=</button>
        </div>
    )
}