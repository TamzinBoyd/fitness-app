import { Link } from 'react-router-dom';
import Text from './Text';

const WorkoutCard = ({ phase, day, url }) => {
    return (
        <Link
            to={url}
            className="WorkoutCard flex flex-wrap justify-center items-center px-4 py-8 bg-pastelTwo rounded-xl shadow-md hover:bg-primaryBlue"
        >
            <Text bold textAlign="text-center">
                {phase}
            </Text>
            <Text bold colour="text-primaryWhite" textAlign="text-center">
                {day}
            </Text>
        </Link>
    );
};

export default WorkoutCard;
