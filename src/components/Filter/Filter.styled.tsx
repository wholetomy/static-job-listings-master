import styled from "styled-components";

export const FilterContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-top: -96px;
    margin-bottom: 40px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 30px 0px, rgba(0, 0, 0, 0.1) 0px 18px 18px -18px;
    border-radius: 4px;

    .filtros-div {
        display: flex;
        grid-gap: 16px;
        flex-wrap: wrap;
    }

    .filtro-button-div {
        display: flex;
        align-items: center;
        background: hsl(180, 52%, 96%);
        border-radius: 4px;
        
        .filtro-button {
            padding: 8px;
            color: hsl(180, 29%, 50%);
            font-weight: 600;
        }

        .x-button-div {
            background: hsl(180, 29%, 50%);
            padding: 8px;
            display: flex;
            align-itens: center;
            justify-content: center;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            
            svg {
                rotate: 45deg;
                color: #ffffff;
            }
        }

        .x-button-div:hover {
            background: hsl(180, 14%, 20%);
            transition: .2s all ease-in-out;
            cursor: pointer;
        }
    }

    .clear-button {
        color: hsl(180, 8%, 52%);
        font-weight: 600;
    }

    .clear-button:hover {
        color: hsl(180, 29%, 50%);
        transition: .2s all ease-in-out;
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        width: calc(100% - 32px);
    }
`