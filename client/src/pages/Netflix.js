import NetflixLogo from "../assets/netflix.png";
import NetflixAvatar from "../assets/Netflix-avatar.png";

export default function Netflix() {
  let navOptions = [
    "Home",
    "Series",
    "Films",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  let movie = <img src="https://placehold.co/240x150/000000/FFFFFF/png"></img>;
  let movie2 = <img  src="https://placehold.co/240x220/00000/FFFFFF/png"></img>;

  return (
    <div className="bg-neutral-900 min-h-screen">
      <div id="navbar" className="h-12 w-full px-8 bg-black flex">
        <img alt="netflixlogo" src={NetflixLogo} className="h-full pr-8"></img>
        <div className="flex justify-between w-full">
          <ul className="flex gap-3 items-center">
            {navOptions.map((option, index) => (
              <li key={index} className="text-xs text-white">
                {option}
              </li>
            ))}
          </ul>
          <ul className="px-6 flex gap-5 items-center">
            <li className="mt-0 gg-search text-white"></li>
            <li className="gg-bell text-white"></li>
            <li>
              <img
                className="h-full"
                width="26"
                height=""
                src={NetflixAvatar}
              ></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5 ml-10">
        <p className="text-lg text-white font-black pb-3">Drama Programmes</p>
        <div className="overflow-hidden">
          <ul className="flex gap-1 mb-5">
            <li>{movie}</li>
            <li>{movie}</li>
            <li>{movie}</li>
            <li>{movie}</li>
            <li>{movie}</li>
            <li>{movie}</li>
          </ul>
        </div>
      </div>
      <div className="my-5 ml-10">
        <p className="text-lg text-white font-black pb-3">
          We've picked these for you today
        </p>
        <ul className="flex gap-1 mb-10">
          <li>{movie}</li>
          <li>{movie}</li>
          <li>{movie}</li>
          <li>{movie}</li>
          <li>{movie}</li>
          <li>{movie}</li>
        </ul>
      </div>
      <div className="my-5 ml-10">
        <p className="text-lg text-white font-black pb-3">
          We've picked these for you today
        </p>
        <ul className="flex gap-1">
          <li>{movie2}</li>
          <li>{movie2}</li>
          <li>{movie2}</li>
          <li>{movie2}</li>
          <li>{movie2}</li>
          <li>{movie2}</li>
        </ul>
      </div>
    </div>
  );
}
