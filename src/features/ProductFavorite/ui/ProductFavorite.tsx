import React, { memo, useCallback } from 'react';
import { MdFavoriteBorder } from "react-icons/md";

const ProductFavorite = (props:{ id : number}) => {
    
    const { id } =props;
    const onClick=useCallback(()=>{
        console.log(id);
    },[id]);
    return (
        <MdFavoriteBorder
            onClick={onClick}
            size={20}
        />

    );
};

export default memo(ProductFavorite);