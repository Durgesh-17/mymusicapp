import React from 'react'



export default function Sidebar(){
    return(
        <>
        
        <div class="sidenav">
            <a id='Home' href="#home">Home</a>
            <a href="#discover">Discover</a>
            <a href="#radio">Radio</a>
            <a href="#foryou">For You</a>
            <section class='sidenavlibrary'>
                <h5 id='Home'>Your Library</h5>
                <a href='#albums'>Albums</a>
                <a href='#artist'>Artists</a>
                <a href='#playlist'>PlayLists</a>
                <a href='#favorites'>Favourites</a>
            </section>
        </div>
    </>
    )
}

   
