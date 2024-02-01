import React from 'react';

interface Props {
    countryName: React.ReactNode,
    onClick: () => void
    isSelected: boolean
}

const Country: React.FC<Props> = React.memo(({countryName, onClick, isSelected}) => {
    return (
        <div onClick={onClick} style={isSelected ? {backgroundColor: '#FF8C00'} : {backgroundColor: 'white'}}>
            <span style={{cursor: "pointer"}}>{countryName}</span>
        </div>
    );
}, (prev, next) => prev.isSelected === next.isSelected);
export default Country;