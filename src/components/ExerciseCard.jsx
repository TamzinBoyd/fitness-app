import ExerciseSet from './ExerciseSet';
import Text from './Text';
const ExerciseCard = ({ name, reps, description }) => {
    return (
        <div className="border-b border-pastelTwo pt-2">
            <div className="flex justify-between">
                <Text colour="text-pastelTwo" bold>
                    {name}
                </Text>
                <Text colour="text-pastelTwo" bold textAlign="text-right">
                    {reps}
                </Text>
            </div>
            <Text>{description}</Text>
            <div className="flex flex-wrap gap-2 py-6">
                <ExerciseSet number="1" />
                <ExerciseSet number="2" />
                <ExerciseSet number="3" />
            </div>
        </div>
    );
};

export default ExerciseCard;
