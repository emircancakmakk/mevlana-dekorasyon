export const MissionVision = (props) => {
  return (
    <div id="missionvision">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="missionvision-text">
              <h2>Misyon ve Vizyonumuz</h2>
              <p>{props.data ? props.data.mission : 'loading...'}</p>
              <p>{props.data ? props.data.vision : 'loading...'}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {' '}
            <img
              src="img/missionvision.jpg"
              className="img-responsive"
              alt=""
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
