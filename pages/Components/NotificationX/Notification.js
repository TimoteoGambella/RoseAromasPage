export default function Notification ({showNotification, text, showNotification2}) {
    return (
       
            <div className="notification">
                {showNotification && <p>{text}</p>}
                {showNotification2 && <p>{text}</p>}
            </div>

    )
}


