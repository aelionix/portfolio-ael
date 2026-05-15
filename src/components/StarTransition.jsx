export default function StarTransition() {
    return(
        <div className='star-transition'>
            {[...Array(4)].map((_,i) => (
                <span key={i} className={'star s%{i+1}'}>☆</span>
            ))}
        </div>
    )
}