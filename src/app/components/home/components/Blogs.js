import React from "react";
import Image from "next/image";

// import blog images
import styling_img from '../assets/imgs/styling.jpg'
import color_palette from '../assets/imgs/color_palette.png'
import CardBlog from "@/app/utils/card/CardBlog";
const Blogs = () => {
    return (
        <article className="container py-7">
            <h2 className="text-heading-1">Our Blog</h2>
            <section className="mt-6 grid">
                <CardBlog imgSrc={styling_img} altText="Blog 1" title="Home Styling Ideas" description="From cozy corners to modern makeovers – explore how to transform your space." />
                <CardBlog imgSrc={color_palette} altText="Blog 2" title="Tips for Decorating" description="Simple tricks and fresh ideas to refresh every corner of your home." />
            </section>
        </article>
    )
}
export default Blogs;