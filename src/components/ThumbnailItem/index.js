// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumnailAltText, id} = thumbnailDetails

  const btnOpcatity = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        onClick={onClickThumbnail}
        type="button"
        className="thumbnail-btn"
      >
        <img
          src={thumbnailUrl}
          alt={thumnailAltText}
          className={`${btnOpcatity} nrml-btn`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
