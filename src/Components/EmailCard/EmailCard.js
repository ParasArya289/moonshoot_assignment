export const EmailCard = ({email})=>{
    return(
        <div className="emailCard">
            <div className="profile">
            <span>{email.from.name[0].toUpperCase()}</span>
            </div>
            <div className="data">
                
            </div>
        </div>
    )
}