import React from 'react';
import ReactDOM from 'react-dom';

export async function axeAccessibilityReporter(){
    if(process.env.NODE_ENV === `development`){
        const axe = await require(`@axe-core/react`);
        const config = {
            rules: [{
                id: 'skip-link',
                enabled: true
            }],
            disabledDeduplicate: true
        }
        axe(React, ReactDOM, 1000, config);
    }
}