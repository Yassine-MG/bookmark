import React, {Component, useState} from 'react'
import "./home.css"
import ModalBox from '../modal/modal';

const Home = ()=>{
    const [showForm, setShowForm] = useState(false);
    const [bookmarkItem, setBookmarkItem] = useState([])
    const [bookmarks, setBookmarks] = useState([]);
    const [link, setLink] = useState("https://www.");
    const [name, setName] = useState("");


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
        // let bookmarkItem = [];
        bookmarkItem.push(link,name);
        setBookmarkItem(bookmarkItem);
        // console.log(bookmarkItem);

        bookmarks.push(bookmarkItem);
        setBookmarks(bookmarks);
        console.log(bookmarks);

        // stocker la donnee dans le local storage
        localStorage.setItem("keyLocalStorage", JSON.stringify(bookmarks));

        // mettre a jour le DOM avec le Data du local storage
        let data = localStorage.getItem("keyLocalStorage")
        ? localStorage.getItem("keyLocalStorage") 
        : [] ;
        setBookmarks([JSON.parse(data)])

        // Making the modal box disappear after the submit
        setShowForm(false)
      }


    //   todoArray.map((item, index) => {
    //     return (
    //       <ListItem key={index} id={index} handleDelete={handleDelete}>
    //         {item}

            

    return (<div className='homepage-container'>
                <div className='button-container'>
                    <button className='Add' onClick={openForm} >Add New Bookmark</button>
                </div>

                {
                    bookmarks.map((bookmarkItem, index) => {
                        return (
                            <div className="bookmark" key={index} id={index}>
                                <a href={bookmarkItem.link}> {bookmarkItem.name} </a> 
                                <i className='bx bx-x'></i>
                            </div>
                        )})
                }

                {/* <div className="bookmark">
                    <a href="#">Just a test Bookmark</a> 
                    <i className='bx bx-x'></i>
                </div> */}
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
