import React, { useState } from 'react';
import FormikReact from "../Components/FormikReact"
import { useSelector, useDispatch } from "react-redux";
import { State } from "../Redux/store";
import { deleteItem, GetItem } from "../Redux/List/action";

const Home = () => {
    const { list: { list } } = useSelector((state: State): State => state);
    const [isEditing,setIsEditing]=useState<boolean>(false)
  

    const dispatch = useDispatch();
    const handleDeleteItem = (id: string) => {
        dispatch(deleteItem(id));
    };
    const handleEditItem = (id: string) => {
        setIsEditing(isEditing =>!isEditing )
        dispatch(GetItem(id));
    };

    return (
         <div>
            <h2>Work Experience</h2>
            <div>
                <div>
                    {list &&
                        list.map(
                            ({ jobTitle, id, startDate, endDate, currentlyWork }) => (
                                <div className="list_item" key={id}>
                                    {jobTitle}
                                    <span className="list_date">
                                        {startDate}
                                        {" - "}
                                        {currentlyWork ? "Recently" : endDate}
                                    </span>
                                    <button onClick={() => handleEditItem(id)} className="edit_item">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteItem(id)}
                                        className="delete_item"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        )}{" "}
                </div>
                <FormikReact isEditing={isEditing} setIsEditing={setIsEditing}/>
            </div>
        </div>
    );
}

export default Home;
