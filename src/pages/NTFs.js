import AppPreview from "../reusables/AppPreview";
import CoinsList from "../reusables/CoinsList";
import Steps from "../reusables/Steps";

const NTFs = () => {

  let appPreview = {
    className: "blackBackPreview",
    title: "All NFTs in One Place with Trust Wallet",
    body: "Trust Wallet offers you an easy way to keep all your unique ERC721 and ERC1155 crypto NFTs and game assets in one place. Love your crypto NFTs? We love them too. Store them all in your Trust Wallet.",
    anchors: [
      {
          id: 1,
          name: "Download Now",
          imgSrc: null,
          href: "",
          className: "whiteDownloadNow",
      },
    ],
    picSrc: "/images/pages/nfts/collectibles_hero.png",
  }

  let appPreviews = [
    {
        id: 1,
        className: "whiteBack",
        title: "What are NFTs?",
        list: null,
        body: "NFTs are non-fungible digital assets mostly referred to as ERC721, ERC1155 on Ethereum, BEP721 and BEP1155 as NFTs on BSC that are either unique or limited in quantity. Think of them like you would a famous painting by Picasso or the video game Gamma Attack for the Atari 2600. NFTs are like vintage baseball cards but only in a digital form that is unique, non-fungible and secured using cryptography. Usually, crypto collectibles are represented as real-life objects such as pets or avatars. Some crypto collectibles are computer generated works of art. Each token has variations in specific attributes and there are limits to the number of tokens that can be generated.",
        anchors: [],
        picSrc: "/images/pages/nfts/collectibles_preview2.png",
    },
    {
        id: 2,
        className: "whiteBack",
        title: "Where do I store NFTs?",
        list: null,
        body: "Trust Wallet provides an easy way to store and access all your crypto collectibles on Ethereum and BSC with peace of mind and security. Crypto collectibles are secured on the blockchain and associated with a public address. Over the last few years, we have seen various versions of crypto collectibles such as CryptoPunks, CryptoKitties, Decentraland, Axies and more which have become very popular.",
        anchors: [],
        picSrc: "/images/pages/nfts/collectibles_preview.png",
    },
];
  return (
    <div className="nfts">
      <div className="appPreviewBackground">
        <AppPreview appPreview={appPreview} picLeft={false} />
      </div>
      <div className="previewDisplay">
        {
          appPreviews.map(preview => {
            return (
              <AppPreview appPreview={preview} picLeft={(preview.id % 2 != 0) ? true : false  } />
            );
          })
        }
      </div>
      <div className="previewDisplay mobilePreviewDisplay">
        {
          appPreviews.map(preview => {
            return (
              <AppPreview appPreview={preview} picLeft={false} />
            );
          })
        }
      </div>
      <div className="supportedNFTs">
        <h2>Supported NFTs on these blockchains</h2>
        <CoinsList serverURL="http://localhost:4000/supported" />
      </div>
      <Steps />
    </div>
  );
}
 
export default NTFs;