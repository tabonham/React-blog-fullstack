import React from 'react';
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://picsum.photos/id/1/500/300"alt="laptop" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                Readymade hella art party intelligentsia
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">I'm baby pitchfork microdosing plaid organic salvia flexitarian 
                before they sold out fanny pack banh mi. Listicle direct trade 
                hoodie gentrify tattooed next level pop-up yr. Leggings prism 
                kitsch hexagon, shoreditch edison bulb seitan biodiesel truffaut 
                forage artisan roof party mlkshk health goth freegan. Distillery 
                narwhal vegan chicharrones four dollar toast butcher succulents 
                enamel pin cornhole bespoke lomo health goth before they sold out. 
                Banh mi tousled subway tile single-origin coffee, poutine snackwave 
                umami cronut health goth pitchfork keffiyeh kickstarter pour-over 
                man braid. Freegan ugh narwhal tattooed PBR&B copper mug air plant. 
                kled shoreditch hella man braid, tbh pok pok fanny pack franzen 
                sartorial.</p>
        </div>
    )
}
