import React from "react";

const CreateAccount = (closeCreateAccount)=>{
    return(
        <div className="logo-box">
            <div className="exit-button">
                <button className="exit" onClick={() => closeCreateAccount(false)}>X</button>
            </div>
            <h2 className="bold-text">Create your account</h2>
            <form>
            <input className="text-create" type="text" placeholder="Name" minlength="0" maxlength="50" />
                <input className="text-create" type="number" placeholder="Phone"/>
            </form>

        </div>
    )

}

export default CreateAccount;