import './App.css';

function App() {
  return (
    <div className="Page">
      <h1 className="page-title">jsxChallenge</h1>
      <div className="grid">
        <div className="item small-add">
          <a className="link-block">Classic <span className="serif">Holiday</span>Collections</a>
            
        </div>
        <div className="item article-header">
          <h2 className="title-block">Art. Love. Color</h2>
          <h3 className="title-tag serif">Master Class</h3>
        </div>
        <div className="item article-body">
          <p className="text -serif">
          Inspired by painter Yago Hortal’s one-of-a-kind, vivid artwork, this set features 40 shades of color for cheeks and eyes. The panels easily pop in and out, making it perfectly portable for holiday trips. Smashbox partnered with breakthrough artist Yago
        Hortal to create these mega-vibrant, limited-edition kits featuring all of their bestsellers in a range of shades—from bold pops of color to always-flattering neutrals.
          </p>
          <a className="btn">More details</a>
        </div>
        <div className="item bg-block">
          <div className="bg-block__wrapper">
            <h2 className="title-small">Featured Sale</h2>
            <p className="text-block">All
            <br/> Skin Care <br/> Products <br/><span className="block">BOGO Free</span>
            </p>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
