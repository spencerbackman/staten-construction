import React from 'react';
import './scss/prep.scss';

class SitePreparation extends React.Component {
    render() {
        return (
            <div id="prep-page">
                <h1 className="prep-header"> Site Preparation </h1>
                <div className="prep-header-underline"></div>
                <p className="prep-par">
                    Staten Construction will perform the necessary excavations & compaction to put your site on finish grade 
                    as the architect or engineer plans show.
                </p>
            </div>
        )
    }
}

export default SitePreparation;