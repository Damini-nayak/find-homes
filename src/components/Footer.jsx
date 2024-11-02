import react from 'react'
import Base from './Base'

export default function Footer() {
    return (
        <>
            <div className='divpadding footer'>
                <div><img className='logo' src={Base.logo} alt="" /></div>
                <div className="footercontents">
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus labore enim totam deserunt a illo, dolor explicabo iste qui quae, at aspernatur consequatur placeat beatae ipsa, quaerat nam? Beatae, tenetur.</p></div>
                    <div className="footerlinks">
                        <div>
                        <h3 className='heading4'>Links</h3>
                        <a href=""><img src={Base.ulright} alt="" />Home</a>
                        <a href=""><img src={Base.ulright} alt="" />About</a>
                        <a href=""><img src={Base.ulright} alt="" />Something</a>
                        <a href=""><img src={Base.ulright} alt="" />Something</a>
                        </div>
                    </div>
                    <div className="footerlinks">
                        <div>
                        <h3 className='heading3'>Contact Us</h3>
                        <a href="tel:1234567890"><img src={Base.phone} alt="" />1234567890</a>
                        <a href="mailto:asdf@gmail.com"><img src={Base.email} alt="" />asdf@gmail.com</a>
                        <div className="contactus3row">
                            <a href=""><img src={Base.instagram} alt="" /></a>
                            <a href=""><img src={Base.facebook} alt="" /></a>
                            <a href=""><img src={Base.youtube} alt="" /></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}