import {Bars} from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Bars
                height="80"
                width="80"
                color="#FF8C00"
                ariaLabel="bars-loading"
                visible={true}
            />
        </div>

    );
};

export default Loader;