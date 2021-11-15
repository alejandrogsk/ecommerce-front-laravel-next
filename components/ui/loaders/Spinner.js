const Spinner = ({ height='8', width='8', color='cyan', tone='500' }  ) => {
    return (
        <div className=" flex justify-center items-center bg-transparent">
            <div className={`animate-spin rounded-full h-${height} w-${width} border-b-2 border-${color}-${tone}`}></div>
        </div>
    );
};

export default Spinner;