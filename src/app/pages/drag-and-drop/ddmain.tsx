import React, { FC } from 'react';
import { useCallback, useState } from 'react'
import { useDrag, DndProvider } from 'react-dnd';
import update from 'immutability-helper'
import { Card } from './card'
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
    CARD: 'card'
};

interface DDbaseProps {
    text: string;
}

export interface Item {
    id: number
    text: string
}

export interface ContainerState {
    cards: Item[]
}

export const Container: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Elemento 1',
            },
            {
                id: 2,
                text: 'Elemento 2',
            },
            {
                id: 3,
                text: 'Elemento 3',
            },
            {
                id: 4,
                text: 'Elemento 4',
            },
            {
                id: 5,
                text: 'Elemento 5',
            },
            {
                id: 6,
                text: 'Elemento 6',
            },
            {
                id: 7,
                text: 'Elemento 7',
            },
        ])

        const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
            setCards((prevCards: Item[]) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex] as Item],
                    ],
                }),
            )
            console.log();
        }, [])

        const renderCard = useCallback(
            (card: { id: number; text: string }, index: number) => {
                return (
                    <Card
                        key={card.id}
                        index={index}
                        id={card.id}
                        text={card.text}
                        moveCard={moveCard}
                    />
                )
            },
            [],
        )

        return (
            <>
                {cards.map((card, i) => renderCard(card, i))}
            </>
        )
    }
}

export const Container2: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Container2: elemento 1',
            },
            {
                id: 2,
                text: 'Container2: elemento 2',
            },
            {
                id: 3,
                text: 'Container2: elemento 3',
            },
            {
                id: 4,
                text: 'Container2: elemento 4',
            },
            {
                id: 5,
                text: 'Container2: elemento 5',
            },
            {
                id: 6,
                text: 'Container2: elemento 6',
            },
            {
                id: 7,
                text: 'Container2: elemento 7',
            },
        ])

        const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
            setCards((prevCards: Item[]) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex] as Item],
                    ],
                }),
            )
            console.log();
        }, [])

        const renderCard = useCallback(
            (card: { id: number; text: string }, index: number) => {
                return (
                    <Card
                        key={card.id}
                        index={index}
                        id={card.id}
                        text={card.text}
                        moveCard={moveCard}
                    />
                )
            },
            [],
        )

        return (
            <>
                {cards.map((card, i) => renderCard(card, i))}
            </>
        )
    }
}

export function DDbaseWrapper() {
    return (
        <div className='border card card-bordered'>
            <DndProvider backend={HTML5Backend}>
                <div className='app-content flex-column-fluid card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700'>
                    <div className="row row-cols-lg-2 g-10">
                        <div className='col draggable-zone'>
                            <div className='row row-cols-lg-3'>
                                <Container />
                            </div>
                        </div>
                        <div className='col'>
                            <Container2 />
                        </div>
                    </div>
                </div>
            </DndProvider>
        </div>
    );
}

export default DDbaseWrapper;