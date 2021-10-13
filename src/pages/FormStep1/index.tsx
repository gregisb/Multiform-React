import * as C from './styles';

import { Theme } from '../../components/Theme'

export const FormStep1 = () => {

    const handleNextStep= () => {
        
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus={true}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}