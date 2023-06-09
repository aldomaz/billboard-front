import { fetchSocialNetwork } from '@/services/server-side/footerServices'
import React from 'react'

async function Footer() {

    const socialNetwork = await fetchSocialNetwork();

    const { social_network } = socialNetwork.data.attributes.navigation;
    
    return (
        <div>
            <div id='grad'>
                <h4 className="grad_text">© MUSS Multisoftware Solutions. 2023</h4>
                <div className="icon_footer">
                    {
                        social_network.map((sn, idx) => (
                            <a key={idx} href={sn.href} target='_blank' rel='noreferrer'>
                                <img className="icon" alt='social' src={`${sn.icon.data.attributes.formats.thumbnail.url}`}/> 
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Footer
