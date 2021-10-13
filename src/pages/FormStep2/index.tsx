import { useHistory } from 'react-router-dom';

import * as C from './styles';

import { Theme } from '../../components/Theme';
import {SelectOption} from '../../components/SelectOption'

import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, []);


    const handleNextStep= () => {
        if(state.name !== '') {
            history.push('/step2')
        } else {
            alert('Preencha os dados!')
        }
    };

    

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                 <SelectOption
                        title="Sou iniciante"
                        description="Comecei a programa a menos de dois anos."
                        icon="🥳"
                 />

                 <SelectOption
                        title="Sou programador"
                        description="Já programo a dois anos ou mais."
                        icon="😎"
                 />

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}