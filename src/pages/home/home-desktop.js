import React from 'react'
import './home-desktop.css'
import cultrangLogo from './cultrang-logo.png'
import clouds from './home-cloud.svg'
import bottom from './home-bottom.svg'

const Home = () => {
    return (
					<>
						<div className='home--container'>
							<div className="home-top">
								<img className="home-clouds" src={clouds} alt="clouds"></img>
							</div>
							<div className='navbar-container'>
								<div className='items'>
									<div className='item item1'>HOME</div>
									<div className='item item2'>
										<a href='#about'>ABOUT US</a>
									</div>
									<div className='item item3'>
										<a href='#events'>EVENTS</a>
									</div>
									<div className='item item4'>
										<a href='#proevents'>PRO EVENTS</a>
									</div>
									<div className='item item5'>
										<a href='#sponsor'>SPONSOR</a>
									</div>
									<div className='item item6'>
										<a href='#contact'>CONTACT US</a>
									</div>
									<div className='item item7'>
										<a href='https://drive.google.com/u/0/uc?id=1ehuudTD-AaFSG7fwus6KbbC_7xtOdU-c&export=download'>
											RULEBOOK
										</a>
									</div>
								</div>
							</div>
							<div className="logo-container">
								<img src={cultrangLogo} alt="CULTRANG" className="cultrang-logo-pc"></img>
							</div>
							<div className="home-bottom">
								<img className="bottom-image" src={bottom} alt="bottom"></img>
							</div>
							<div className='bottom-space'></div>
						</div>
					</>
				);
}



export default Home;
