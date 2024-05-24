import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './socialMediaLink.scss';
function SocialMediaLink() {
    return (
        <>
           <div className="containMedia">
        <div className='imageLink'></div>
        <p>Liên hệ với chúng tôi</p>
        <div className='iconLink'>
                    <SocialIcon url="https://www.facebook.com/61558116695989" />
                    <SocialIcon url="https://www.tiktok.com/@yacofficial2023" />
                    <SocialIcon url="https://www.youtube.com/@YoungAsianCrew" />
            
        </div>
    </div>
                   
        </>
    );
}

export default SocialMediaLink;