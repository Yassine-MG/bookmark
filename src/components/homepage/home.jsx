import React, {Component, useState, useEffect} from 'react'
import "./home.css"
import ModalBox from '../modal/modal';

const Home = ()=>{
    const [showForm, setShowForm] = useState(false);
    // const [bookmarkItem, setBookmarkItem] = useState([])
    // const id = 
    const [link, setLink] = useState("https://www.");
    const [name, setName] = useState("");
    const bookmarkItem = {
        name, 
        link,
        };

    const [bookmarks, setBookmarks] = useState([]);
    


    const openForm = ()=>{
        setShowForm(true)
    }
    const clickToClose =()=> {
        setShowForm(false)
    }

    const nameInput =(e)=> {
        let nameValue = e.target.value;
        console.log(nameValue);
        setName(nameValue);
    }

    const linkInput =(e)=> {
        let linkValue = e.target.value;
        setLink(linkValue);
    }

   
    const handleSubmit = (e)=>{ 
        e.preventDefault();
        bookmarks.push(bookmarkItem);    
        // local storage of the bookmarks array :
        localStorage.setItem("keyLocalStorage", JSON.stringify(bookmarks)); 
        // Making the modal box disappear after the submit
        setShowForm(false)
      }

    // const handleDelete = (id) => {
    //     bookmarks.splice(id,1);
    //     setBookmarks(bookmarks)
    //     localStorage.setItem("keyLocalStorage", JSON.stringify(bookmarks));
    //     window.location.reload(false);
    // }
        
    
        useEffect(()=>{
            const json = localStorage.getItem("keyLocalStorage");
            const loadBook =JSON.parse(json);
            if(loadBook){
                setBookmarks(loadBook)
            }
        },[]);
         
        useEffect(()=>{
            if (bookmarks.length>0) {
                const json = JSON.stringify(bookmarks);
                localStorage.setItem("keyLocalStorage",json)
            }
        },[bookmarks])


    return (<div className='homepage-container'>
                <div className='button-container'>
                    <button className='Add' onClick={openForm} >Add New Bookmark</button>
                </div>

                {
                    bookmarks.map((bookmarkItem, index) => {
                        return (
                            <div className="bookmark" key={index} >
                                <a href={bookmarkItem.link} target="_blank"> {bookmarkItem.name} </a> 
                                <i onClick={()=>{
                                    bookmarks.splice(index,1);
                                    setBookmarks(bookmarks)
                                    localStorage.setItem("keyLocalStorage", JSON.stringify(bookmarks));
                                    window.location.reload(false);
                                }} className='bx bx-x'></i>
                            </div>
                        )})
                }
                {
                        showForm ?
                        <div className="ModalBox-container">
                            <ModalBox id="Modal" save={handleSubmit} closeButton="Ranya" clicked={clickToClose} valuePropName={name} valuePropLink={link} onChangeName={nameInput} onChangeLink={linkInput} requireName={!nameInput}/>
                        </div>
                        :
                        null
                    }    
            </div> 
        ) 
    }
export default Home;
