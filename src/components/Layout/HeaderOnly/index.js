import Header from '~/components/Layout/components/Header';
import { useRef } from 'react';
function HeaderOnly({ children }) {
    
    return (

        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
