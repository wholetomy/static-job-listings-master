import styled from "styled-components";

interface isFeaturedProps {
    $isfeatured: boolean;
}

export const CardContainerDiv = styled.div<isFeaturedProps>`
    background: #ffffff;
    padding: 24px;
    border-left: ${props => props.$isfeatured ? '5px solid hsl(180, 29%, 50%);' : 'unset;'};
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 30px 0px, rgba(0, 0, 0, 0.1) 0px 18px 18px -18px;

    .card-image-and-info-div {
        display: flex;
        align-items: center;
        grid-gap: 24px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: start;
        grid-gap: 16px;
        position: relative;
        padding-top: 38px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    grid-gap: 24px;

    .card-info-div {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;

        div:nth-child(1) {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            grid-gap: 8px;

            h6 {
                color: hsl(180, 29%, 50%);
                font-size: 15px;
            }

            .new {
                color: #ffffff;
                border-radius: 16px;
                font-weight: 500;
                background: hsl(180, 29%, 50%);
                font-size: 12px;
                padding: 6px;
                padding-top: 7px;
            }

            .featured {
                color: #ffffff;
                border-radius: 16px;
                font-weight: 500;
                background: hsl(180, 14%, 20%);
                font-size: 12px;
                padding: 6px;
                padding-top: 7px;
            }
        }

        div:nth-child(2) {
            color: hsl(180, 14%, 20%);
            transition: .2s all ease-in-out;
            font-size: 17px;
        }

        div:nth-child(2):hover {
            color: hsl(180, 29%, 50%);
            cursor: pointer;
        }

        div:nth-child(3) {
            color: hsl(180, 8%, 52%);
            display: flex;
            flex-wrap: wrap;
            grid-gap: 8px;
            font-weight: 400;
        }
    }

    .card-tags-div {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 8px;

        button {
            background: hsl(180, 52%, 96%);
            color: hsl(180, 29%, 50%);
            transition: .2s all ease-in-out;
            border: unset;
            outline: unset;
            padding: 8px;
            font-weight: 600;
            cursor: pointer;
            border-radius: 4px;
        }

        button:hover {
            color: #ffffff;
            background: hsl(180, 29%, 50%);
        }
    }

    @media (max-width: 600px) {
        grid-gap: 48px;

        .card-container {
            flex-direction: column;
            align-items: start;
            grid-gap: 16px;
            position: relative;
            padding-top: 38px;
        }

        .card-tags-div {
            border-top: 1px solid hsl(180, 8%, 52%);
            padding-top: 16px;
            width: 100%;
        }

        .card-image-div {
            position: absolute;
            top: -30px;
            left: 16px;

            img {
                width: 56px;
            }
        }
    }
`