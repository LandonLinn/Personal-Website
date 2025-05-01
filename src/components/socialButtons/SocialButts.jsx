import React from "react";
import "./SocialButts.css";

const SocialButts = () => {
    return(
        <div class="social-butts">
            <a href="https://www.linkedin.com/in/landon-linn/" class="socialLink" target="_blank"><img src="../src/assets/icons/linkedin-icon.png" alt="" /></a>
            <a href="https://github.com/LandonLinn" class="socialLink" target="_blank"><img src="../src/assets/icons/github-icon.png" alt="" /></a>
            <a href="https://www.behance.net/landonlinn1" class="socialLink" target="_blank"><img src="../src/assets/icons/behance-icon.png" alt="" /></a>
        </div>
    );
};

export default SocialButts;