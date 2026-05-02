import './card.css'

function Card ({data}){
    return(
        <>
        {/* {console.log(data)} */}
        <div className="inputBox">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="Add Post"/>
            <button className="addBtn">ADD</button>
        </div>
        <div className="Container">
            {
                data.map((item)=>
                    <div className="cardBox" key={item.id}>
                <div>{item.id}.</div>
                <div className="title">Title: {item.title}</div>
                <div className="post">News: {item.body}</div>
                <div className='changebtn'>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </div>
                )  
            }
            
        </div>
        </>
    )
}
export default Card