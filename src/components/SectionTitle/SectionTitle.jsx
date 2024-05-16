

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="italic text-xl mb-2 text-[#D99904]">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;