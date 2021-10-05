import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = (/* { history } */) => {
    const history = useHistory();
    return (
        <>
            <h5>Page Not Found...</h5>
            <button className="btn btn-warning btn-sm" onClick={() => history.goBack()}>Regresar</button>
        </>
    )
}

export default NotFound;