import { CardContainer, CardContainerDiv } from './Card.styled'
import { useState, useEffect } from 'react'
import type { CardInterface } from './Card.interface';

interface ArrayProps {
    filtros: string[];
    AtualizarValorDeFiltros: (array: string[]) => void;
}

export default function Card({ AtualizarValorDeFiltros, filtros }: ArrayProps) {
    const [json, setJson] = useState<CardInterface[]>([]);

    useEffect(() => {
        const TrazerInformacoesDosCards = async () => {
            const url = "/data.json";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.error("There is an issue with the fetch response")
                }
                const result = await response.json();
                setJson(result);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        TrazerInformacoesDosCards();
    }, []);

    const AdicionarItemNoArrayDeBotoesClicados = (item: string) => {
        if (!filtros.includes(item)) {
            const arrayAtualizado = [...filtros, item];
            AtualizarValorDeFiltros(arrayAtualizado);
        }
    }

    const cardsFiltrados = json.filter((card) => {
        const informacaoCerta = [card.role, card.level, ...card.languages, ...card.tools];

        const possuiTodosOsFiltros = filtros.every(filtro => 
            informacaoCerta.includes(filtro)
        );

        return possuiTodosOsFiltros;
    });

    return (
        <CardContainer>
            {json.length === 0 ? (
                <div>Carregando dados...</div>
            ) : (
                <>
                    {cardsFiltrados.map((linha) => {
                        const informacaoCerta = [linha.role, linha.level, ...linha.languages, ...linha.tools];
                        return (
                            <CardContainerDiv key={linha.id} $isfeatured={linha.featured}>
                                <div className='card-image-and-info-div'>
                                    <div className='card-image-div'>
                                        <img src={linha.logo} />
                                    </div>
                                    <div className='card-info-div'>
                                        <div>
                                            <h6>{linha.company}</h6>
                                            {linha.new && <span className='new'>NEW!</span>}
                                            {linha.featured && <span className='featured'>FEATURED</span>}
                                        </div>
                                        <div>
                                            <h4>{linha.position}</h4>
                                        </div>
                                        <div>
                                            <span>{linha.postedAt}</span>
                                            <span>•</span>
                                            <span>{linha.contract}</span>
                                            <span>•</span>
                                            <span>{linha.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-tags-div'>
                                    {informacaoCerta.map((item, index) => (
                                        <button key={index} onClick={() => AdicionarItemNoArrayDeBotoesClicados(item)}>{item}</button>
                                    ))}
                                </div>
                            </CardContainerDiv>
                        )
                    })}
                </>
            )}

        </CardContainer>
    )
}
