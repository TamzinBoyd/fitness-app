import { ReactComponent as Search } from '../assets/search.svg';
const IngredientSearch = () => {
    return (
        <label className="relative flex h-12">
            <input
                type="search"
                className="w-full rounded-full border border-pastelOne pl-4 py-2 pr-16"
                placeholder="Search"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center bg-pastelOne w-14 h-12 rounded-full">
                <Search style={{ width: 20, height: 20 }} />
            </div>
        </label>
    );
};

export default IngredientSearch;
