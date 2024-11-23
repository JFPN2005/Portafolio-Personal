import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/JFPN2005'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/javier-pineda-6385b6261/'},
    {icon: <FaYoutube />, path: 'https://www.youtube.com/@Javier_Pineda-Expert'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/javierpinedaneder/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/javierfrancisco.pinedaneder.79/'},
    {icon: <FaTwitter />, path: 'https://x.com/JFPN591679'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} target='_blank' className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials