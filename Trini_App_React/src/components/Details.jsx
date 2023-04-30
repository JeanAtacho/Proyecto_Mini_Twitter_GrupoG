
function Details({ likes }) {
  return <div className="fixed-details">
    <div className="app">
      <div className="fixed-details__left">
        <i className={likes ? 'icon-heart' : 'icon-heart-empty'}></i>
        ( { likes } )
      </div>
    </div>
  </div>
}

export default Details