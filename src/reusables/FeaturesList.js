import DownloadBtn from "./DownloadBtn";

const FeaturesList = ({listTitle, introSentence, features1, features2, btnOn}) => {
    return ( 
        <div className="featuresList">
            <h2 className="listTitle">{listTitle}</h2>
            <p className="listSentence">
                {
                    introSentence

                    &&

                    <p className="intro">{introSentence}</p>
                }
                <div className="lists">
                    <ul className="list1">
                        {
                            features1.map(feature => {
                                return (
                                    <li className="feature">
                                        <span className="tickFeature"><img src="/images/pages/home/check.svg" /></span>
                                        <span className="featureName">{feature}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="list2">
                        {
                            features2.map((feature, count) => {
                                ++count;
                                return (
                                    <li className="feature">
                                        <span className="tickFeature"><img src="/images//pages/home/check.svg" /></span>
                                        <span className="featureName">{feature}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    btnOn

                    &&

                    <DownloadBtn />
                }
            </p>
        </div>
    );
}
 
export default FeaturesList;