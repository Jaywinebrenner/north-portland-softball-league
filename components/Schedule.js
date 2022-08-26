

const Schedule = ({props}) => {
    return (
        <div className="schedule">
            <h2 className='content-title'>{props[0].acf.schedule_title}</h2>
            <div className="schedule__wrapper">
            <div dangerouslySetInnerHTML={{ __html: props[0].acf.schedule_content}}/>
            </div>
        </div>
    )
}

export default Schedule