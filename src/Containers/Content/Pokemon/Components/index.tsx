import React from "react";

export default React.memo(({ mockData }: any) => {
    console.log("POKEMON data", mockData.default);

    return (
        <div>Pokemon Component Works</div>
    )
});