import { useHistory, Link } from 'react-router-dom';

import * as C from './styles';

import { Theme } from '../../components/Theme';
import {SelectOption} from '../../components/SelectOption'

import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {

            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);


    const handleNextStep= () => {
        if(state.name !== '') {
            history.push('/step2')
        } else {
            alert('Preencha os dados!')
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual opção melhor descreve o seu nível?</h1>
                <p>Escolha a opção que melhor condiz com seu estado profissional atualmente.</p>

                <hr />

                 <SelectOption
                        title="Sou iniciante"
                        description="Comecei a programa a menos de dois anos."
                        icon="🥳"
                        selected={state.level === 0}
                        onClick={() => setLevel(0)}
                 />

                 <SelectOption
                        title="Sou programador"
                        description="Já programo a dois anos ou mais."
                        icon="😎"
                        selected={state.level === 1}
                        onClick={() => setLevel(1)}


                 />
                <Link to='/' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}