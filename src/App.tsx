import './styles/theme.css';
import './styles/global.css';
import { TimerIcon, HouseIcon, RotateCcwIcon, SunIcon, MoonIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App(){
    return (
        <>
            <div className="container-fluid">
                <Heading>Heading</Heading>
                <Container><TimerIcon /></Container>
                <Container><HouseIcon /></Container>
                <Container><RotateCcwIcon /></Container>
                <Container><SunIcon /></Container>
                <Container><MoonIcon /></Container>
            </div>    
        </>
    );
}
