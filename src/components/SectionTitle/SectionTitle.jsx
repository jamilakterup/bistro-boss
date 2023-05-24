
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-12">
            <p className="text-yellow-500 my-3">{subHeading}</p>
            <h3 className="text-5xl uppercase border-y-4 py-4 w-4/12 mx-auto">{heading}</h3>
        </div>
    );
};

export default SectionTitle;