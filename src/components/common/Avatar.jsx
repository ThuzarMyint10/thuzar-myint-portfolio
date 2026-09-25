import {
  SHOW_PHOTO,
  PHOTO_URL,
} from "../../constants/profile";

function Avatar() {
  if (SHOW_PHOTO) {
    return (
      <div className="avatar-wrapper">
        <div className="avatar-image-container">
          <img
            src={PHOTO_URL}
            alt="Thu Zar Myint"
            className="avatar-image"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="avatar-fallback">
      <div className="avatar-wrapper">
        <div className="avatar-placeholder">
          TZ
        </div>
      </div>

      <div className="avatar-online-dot" />
    </div>
  );
}

export default Avatar;