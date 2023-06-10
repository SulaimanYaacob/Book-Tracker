import { Link } from "react-router-dom";

function BookProgress() {
  return (
    <div className="card">
      <img
        className="card-img-top w-128 h-128 ta-center"
        src={
          "www.bloomsbury.com/au/adventures-of-sherlock-holmes-9781847496164/#"
        }
      ></img>
      <div className="card-body">
        <h4 className="card-title">[BookTitle]</h4>
        <br></br>
        <p className="card-text">
          Chapter [numChapter] : [chapterTitle] <br></br>
          Chapter Introduction : [chapterIntro]
        </p>
        <br></br>
        <div
          className="progress bg-dark w-400"
          role="progressbar"
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            style={{ width: "100%" }}
          >
            100%
          </div>
        </div>
        <br></br>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default BookProgress;
