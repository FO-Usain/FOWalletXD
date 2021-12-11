const SlidingContents = ({contents}) => {


    const adjust = () => {

        console.log("ran");

        let el = document.querySelector("#slidingContents");
        let el2 = document.querySelector("#slidingContent");
        
        const width = el2.getBoundingClientRect().width;
        console.log(width);

        el.style.marginLeft = el.style.marginLeft + width; 
    }

    return (
        <div id="slidingContents" className="slidingContents">
            {
                contents.map(content => {
                    return (
                        <div  id={`slidingContent${content.id}`} className="slidingContent" key={content.id} >
                            <div className="contentPicFrame"><img src={content.imgSrc} onClick={() => adjust()} /></div>
                            <h2 className="contentTitle">{content.title}</h2>
                            <p className="contentMsg">{content.msg}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
 
export default SlidingContents;