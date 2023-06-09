import React from "react";

const CreateAccount = (props)=>{
    return(
        <div className="logo-box">
            <div className="exit-button">
                <button className="exit" onClick={() => props.setCreateAccount(false)}>X</button>
            </div>
            <h2 className="bold-text">Create your account</h2>
            <form>
            <input className="text-create" type="text" placeholder="Name" />
                <input className="text-create" type="number" placeholder="Phone"/>
            </form>

        </div>
    )

}

export default CreateAccount;