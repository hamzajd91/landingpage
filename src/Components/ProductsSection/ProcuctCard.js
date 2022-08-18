import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProcuctCard(props) {
    return (

        <div className='ProductCardContainer'>
            <div className='ProductcardContent'>
                <div className='Heart'>
                    <FavoriteBorderIcon />
                    <p>10</p>
                </div>
                <img className='Productcard1img' src={props.imgSource} />

                <div className='ProuctTitle'>
                    Title
                </div>

                <div className='ProductCardDetails'>
                    <img className='CardProfileimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_SQ0jGYFU9qq6EE6hx0UgE9fZsFHQk49-g&usqp=CAU" />
                    <div className="cardtextContainer">
                        <p className='Productcardtext1'>Creator </p>
                        <p className='Productcardtext2'>John Doe </p>
                    </div>

                    <div className="cardtextContainer">
                        <p className='Productcardtext1'>Price </p>
                        <p className='Productcardtext2'>1 ETH </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProcuctCard