import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Dumbell } from '../assets/dumbell.svg';
import { ReactComponent as Scales } from '../assets/scales.svg';
import CircleLink from './CircleLink';

const ShortcutNav = () => {
    return (
        <nav className="shortcutMenu bg-primaryBlue z-10 sticky absolute bottom-0">
            <ul className="flex px-8 py-4 justify-between">
                <li>
                    <CircleLink bgColour="bg-pastelOne" url="/">
                        <Home style={{ width: 50, height: 50 }} />
                    </CircleLink>
                </li>
                <li>
                    <CircleLink bgColour="bg-pastelTwo" url="/workouts">
                        <Dumbell style={{ width: 50, height: 50 }} />
                    </CircleLink>
                </li>
                <li>
                    <CircleLink bgColour="bg-pastelFour" url="/weights">
                        <Scales style={{ width: 50, height: 50 }} />
                    </CircleLink>
                </li>
            </ul>
        </nav>
    );
};

export default ShortcutNav;
