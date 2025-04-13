import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import CircleLink from '../components/CircleLink';
import { ReactComponent as KnifeFork } from '../assets/knifeFork.svg';
import { ReactComponent as Dumbell } from '../assets/dumbell.svg';
import { ReactComponent as Weights } from '../assets/weights.svg';
import { ReactComponent as Scales } from '../assets/scales.svg';

const ComponentTestPage = () => {
    return (
        <div className="bg-red-100">
            <Button ariaLabel="home button" text="primary" />
            <Button
                ariaLabel="home button"
                text="secondary"
                type="secondary"
                fullWdith
            />
            <Title title="Title" textColour="text-red-500" hierarchy="h3" />
            <Title title="Title" hierarchy="h3" />
            <CircleLink bgColour="bg-pastelOne" url="/meals">
                <KnifeFork style={{ width: 100, height: 100 }} />
            </CircleLink>
            <CircleLink bgColour="bg-pastelTwo" url="/workouts">
                <Dumbell style={{ width: 100, height: 100 }} />
            </CircleLink>
            <CircleLink bgColour="bg-pastelThree" url="/measures">
                <Weights style={{ width: 100, height: 100 }} />
            </CircleLink>
            <CircleLink bgColour="bg-pastelFour" url="/weights">
                <Scales style={{ width: 100, height: 100 }} />
            </CircleLink>
        </div>
    );
};

export default ComponentTestPage;
