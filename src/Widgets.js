import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, substitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{substitle}</p>
            </div>
        </div>
    );
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Moise Gui is back", "Top news - 9038 readers")}
            {newsArticle("Coranavirus", "Top news - 9038 readers")}
            {newsArticle("Coranavirus", "Top news - 9038 readers")}
            {newsArticle("Coranavirus", "Top news - 9038 readers")}
            {newsArticle("Coranavirus", "Top news - 9038 readers")}
            {newsArticle("Coranavirus", "Top news - 9038 readers")}
        </div>
    )
}

export default Widgets
