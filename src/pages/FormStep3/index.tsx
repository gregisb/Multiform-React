import { Link, useHistory } from 'react-router-dom';

import * as C from './styles';

import { Theme } from '../../components/Theme';

import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/')
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
      }
    }, []);


    const handleNextStep= () => {
        if(state.email != '' && state.github != '') {
            console.log(state)
        } else {
            alert('Preencha os dados!')
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal, {state.name}! Onde te encontramos?</h1>
                <p>Preencha os campos abaixo para que possamos entrar em contato.</p>

                <hr />

                <label>
                    Qual é o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual é o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>

                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    );
}