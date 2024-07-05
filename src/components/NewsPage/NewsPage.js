import MoreShops             from '../MoreShops/News';
import tr                    from '../../assets/images/Screenshot 2024-01-25 at 12.52.12.png';
import Lennys                from '../../assets/images/Screenshot 2024-01-25 at 15.08.33.png';
import TowerRecords          from '../../assets/images/towerRecords.png';
import lennys                from '../../assets/images/lennys.jpg';
import hymies                from '../../assets/images/Screenshot 2024-01-25 at 15.17.34.png';
import hym                   from '../../assets/images/hym.jpg';
import myVinyl               from '../../assets/images/Screenshot 2024-01-25 at 15.31.14.png';
import myV                   from '../../assets/images/Screenshot 2024-01-25 at 15.33.38.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon      from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon   from '@mui/icons-material/ArrowForwardIos';
import { Link }              from 'react-router-dom';

import './index.css';

const vinylShops = [
  {
    userName: 'towerrecordsdublin',
    location: 'Dublin',
    info: 'Tower Records continues to define the blueprint for what a music experience should be, bridging innovation, tradition & experimentation. A space for unique individuals with a passion for sound to connect, discover, and consume music. The original source for curation and expertise.',
    mainImg: tr,
    userImg: TowerRecords,
    caption: "New in stock",
    likes: 73,
    url: 'https://www.instagram.com/towerrecordsdublin/',
  },
  {
    userName: 'lennysmusicstore',
    location: 'Vienna',
    info: "Lenny's music store is a family business. It has a great collection of records. It may be in the middle of nowhere but it's worth the trip. Oh, by the way, the name Lenny's Music Store comes from my oldest son Lenny. It just sounds better than Thomas' Music Store, I thought. Meanwhile, the boss is 12 years old and can also be found there from time to time",
    mainImg: Lennys,
    userImg: lennys,
    caption: "For sale",
    likes: 47,
    url: 'https://www.instagram.com/lennysmusicstore/',  },
  {
    userName: 'hymiespls',
    location: "Hymie's records",
    info: 'This Longfellow neighborhood gem is packed with new and (largely quite affordable) used vintage records in every genre for crate diggers looking for a deal. At this storied Minneapolis record store, you can test out used records on a quality stereo system, sell from your personal collection, catch live events and album releases, and explore the handy “new arrivals” bin for easy browsing.',
    mainImg: hymies,
    userImg: hym,
    caption: "New in stock",
    likes: 117,
    url: 'https://www.instagram.com/hymiesmpls/',
  },
  {
    userName: 'myVinyl',
    location: 'Plovdiv',
    info: 'My Vinyl is a small business here in the heart of Plovdiv. The shop has a cool indie vibe and the music is always great. You can buy some great vinyls from the many work shops they open during many events and concerts. You can visit the shop not only to buy records, but to have some nice conversations about music, art, new artists and ect.',
    mainImg: myVinyl,
    userImg: myV,
    caption: "New store here in Plovdiv",
    likes: 23,
    url: 'https://www.instagram.com/myvinylstore/',
  },
];

const NewsPage = () => {
  return (
    <div className="news-page">
      <Link to="/">
        <KeyboardBackspaceIcon
          className='button-back'
          sx={{
            width: '90px',
            height: '50px',
            color: 'white',
          }}
        />
      </Link>
      <div className="news-page-content">
        <h1>Must visit record stores around Europe</h1>
        <div className="news-box-content">
          <ArrowBackIosIcon className='arrow' style={{color: 'white', width: '45px', height: '45px'}} />
          <div className="news-box">
            {
              vinylShops.map((e) => <MoreShops vinyls={e} />
              )
            }
          </div>
          <ArrowForwardIosIcon 
            className='arrow'
            sx={{
              width: '45px',
              height: '45px',
              color: 'white',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsPage;
