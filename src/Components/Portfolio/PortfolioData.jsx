import RapidTextImg from "../assets/my work/Rapidtext.png";
import MovieDbImg from "../assets/my work/moviedb.jpg";
import VstoreImg from "../assets/my work/vstore.jpg";
import WeatherImg from "../assets/my work/weather.png";
import AdminDashboardImg from "../assets/my work/dashboard.png";
import progFinderImg from "../assets/my work/progFinder.png";

const work = [
  {
    id: 1,
    name: "Isha Foundation Program Finder",
    desc: "A NextJS project for finding upcoming programs/events of Isha foundation and sadhguru.",
    url: "https://isha.sadhguru.org/in/en/program-finder",
    snapshot: progFinderImg,
  },
  {
    id: 2,
    name: "MovieDb",
    desc: "A imdb clone created using react, vanilla css and movieDb.org api.",
    url: "https://imdb-clone-viveksuyal37.vercel.app/",
    snapshot: MovieDbImg,
  },
  {
    id: 3,
    name: "RapidText",
    desc: "A chatgpt react app based on openai api.",
    url: "https://rapidtext.netlify.app/",
    snapshot: RapidTextImg,
  },

  {
    id: 4,
    name: "Vstore",
    desc: "Vanilla CSS and JS e-commerce template.",
    url: "https://vstore37.000webhostapp.com/",
    snapshot: VstoreImg,
  },
  {
    id: 5,
    name: "Weather App",
    desc: "A react weather app created using openweather api.",
    url: "https://weather-viveksuyal37.vercel.app/",
    snapshot: WeatherImg,
  },
  {
    id: 6,
    name: "Admin Dashboard",
    desc: "An e-commerce Admin dashboard based on MERN stack.",
    url: "https://ecom-admin-dashboard.netlify.app/",
    snapshot: AdminDashboardImg,
  },
];

export default work;
