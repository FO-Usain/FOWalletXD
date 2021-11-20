//This file contains the representation the of template for previewing the mobile-apps of the site
//Title, Body and Picture are included
import { Link } from "react-router-dom";

const AppPreview = ({appPreview, picLeft}) => {
    let anchors = appPreview.anchors;

    return !picLeft ? (            
        <div className={`appPreview ${appPreview.className}`}>
            <span className="previewText">
                <h2 className="previewTitle">{appPreview.title}</h2>
                <p className="previewBody">{appPreview.body}</p>
                <div className="previewBtns">
                    {
                        anchors.map(anchor => {
                            return (
                            <Link className={`previewBtn ${anchor.className ? anchor.className : ""}`} to={anchor.href}>
                                    {
                                        anchor.name

                                        &&

                                        anchor.name
                                    }
                                    {
                                        anchor.imgSrc

                                        &&

                                        <span className="aImgageFrame"><img src={anchor.imgSrc} /></span>
                                    }
                                </Link>
                            );
                        })
                    }
                </div>
            </span>
            <span className="previewPic"><img src={appPreview.picSrc} /></span>
        </div>
    ) : (            
        <div className={`appPreview ${appPreview.className}`}>
            <span className="previewPic previewPicLeft"><img src={appPreview.picSrc} /></span>
            <span className="previewText">
                <h2 className="previewTitle">{appPreview.title}</h2>
                <p className="previewBody">{appPreview.body}</p>
                {
                    anchors.map(anchor => {
                        return (
                           <Link className={`previewBtn ${anchor.className ? anchor.className : ""}`} to={anchor.href}>
                                {
                                    anchor.name

                                    &&

                                    anchor.name
                                }
                                {
                                    anchor.imgSrc

                                    &&

                                    <span className="aImgageFrame"><img src={anchor.imgSrc} /></span>
                                }
                            </Link>
                        );
                    })
                }
            </span>
        </div>
    );
}
 
export default AppPreview;