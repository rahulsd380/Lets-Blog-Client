import Container from "@/Components/Container/Container";
import { ICONS } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    const footerLinks = [
        {
            label : "Privacy Policy",
            path : "/"
        },
        {
            label : "Contact",
            path : "/"
        },
        {
            label : "FAQ",
            path : "/"
        },
        {
            label : "Sitemap",
            path : "/"
        },
        {
            label : "Subscribe",
            path : "/"
        },
    ]
    const socialLinks = [
        {
            icon : ICONS.twitterLogo,
            path : "/"
        },
        {
            icon : ICONS.facebookLogo,
            path : "/"
        },
        {
            icon : ICONS.instagramLogo,
            path : "/"
        },
        {
            icon : ICONS.figmaLogo,
            path : "/"
        },
    ]
    return (
        <Container>
            <div className="border-t border-neutral-70 pt-8 pb-10 font-Inter flex flex-col gap-4">
            <Link
          href={"/"}
          className="flex items-center gap-2 text-neutral-80 font-bold leading-6"
        >
          <Image src={ICONS.footerLogo} alt="blog-logo" className="size-8" />
          Mitra Consultancy © 2024
        </Link>

        <div className="flex flex-col lg:flex-row gap-0 md:gap-4 justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between">
            <p className="text-neutral-90 font-medium leading-6">All Rights Reserved</p>
            <div className="flex lg:hidden items-center gap-4">
            {
                socialLinks.map((link, index) => 
                    <Link key={index} href={link.path}>
                    <Image src={link.icon} alt="blog-logo" className="size-8" />
                    </Link>
                )
            }
       
        </div>
            <div className="flex md:hidden flex-col md:flex-row items-start md:items-center gap-2 md:gap-7">
                {
                    footerLinks.map((link, index) => 
                        <p key={index} className="text-neutral-25 font-semibold leading-6">{link.label}</p>
                    )

                    }
            
            </div>
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-7">
                {
                    footerLinks.map((link, index) => 
                        <p key={index} className="text-neutral-20 font-semibold leading-6">{link.label}</p>
                    )

                    }
            
            </div>

            </div>

        <div className="hidden lg:flex items-center gap-4">
            {
                socialLinks.map((link, index) => 
                    <Link key={index} href={link.path}>
                    <Image src={link.icon} alt="blog-logo" className="size-8" />
                    </Link>
                )
            }
       
        </div>
            </div>
        </Container>
    );
};

export default Footer;