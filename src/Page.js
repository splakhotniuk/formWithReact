import React from 'react';
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'

function Page(props) {
    
    var pages = [<Page1/>, <Page2/>, <Page3/>];
    
    return (
        <div>
         {pages[props.pageNum]}
         </div>
         
    )
}

export default Page;