import React from 'react'
export default function Homebody(props){
    return(
        <>
        <div className='main'>
            <div className='trending'>
                <h2><b>Trending Albums</b></h2>
            </div>
        </div>
        <div className='albumcontainer'>
            <div className='album' id='album1'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTIcSgwc5GXoRx0Njq2KUSpjlibmXY_CMuw&usqp=CAU' alt='' width='195px' height='150px' /> 
            </div>
            <div className='album' id='album2'>
                <img src='https://i.guim.co.uk/img/media/f38fd6b06741f1b253e7c9bb0c67cad6d5f09b39/0_0_2048_2048/master/2048.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=c77d6984e8347db4b4fea9d9fc60f3b4' alt='' width='195px' height='150px'/>
            </div>
            <div className='album' id='album3'>
                <img src='https://i.scdn.co/image/ab67616d0000b273df9a35baaa98675256b35177' alt='' height='150px' width='195px'/>
            </div>
            <div className='album' id='album4'>
                <img src='https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png' alt='' width='195px' height='150px'/>
            </div>
            <div className='album' id='album5'>
                <img src='https://upload.wikimedia.org/wikipedia/en/d/d2/Illuminate_%28Official_Album_Cover%29_by_Shawn_Mendes.png' alt='' width='195px' height='150px'/>
            </div>
            <div className='album' id='album6'>
                <img src='https://upload.wikimedia.org/wikipedia/en/f/fd/Thisisacting_albumcover.png' alt='' width='195px' height='150px'/>
            </div>
        </div>
        <div className='albumnamecontainer'>
            <span className='albumname' id='justice'>Justice</span>
            <span className='albumname' id='evermore'>Evermore</span>
            <span className='albumname' id='wow'>World of Walkers</span>
            <span className='albumname' id='divide'>Divide</span>
            <span className='albumname' id='illuminate'>Illuminate</span>
            <span className='albumname' id='tia'>This is Acting</span>
        </div>

        <div className='populartop'>
            <div id='popular'>
                <h2><b>Popular</b></h2>
            </div>
            <div id='topsong'>
                <h2><b>Top Songs</b></h2>
            </div> 
        </div>
        <div className='popularimage'>
            <img src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' alt='' height='350px' width='360px'/>
        </div>
        

        </> 
    )
}