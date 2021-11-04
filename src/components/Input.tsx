import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

//STYLES
// npm i --save-dev @types/styled-components

interface IStyles {
    isEmpty: boolean;
}

const Wrapper = styled.div<IStyles>`
border: 1px solid white;
border-radius: 5px;
padding-top: 1em;
max-width: 200px;
margin-inline: auto;
border-color: ${(props) => props.isEmpty ? '' : 'red'};
`;



const Input = () => {

    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <Wrapper style={{ marginTop: '1em' }} isEmpty={value ? true : false}>
            <input id="input1" value={value} onChange={onChange} />
            <p style={{ color: 'white' }}><strong>Value:</strong>{value}</p>
        </Wrapper>
    )
}

export default Input
