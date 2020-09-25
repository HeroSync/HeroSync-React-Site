import React from 'react';
import Header from '../Header';
import { withRouter } from 'react-router';

const PageWrapper = (props) => {
    const HeaderWithRouter = withRouter(Header);

    return (
        <>
            <header className={props.headerClassName}>
                <HeaderWithRouter />
            </header>
            <main className={props.mainClassName}>
                {props.children}
            </main>
        </>
    );
}

export default PageWrapper;
