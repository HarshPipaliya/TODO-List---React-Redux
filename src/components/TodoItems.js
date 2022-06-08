import React from 'react'

function TodoItems(props) {
    const {title,id} = props
    
    return (
        <>
            <div className="row my-2">
                <div className="col-md-9" >
                    <p className='text-start' style={{ border: "1px solid black", width: "100%", padding: "7px 10px" }}>{title}</p>
                </div>
                <div className="col-md-3">
                    <button className='btn btn-danger' onClick={()=>{props.delete(id)}}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TodoItems