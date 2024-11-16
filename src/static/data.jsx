import { AiFillHome, AiOutlineBulb, AiOutlineClockCircle, AiOutlinePlaySquare } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { HiOutlineFire, HiSignal } from "react-icons/hi2";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineAccountCircle, MdOutlineLocalMovies, MdOutlineSettings, MdOutlineSubscriptions, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";


export const SideBarItems = {
  Top: [
    { icon: <AiFillHome size={21} />, name: "Home" },
    { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
  ],
  Middle: [
    { icon: <MdVideoLibrary size={21} />, name: "Library" },
    { icon: <VscHistory size={21} />, name: "History" },
    { icon: <AiOutlinePlaySquare size={21} />, name: "Your videos" },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later" },
    { icon: <BiLike size={21} />, name: "Liked videos" },
  ],
  Explore: [
    { icon: <HiOutlineFire size={21} />, name: "Trending" },
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music" },
    { icon: <MdOutlineLocalMovies size={21} />, name: "Movies" },
    { icon: <HiSignal size={21} />, name: "Live" },
    { icon: <SiYoutubegaming size={21} />, name: "Gaming" },
    { icon: <BsNewspaper size={21} />, name: "News" },
    { icon: <CiTrophy size={23} />, name: "Sports" },
    { icon: <AiOutlineBulb size={21} />, name: "Learning" },
    { icon: <GiDress size={21} />, name: "Fasion & beauty" },
  ],
};

export const SideBarShort =[
  {
    icon: <AiFillHome size={26} />,
    name: "Home",
  },
  {
    icon: <MdSubscriptions size={26} />,
    name: "Subscriptions",
  },
  {
    icon: <MdOutlineAccountCircle size={26} />,
    name: "You",
  },
  {
    icon: <MdOutlineSettings size={26} />,
    name: "Settings",
  },
]

export const CategoryItems = [
  "All",
  "Music",
  "Mixes",
  "Silicon Valley",
  "T-Series",
  "Kollywood",
  "Tollywood",
  "Hollywood",
  "Sitcom",
  "Cricket",
  "Tech",
  "Gaming",
];