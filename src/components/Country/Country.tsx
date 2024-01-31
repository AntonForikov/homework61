import React from 'react';

interface Props {
    countryName: React.ReactNode,
    onClick: () => void
    clicked: boolean
}

const Country: React.FC<Props> = ({countryName, onClick, clicked}) => {
    return (
        <div onClick={onClick} style={clicked ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>
            <>{countryName}</>
        </div>
    );
};
export default Country;