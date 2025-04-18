import Text from './Text';

const ExerciseSet = ({ number }) => {
    return (
        <div className="flex justify-between items-center gap-4 w-full">
            <Text colour="text-pastelTwo" bold>
                Set {number}
            </Text>
            <div className="flex gap-2 justify-center items-center">
                <input
                    type="text"
                    className="border border-pastelTwo rounded-lg w-12 h-8 p-2 text-primaryBlack"
                ></input>
                <label>
                    <Text smallFont>Reps/time</Text>
                </label>
                <input
                    type="text"
                    className="border border-pastelTwo rounded-lg w-12 h-8 p-2 text-primaryBlack"
                ></input>
                <label>
                    <Text smallFont>Weight</Text>
                </label>
            </div>
        </div>
    );
};

export default ExerciseSet;
