import styled from 'styled-components';

export const Container = styled.div`

    margin-bottom: 40px;
    
    p {
        font-size: 13px;
        color: #b8b8d4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    label {
        font-zise: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044a;

        }
    }

    button {
        background-color: #25cd89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }

    @media only screen and (max-width: 600px) {
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        width: 60%;

        h1 {
            font-size: 22px
        }

        p {
            font-size: 12px;
        }

        hr {
            margin: 10px 0;
        }

        button {
            background-color: #25cd89;
            color: #FFF;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 30px;
            border: 0;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 15px;

         
            
        
    }    
        
    
`;