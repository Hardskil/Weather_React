import React from 'react';
import "../Style/AddView.css";
function AddView({ addNewView}) {
    function saveNewView(){
        let userName = document.querySelector("#userName").value;
        let userView = document.querySelector("#userView").value;
        document.querySelector("#userName").value = '';
        document.querySelector("#userView").value = '';
        if (!userName || !userView) {return false}
        else{
            let viewInfo = {};
            console.log(123);
            viewInfo.name=userName;
            viewInfo.viewText=userView;
            console.log(viewInfo)
            addNewView(viewInfo)
        };
    }
    return ( 
        <div className='add-view_window'>
            <div className="add-view_input">
                <label for="userName">Укажите ваше имя</label>
                <input className='input' id="userName"/>
            </div>
            <div className="add-view_input">
                <label for="userView">Напишите ваш отзыв</label>
                <textarea className='input' id="userView"/>
            </div>
            <button className='save-view_button' onClick={saveNewView}>Save</button>
        </div>
     );
}

export default AddView;