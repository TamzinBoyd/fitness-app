import ShortcutNav from './ShortcutNav';

const PageContainer = ({ children }) => {
    return (
        <div className="container">
            <div className="innner-container p-4">{children}</div>
            <ShortcutNav />
        </div>
    );
};

export default PageContainer;
