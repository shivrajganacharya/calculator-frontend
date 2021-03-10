import React, {useEffect, useState, useRef} from 'react'
import '../App.css'
import CalculatorService from '../services/CalculatorService'

function Calculator() {

    const [result, setResult] = useState("")
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const clickHandler = (e) => {
        setResult(result + e.target.name)
    }

    const backSpace = () => {
        setResult(result.slice(0, result.length-1))
    }

    const clear = () => {
        setResult("")
    }

    const calculateSqroot = () => {
        try {
            CalculatorService.getSqroot(result).then(
                res => {setResult(res.data)}
            )
        } catch(error) {
            setResult("Error")
        }
    }

    const calculate = () => {
        try {
            CalculatorService.getSqroot(result).then(
                res => {setResult(res.data)}
            )
        } catch(error) {
            setResult("Error")
        }
    }

    return (
        <div className="calc-app">
            <form>
                <input type="text" readOnly={true} value={result} ref={inputRef} />
            </form>
            <div className="keypad">
                <button id="clear" onClick={clear}>AC</button>
                <button id="backspace" onClick={backSpace}>C</button>
                <button name="" onClick={calculateSqroot}>&#8730;</button>
                <button name="7" onClick={clickHandler}>7</button>
                <button name="8" onClick={clickHandler}>8</button>
                <button name="9" onClick={clickHandler}>9</button>
                <button name="factorial" onClick={clickHandler}>!</button>
                <button name="4" onClick={clickHandler}>4</button>
                <button name="5" onClick={clickHandler}>5</button>
                <button name="6" onClick={clickHandler}>6</button>
                <button name="nlog" onClick={clickHandler}>ln</button>
                <button name="1" onClick={clickHandler}>1</button>
                <button name="2" onClick={clickHandler}>2</button>
                <button name="3" onClick={clickHandler}>3</button>
                <button name="power" onClick={clickHandler}>pow</button>
                <button name="0" onClick={clickHandler}>0</button>
                <button name="." onClick={clickHandler}>.</button>
                <button id="result" ></button>
            </div>
        </div>
    )
}

export default Calculator
