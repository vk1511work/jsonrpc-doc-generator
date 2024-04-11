import React from "react";
import variables from "../styles/_variable.scss"

export const SVG_Copy = (props) => {
    const {width, height, colorRect, colorPath, className} = props
    return (
        <svg className={className} width={width || "16"} height={height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.18994" y="3.39648" width="9.56" height="11.1034" rx="1.5" stroke={colorRect || variables.colorWhite1}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.75 13.6035V3.50001C2.75 2.67158 3.42157 2.00001 4.25 2.00001H12.81V1.00001H4.25C2.86929 1.00001 1.75 2.11929 1.75 3.50001V13.6035H2.75Z" fill={colorPath || variables.colorWhite1}/>
        </svg>

    )
}

export const SVG_ScrollTopButton = (props) => {
    const {width, height, colorCircle, colorPath, className} = props
    return (
        <svg className={className} width={width || "60"} height={height || "60"} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="30" cy="30" r="30" fill={colorCircle || variables.colorBasicBlue}/>
            <path d="M40 34L30 24L20 34" stroke={colorPath ||variables.colorWhite1} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const SVG_BurgerButton = (props) => {
    const {width, height, color, className} = props

    return (
        <svg className={className} width={width || "20"} height={height || "16"} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="2" rx="1" fill={color || variables.colorCosmos}/>
            <rect y="7" width="20" height="2" rx="1" fill={color || variables.colorCosmos}/>
            <rect y="14" width="20" height="2" rx="1" fill={color || variables.colorCosmos}/>
        </svg>
    )
}

export const SVG_HeaderLogo = (props) => {
    const {width, height, colorLogo, colorText, className, isNYLogo = false} = props
    const generalClass = className ? className + "header__logo_image" : "header__logo_image"
    return (
        isNYLogo === false ?
        <svg className={generalClass} width={width || "160px"} height={height || "24px"} viewBox="0 0 614 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M230.395 32.955C231.184 33.7581 232.482 33.8522 233.282 33.0598L236.731 29.6445C237.475 28.9079 237.482 27.7017 236.704 27.0016C235.149 25.6034 233.474 24.3635 231.622 23.3572C230.399 22.6599 228.863 22.1025 227.035 21.6699C225.215 21.1987 223.345 20.9636 221.429 20.9636C216.675 20.9636 212.658 22.3681 209.436 25.2128L209.434 25.2142L209.433 25.2157C206.261 28.0459 204.628 31.4095 204.628 35.2777C204.628 38.5018 205.577 41.2102 207.522 43.3326L207.527 43.3378L207.532 43.3429C209.441 45.354 211.727 46.837 214.378 47.789L214.383 47.7906L214.387 47.7921C216.933 48.6733 219.463 49.4894 221.977 50.2404L221.983 50.2421L221.989 50.2438C224.452 50.9387 226.526 51.8945 228.225 53.099L228.231 53.1038L228.238 53.1085C229.865 54.2122 230.613 55.5835 230.613 57.2651C230.613 59.3247 229.816 60.9986 228.179 62.3436L228.176 62.3459L228.173 62.3482C226.585 63.6769 224.215 64.4022 220.941 64.4022C219.57 64.4022 218.212 64.174 216.863 63.7142C215.483 63.2435 214.386 62.7213 213.555 62.1584C212.684 61.5359 211.859 60.8516 211.08 60.1051C210.68 59.6881 210.304 59.2608 209.946 58.8206C209.196 57.8989 207.804 57.7507 206.96 58.5868L203.509 62.0042C202.861 62.6463 202.756 63.6665 203.315 64.3878C204.005 65.2789 204.747 66.0965 205.629 66.8871L205.64 66.8969L205.651 66.9062C206.659 67.7466 207.828 68.5803 209.153 69.4085C210.532 70.2708 212.246 70.9957 214.277 71.5948L214.28 71.5958C216.374 72.2038 218.596 72.5054 220.941 72.5054C226.41 72.5054 230.859 71.1024 234.196 68.2126L234.197 68.2111L234.199 68.2095C237.524 65.2959 239.204 61.6302 239.204 57.2651C239.204 53.9514 238.26 51.1662 236.321 48.9786C234.443 46.8286 232.166 45.2863 229.498 44.3621C226.946 43.446 224.393 42.644 221.839 41.9563C219.367 41.2588 217.287 40.347 215.583 39.2318C213.993 38.1912 213.268 36.8873 213.268 35.2777C213.268 33.7054 213.957 32.2941 215.466 31.0213C216.947 29.7732 218.909 29.1156 221.429 29.1156C223.381 29.1156 225.203 29.5567 226.907 30.4387L226.912 30.4414L226.917 30.4439C228.316 31.1434 229.38 31.9228 230.395 32.955Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M251.587 92.494C252.63 92.494 253.476 91.6483 253.476 90.605V67.4737C253.476 66.7472 254.377 66.3697 254.918 66.8553C254.929 66.8659 254.941 66.8765 254.953 66.8871L254.964 66.8969L254.975 66.9062C255.984 67.7466 257.152 68.5803 258.477 69.4085C259.85 70.2667 261.51 70.9914 263.444 71.5915L263.446 71.5921L263.448 71.5926C265.444 72.2015 267.506 72.5054 269.632 72.5054C276.019 72.5054 281.59 69.9593 286.31 64.9375L286.312 64.9355C291.037 59.8751 293.404 53.81 293.404 46.7833C293.404 39.7238 291.021 33.6419 286.262 28.5812C281.543 23.5282 275.99 20.9636 269.632 20.9636C267.503 20.9636 265.423 21.2847 263.395 21.9264C261.437 22.524 259.793 23.2309 258.481 24.0585C257.203 24.8323 256.009 25.7236 254.9 26.732L254.896 26.7361L254.891 26.7404C254.364 27.2348 253.476 26.8635 253.476 26.1406V23.8764C253.476 22.8331 252.63 21.9874 251.587 21.9874H246.774C245.73 21.9874 244.885 22.8331 244.885 23.8764V90.605C244.885 91.6483 245.73 92.494 246.774 92.494H251.587ZM280.102 34.2651C283.239 37.6817 284.813 41.8379 284.813 46.7833C284.813 51.6947 283.24 55.8529 280.1 59.3041L280.1 59.3044C276.974 62.7424 273.492 64.4022 269.632 64.4022C265.57 64.4022 261.856 62.6875 258.47 59.1458C255.13 55.5855 253.476 51.476 253.476 46.7833C253.476 42.0556 255.131 37.9469 258.47 34.4206C261.857 30.8451 265.572 29.1156 269.632 29.1156C273.489 29.1156 276.971 30.7892 280.097 34.2594L280.1 34.2623L280.102 34.2651Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M330.01 37.8963C330.172 38.84 329.475 39.6815 328.53 39.8361L312.402 42.4744C307.77 43.2408 304.131 44.9052 301.571 47.5331C298.993 50.1472 297.732 53.5816 297.732 57.7526C297.732 61.6705 299.495 65.1148 302.886 68.0652L302.887 68.0665L302.889 68.0678C306.334 71.0353 310.558 72.5054 315.508 72.5054C317.499 72.5054 319.427 72.2355 321.289 71.6939C323.147 71.1632 324.679 70.5554 325.864 69.8585L325.871 69.8541L325.879 69.8495C327.024 69.1424 328.086 68.35 329.065 67.4721L329.066 67.4711C329.497 67.0832 330.202 67.3875 330.202 67.9672V69.6414C330.202 70.6847 331.047 71.5304 332.091 71.5304H336.903C337.947 71.5304 338.792 70.6847 338.792 69.6414V40.2504C338.792 34.8091 336.907 30.2108 333.139 26.5101C329.399 22.8051 324.671 20.9636 319.018 20.9636C316.791 20.9636 314.598 21.3011 312.442 21.9744C310.352 22.605 308.621 23.3464 307.271 24.2118C304.959 25.6934 302.791 27.5021 300.987 29.5928C300.373 30.3045 300.453 31.3621 301.118 32.0268L304.13 35.039C304.9 35.8086 306.152 35.7645 306.899 34.9726C308.458 33.3185 310.065 31.8911 312.222 30.7809L312.224 30.7799L312.226 30.7789C314.353 29.6693 316.613 29.1156 319.018 29.1156C322.342 29.1156 325.006 30.1547 327.079 32.1978C328.638 33.734 329.621 35.6226 330.01 37.8963ZM328.609 47.5107C329.438 47.3587 330.202 47.9952 330.202 48.8378V49.2697C330.202 53.8001 328.803 57.4205 326.048 60.206L326.046 60.2076L326.045 60.2092C323.319 62.996 319.83 64.4022 315.508 64.4022C312.505 64.4022 310.251 63.7304 308.651 62.4825C307.078 61.198 306.324 59.638 306.323 57.755C306.339 55.6959 307.022 54.0796 308.347 52.8333C309.697 51.5642 311.776 50.6184 314.681 50.0655L314.684 50.065L328.609 47.5107Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} d="M351.72 64.9944L351.722 64.9963C356.582 69.9897 362.411 72.5054 369.171 72.5054C371.595 72.5054 373.969 72.1348 376.291 71.3946L376.294 71.3935L376.298 71.3924C378.606 70.6339 380.518 69.816 382.015 68.9314L382.021 68.928L382.026 68.9244C384.653 67.3126 387.134 65.3279 389.167 62.9863C389.807 62.2483 389.695 61.1433 388.97 60.4888L385.567 57.4195C384.768 56.6989 383.535 56.7955 382.816 57.5961C381.056 59.5555 379.217 61.1776 376.737 62.4983C374.35 63.7695 371.831 64.4022 369.171 64.4022C364.827 64.4022 361.053 62.7346 357.815 59.3417C354.618 55.9259 353.015 51.7567 353.015 46.7833C353.015 41.7746 354.619 37.6065 357.815 34.2248C361.055 30.7982 364.829 29.1156 369.171 29.1156C373.801 29.1156 378.339 31.8971 382.159 35.9742C382.916 36.7826 384.199 36.8491 384.986 36.0696L388.504 32.5853C389.225 31.8716 389.256 30.7129 388.552 29.9832C386.009 27.3493 383.415 25.1771 379.965 23.486C376.631 21.8031 373.029 20.9636 369.171 20.9636C362.441 20.9636 356.612 23.4978 351.722 28.5215C346.859 33.5195 344.424 39.6065 344.424 46.7345C344.424 53.8624 346.858 59.9647 351.72 64.9944Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M401.148 51.574C400.984 50.7852 401.617 50.0832 402.422 50.0852L438.035 50.1744C438.982 50.1767 439.785 49.4771 439.911 48.5384L440.28 45.8139V45.7595C440.28 38.6499 438.02 32.7208 433.471 28.0366C428.925 23.3223 423.252 20.9636 416.508 20.9636C409.965 20.9636 404.266 23.5039 399.445 28.5255C394.648 33.5242 392.248 39.61 392.248 46.7345C392.248 53.8624 394.683 59.9647 399.545 64.9944L399.547 64.9963C404.406 69.9897 410.235 72.5054 416.995 72.5054C419.482 72.5054 421.904 72.1356 424.258 71.3956L424.262 71.3946L424.265 71.3935C426.606 70.6352 428.535 69.8171 430.034 68.9314L430.036 68.93L430.039 68.9286C431.544 68.0255 432.934 67.004 434.208 65.8638L434.209 65.863C435.241 64.9374 436.166 63.9877 437.034 62.9571C437.639 62.2379 437.559 61.1806 436.894 60.5159L433.887 57.5088C433.114 56.736 431.854 56.7832 431.111 57.5851C429.31 59.5308 427.472 61.1903 424.959 62.4944C422.51 63.7651 419.86 64.4022 416.995 64.4022C412.757 64.4022 409.071 62.9104 405.903 59.8975C403.376 57.4704 401.798 54.7008 401.148 51.574ZM426.674 33.1327L426.675 33.1342L426.677 33.1357C428.936 35.2721 430.457 37.855 431.238 40.9051C431.444 41.7128 430.806 42.4635 429.972 42.4635H402.612C401.765 42.4635 401.125 41.691 401.363 40.879C402.195 38.05 403.767 35.5368 406.095 33.3301C409.069 30.5109 412.528 29.1156 416.508 29.1156C420.498 29.1156 423.871 30.4529 426.674 33.1327Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} d="M480.036 23.2956C479.784 22.5159 479.058 21.9875 478.239 21.9875H473.812C472.994 21.9875 472.268 22.5148 472.016 23.2934L461.774 54.8507C461.534 55.5923 460.487 55.5985 460.237 54.8598L449.569 23.2721C449.31 22.5044 448.59 21.9875 447.779 21.9875H441.802C440.876 21.9875 440.225 22.8996 440.527 23.7755L456.509 70.2557C456.771 71.0184 457.488 71.5305 458.295 71.5305H463.275C464.092 71.5305 464.816 71.0056 465.07 70.2295L475.236 39.1941C475.479 38.4511 476.53 38.4505 476.774 39.1932L486.982 70.2317C487.237 71.0067 487.96 71.5305 488.776 71.5305H493.709C494.515 71.5305 495.233 71.0184 495.495 70.2557L511.477 23.7755C511.778 22.8996 511.127 21.9875 510.201 21.9875H504.224C503.414 21.9875 502.694 22.5044 502.435 23.2721L491.77 54.8506C491.52 55.5897 490.472 55.5828 490.232 54.8405L480.036 23.2956Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M520.451 51.574C520.287 50.7852 520.92 50.0832 521.725 50.0852L557.338 50.1744C558.285 50.1767 559.087 49.4771 559.214 48.5384L559.582 45.8139V45.7595C559.582 38.6489 557.322 32.719 552.772 28.0345C548.226 23.3216 542.554 20.9636 535.81 20.9636C529.268 20.9636 523.569 23.5039 518.748 28.5255C513.95 33.5242 511.551 39.61 511.551 46.7345C511.551 53.8624 513.985 59.9647 518.847 64.9944L518.849 64.9963C523.709 69.9897 529.538 72.5054 536.298 72.5054C538.785 72.5054 541.207 72.1356 543.561 71.3956L543.564 71.3946L543.568 71.3935C545.909 70.6352 547.838 69.8171 549.337 68.9314L549.339 68.93L549.341 68.9286C551.984 67.3431 554.349 65.3102 556.335 62.9562C556.942 62.2376 556.862 61.1806 556.197 60.5159L553.19 57.5088C552.417 56.736 551.157 56.7832 550.414 57.5851C548.613 59.5308 546.774 61.1903 544.262 62.4944C541.813 63.7651 539.163 64.4022 536.298 64.4022C532.059 64.4022 528.373 62.91 525.204 59.8961C522.678 57.4694 521.101 54.7002 520.451 51.574ZM545.976 33.1327L545.978 33.1342L545.98 33.1357C548.239 35.2721 549.76 37.855 550.54 40.9051C550.747 41.7128 550.109 42.4635 549.275 42.4635H521.914C521.068 42.4635 520.427 41.691 520.666 40.879C521.498 38.05 523.07 35.5368 525.398 33.3301C528.372 30.5109 531.831 29.1156 535.81 29.1156C539.8 29.1156 543.174 30.4529 545.976 33.1327Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M575.487 26.7404C574.959 27.2348 574.071 26.8635 574.071 26.1405V1.88897C574.071 0.845719 573.225 0 572.182 0H567.369C566.326 0 565.48 0.84572 565.48 1.88897V69.6414C565.48 70.6847 566.326 71.5304 567.369 71.5304H572.182C573.225 71.5304 574.071 70.6847 574.071 69.6414V67.5004C574.071 66.7679 575.003 66.3981 575.549 66.8871L575.56 66.8969L575.571 66.9062C576.579 67.7466 577.748 68.5803 579.073 69.4085C580.446 70.2667 582.106 70.9914 584.04 71.5915L584.042 71.5921L584.044 71.5927C586.039 72.2015 588.102 72.5054 590.228 72.5054C596.615 72.5054 602.185 69.9593 606.906 64.9375L606.908 64.9355C611.633 59.8751 614 53.81 614 46.7833C614 39.7234 611.616 33.6411 606.857 28.5802C602.138 23.5279 596.585 20.9636 590.228 20.9636C588.098 20.9636 586.019 21.2847 583.991 21.9264C582.033 22.5239 580.389 23.2307 579.077 24.0581C577.799 24.832 576.605 25.7234 575.496 26.732L575.491 26.7361L575.487 26.7404ZM600.698 34.2651C603.835 37.6817 605.409 41.8379 605.409 46.7833C605.409 51.6948 603.836 55.8529 600.696 59.3041L600.695 59.3044C597.57 62.7424 594.088 64.4022 590.228 64.4022C586.166 64.4022 582.452 62.6876 579.066 59.1463C575.725 55.5859 574.071 51.4762 574.071 46.7833C574.071 42.0555 575.727 37.9468 579.066 34.4205C582.453 30.8451 586.167 29.1156 590.228 29.1156C594.085 29.1156 597.567 30.7892 600.693 34.2594L600.695 34.2623L600.698 34.2651Z" fill={colorText || variables.colorWhite1}/>
            <path className={"header__logo_image"} fillRule="evenodd" clipRule="evenodd" d="M82.6614 70.3368H82.6928V69.9825L82.7267 70.3368H82.7581C84.9507 70.3368 87.1399 70.7948 89.0831 71.7099C92.0016 73.0853 95.2547 73.8536 98.6898 73.8536C106.5 73.8536 114.931 70.2685 121.3 67.5592L122.953 66.8585C123.576 66.597 124.173 66.3487 124.743 66.1194C126.19 65.5365 127.334 65.5287 127.566 67.8656C127.919 71.413 127.828 74.8622 126.901 79.8408C126.816 80.2838 127.252 80.6836 127.711 80.6836H129.857C130.222 80.6836 130.619 80.4833 130.804 80.1597C132.872 75.4568 134.637 69.6267 134.456 63.634C134.291 58.1692 133.427 55.1881 128.125 57.3043L122.007 59.1935C120.541 59.547 120.544 58.2768 120.545 57.2752C120.545 56.7694 120.569 56.2604 120.507 55.7568C120.41 53.2722 120.399 52.962 124.893 50.2975L133.854 44.817C134.488 44.4014 135.339 44.5271 135.78 45.1453C138.762 48.6801 141.853 54.2636 142.218 60.8564C142.679 69.1954 141.538 73.7294 140.103 79.4307L140.016 79.7803C139.961 80.2594 140.338 80.6789 140.819 80.6789H143.291C143.613 80.6789 143.919 80.4739 144.038 80.1738C146.689 74.4474 149.261 67.4147 148.857 58.8502C148.363 48.3981 144.372 39.0356 138.215 34.1811C136.509 32.7742 134.807 32.6737 132.994 33.9305L122.992 39.7669C119.716 41.7558 118.774 40.6781 117.853 38.8462C117.655 38.4527 117.448 38.0647 117.232 37.6813C116.394 36.181 115.556 34.5683 117.665 33.0633C118.541 32.4372 121.274 30.5606 124.322 28.4657L124.374 28.4303L124.619 28.2622L124.854 28.102L124.982 28.0148L124.994 28.0053C129.108 25.183 133.584 22.1116 134.776 21.2436C136.928 19.6765 138.846 18.8172 140.21 20.1376C145.876 25.626 154.099 34.5047 157.064 46.6315C159.772 57.7088 157.166 68.0376 154.755 77.5871L154.399 79.0018L154.228 79.686C154.106 80.1919 154.487 80.686 155.006 80.686H157.334C157.617 80.686 157.881 80.5289 158.024 80.283C163.688 69.2795 167.175 56.7513 164.506 42.2287C161.681 26.8608 150.193 14.467 143.341 8.29124L143.256 8.21348C141.144 6.31017 139.178 4.53648 134.776 7.57014C130.315 10.6446 108.127 25.4249 106.044 26.71C103.961 27.9951 101.591 29.0069 99.4365 28.8804C93.906 28.556 89.2329 28.3934 82.7518 28.3934H82.7267L82.6928 28.7477V28.3934H82.6677C76.1866 28.3934 71.5135 28.556 65.9831 28.8804C63.8281 29.0069 61.4589 27.9951 59.3757 26.71C57.2925 25.4249 35.1048 10.6446 30.6435 7.57014C26.2415 4.53648 24.2751 6.31017 22.164 8.21348L22.0784 8.29124C15.2263 14.467 3.73846 26.8608 0.913558 42.2287C-1.75591 56.7513 1.73178 69.2795 7.39541 80.283C7.53855 80.5289 7.80209 80.686 8.08563 80.686H10.4136C10.9324 80.686 11.314 80.1919 11.1917 79.686C11.0183 78.9908 10.8417 78.2909 10.6641 77.5871C8.25391 68.0376 5.64724 57.7088 8.35545 46.6315C11.3202 34.5047 19.5434 25.626 25.2095 20.1376C26.5731 18.8172 28.4912 19.6765 30.6435 21.2436C31.837 22.1124 36.3204 25.1893 40.4375 28.0148L40.5625 28.0996L41.1283 28.4884L41.3643 28.651L41.447 28.7076C44.3531 30.7036 46.9121 32.4616 47.7548 33.0633C49.8631 34.5683 49.0258 36.181 48.1878 37.6813C47.9716 38.0647 47.7642 38.4527 47.5666 38.8462C46.6453 40.6781 45.7033 41.7558 42.4275 39.7669L32.4255 33.9305C30.6125 32.6737 28.9101 32.7742 27.2049 34.1811C21.0474 39.0356 17.0567 48.3981 16.5629 58.8502C16.1582 67.4147 18.73 74.4474 21.3819 80.1738C21.5006 80.4739 21.807 80.6789 22.1286 80.6789H24.6009C25.0817 80.6789 25.4589 80.2594 25.404 79.7803L25.3161 79.4307C23.8812 73.7294 22.7404 69.1954 23.2016 60.8564C23.5662 54.2636 26.6574 48.6801 29.6395 45.1453C30.0807 44.5271 30.9317 44.4014 31.5659 44.817L40.5263 50.2975C45.0206 52.962 45.0096 53.2722 44.9123 55.7568C44.864 56.1496 44.8682 56.5463 44.8723 56.9414L44.8747 57.2752C44.8751 58.2768 44.8782 59.547 43.4127 59.1935L37.2947 57.3043C31.9926 55.1881 31.1289 58.1692 30.9635 63.634C30.7821 69.6267 32.5475 75.4568 34.6154 80.1597C34.8004 80.4833 35.1974 80.6836 35.5629 80.6836H37.7089C38.1673 80.6836 38.6034 80.2838 38.5183 79.8408C37.5917 74.8622 37.5007 71.413 37.8532 67.8656C38.0854 65.5287 39.2295 65.5365 40.6769 66.1194C41.7126 66.5365 42.8408 67.0156 44.0432 67.5262L44.1193 67.5592C50.4887 70.2685 58.9195 73.8536 66.7298 73.8536C70.1648 73.8536 73.4179 73.0853 76.3364 71.7099C78.2797 70.7948 80.4688 70.3368 82.6614 70.3368ZM74.6245 55.3303C75.06 55.1247 76.1333 55.7673 75.8976 56.1877C74.0061 59.561 70.3997 61.8407 66.2617 61.8407C60.1625 61.8407 55.2181 56.8888 55.2181 50.7806C55.2181 44.6724 60.1625 39.7205 66.2617 39.7205C70.3997 39.7205 74.0061 42.0002 75.8976 45.3735C76.1333 45.7939 75.06 46.4365 74.6245 46.2309C73.9758 45.9246 73.251 45.7533 72.4863 45.7533C69.7139 45.7533 67.4665 48.0038 67.4665 50.7806C67.4665 53.5574 69.7139 55.8079 72.4863 55.8079C73.251 55.8079 73.9758 55.6366 74.6245 55.3303ZM98.991 61.8407C103.129 61.8407 106.735 59.561 108.627 56.1877C108.863 55.7673 107.789 55.1247 107.354 55.3303C106.705 55.6366 105.98 55.8079 105.216 55.8079C102.443 55.8079 100.196 53.5574 100.196 50.7806C100.196 48.0038 102.443 45.7533 105.216 45.7533C105.98 45.7533 106.705 45.9246 107.354 46.2309C107.789 46.4365 108.863 45.7939 108.627 45.3735C106.735 42.0002 103.129 39.7205 98.991 39.7205C92.8917 39.7205 87.9473 44.6724 87.9473 50.7806C87.9473 56.8888 92.8917 61.8407 98.991 61.8407Z" fill={colorLogo ||  variables.colorBasicBlue}/>
        </svg>

        :

        <svg className={generalClass} width={width || "160px"} height={height || "30px"} viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M59.9168 14.0423C60.1214 14.2516 60.4576 14.2761 60.665 14.0696L61.5586 13.1796C61.7513 12.9876 61.7532 12.6733 61.5515 12.4909C61.1487 12.1265 60.7147 11.8034 60.2348 11.5412C59.9179 11.3595 59.5198 11.2142 59.0462 11.1015C58.5746 10.9787 58.0902 10.9175 57.5935 10.9175C56.3618 10.9175 55.3209 11.2835 54.4861 12.0248L54.4857 12.0251L54.4852 12.0255C53.6635 12.763 53.2403 13.6395 53.2403 14.6475C53.2403 15.4877 53.4861 16.1935 53.9902 16.7465L53.9915 16.7479L53.9927 16.7492C54.4874 17.2733 55.0796 17.6597 55.7668 17.9078L55.7679 17.9082L55.769 17.9086C56.4287 18.1382 57.0842 18.3509 57.7356 18.5466L57.7372 18.5471L57.7387 18.5475C58.3771 18.7286 58.9143 18.9776 59.3545 19.2915L59.3562 19.2928L59.358 19.294C59.7795 19.5816 59.9734 19.939 59.9734 20.3772C59.9734 20.9139 59.7669 21.35 59.3426 21.7005L59.3419 21.7011L59.3412 21.7017C58.9296 22.048 58.3155 22.237 57.4672 22.237C57.112 22.237 56.7601 22.1775 56.4106 22.0577C56.0529 21.935 55.7687 21.799 55.5533 21.6523C55.3276 21.4901 55.114 21.3117 54.9122 21.1172C54.8085 21.0086 54.711 20.8972 54.6182 20.7825C54.4239 20.5423 54.0633 20.5037 53.8445 20.7216L52.9503 21.6121C52.7823 21.7794 52.7551 22.0453 52.9 22.2332C53.0789 22.4654 53.2711 22.6785 53.4995 22.8845L53.5024 22.8871L53.5053 22.8895C53.7666 23.1085 54.0693 23.3257 54.4127 23.5416C54.7702 23.7663 55.2143 23.9552 55.7404 24.1113L55.7412 24.1115C56.2839 24.27 56.8596 24.3486 57.4672 24.3486C58.8844 24.3486 60.037 23.983 60.9016 23.2299L60.9021 23.2295L60.9026 23.2291C61.7641 22.4699 62.1994 21.5146 62.1994 20.3772C62.1994 19.5136 61.9549 18.7879 61.4523 18.2178C60.9658 17.6575 60.3756 17.2556 59.6845 17.0148C59.0231 16.7761 58.3615 16.5671 57.6998 16.3879C57.0594 16.2061 56.5203 15.9685 56.0788 15.6779C55.6669 15.4067 55.4789 15.067 55.4789 14.6475C55.4789 14.2378 55.6575 13.8701 56.0486 13.5384C56.4322 13.2131 56.9407 13.0418 57.5935 13.0418C58.0995 13.0418 58.5716 13.1567 59.013 13.3866L59.0143 13.3873L59.0156 13.3879C59.3781 13.5702 59.6539 13.7733 59.9168 14.0423Z" fill="white"/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M65.4079 29.5573C65.6782 29.5573 65.8974 29.3369 65.8974 29.0651V23.0374C65.8974 22.8481 66.131 22.7497 66.2711 22.8762C66.2741 22.879 66.2772 22.8817 66.2803 22.8845L66.2831 22.8871L66.286 22.8895C66.5473 23.1085 66.85 23.3257 67.1934 23.5416C67.5492 23.7652 67.9793 23.954 68.4804 24.1104L68.4809 24.1106L68.4813 24.1107C68.9985 24.2694 69.5329 24.3486 70.0837 24.3486C71.7388 24.3486 73.1821 23.6851 74.4053 22.3765L74.4058 22.376C75.6301 21.0573 76.2434 19.4768 76.2434 17.6457C76.2434 15.8061 75.6259 14.2213 74.3928 12.9025C73.1701 11.5858 71.7311 10.9175 70.0837 10.9175C69.5321 10.9175 68.9931 11.0011 68.4677 11.1684C67.9603 11.3241 67.5342 11.5083 67.1942 11.724C66.8632 11.9256 66.554 12.1579 66.2665 12.4206L66.2654 12.4217L66.2642 12.4228C66.1275 12.5517 65.8974 12.4549 65.8974 12.2665V11.6765C65.8974 11.4047 65.6782 11.1843 65.4079 11.1843H64.1608C63.8905 11.1843 63.6714 11.4047 63.6714 11.6765V29.0651C63.6714 29.3369 63.8905 29.5573 64.1608 29.5573H65.4079ZM72.7968 14.3837C73.6096 15.274 74.0174 16.357 74.0174 17.6457C74.0174 18.9256 73.6098 20.0091 72.7961 20.9085L72.7961 20.9086C71.9862 21.8045 71.084 22.237 70.0837 22.237C69.0312 22.237 68.0689 21.7901 67.1915 20.8673C66.326 19.9395 65.8974 18.8686 65.8974 17.6457C65.8974 16.4138 66.3264 15.3431 67.1916 14.4242C68.0693 13.4925 69.0316 13.0418 70.0837 13.0418C71.0832 13.0418 71.9854 13.4779 72.7954 14.3822L72.7961 14.3829L72.7968 14.3837Z" fill="white"/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M85.7286 15.3299C85.7705 15.5758 85.5898 15.7951 85.3449 15.8354L81.166 16.5229C79.9659 16.7226 79.0229 17.1563 78.3597 17.8411C77.6916 18.5223 77.3649 19.4173 77.3649 20.5042C77.3649 21.5251 77.8215 22.4227 78.7003 23.1915L78.7007 23.1918L78.701 23.1922C79.5937 23.9655 80.6881 24.3486 81.9708 24.3486C82.4867 24.3486 82.9863 24.2782 83.4689 24.1371C83.9501 23.9988 84.3472 23.8404 84.6542 23.6588L84.6561 23.6577L84.6581 23.6565C84.9547 23.4722 85.23 23.2657 85.4837 23.037L85.484 23.0367C85.5957 22.9356 85.7782 23.0149 85.7782 23.166V23.6023C85.7782 23.8741 85.9973 24.0945 86.2676 24.0945H87.5147C87.785 24.0945 88.0042 23.8741 88.0042 23.6023V15.9434C88.0042 14.5254 87.5157 13.3272 86.5393 12.3628C85.5702 11.3973 84.3451 10.9175 82.8803 10.9175C82.3033 10.9175 81.7351 11.0054 81.1765 11.1809C80.6349 11.3452 80.1862 11.5384 79.8364 11.7639C79.2375 12.15 78.6756 12.6213 78.2082 13.1661C78.0491 13.3516 78.0699 13.6272 78.2422 13.8004L79.0227 14.5853C79.2221 14.7859 79.5467 14.7744 79.7401 14.568C80.1442 14.137 80.5605 13.765 81.1194 13.4757L81.1199 13.4755L81.1204 13.4752C81.6715 13.1861 82.2572 13.0418 82.8803 13.0418C83.7417 13.0418 84.4319 13.3126 84.9691 13.845C85.373 14.2453 85.6276 14.7374 85.7286 15.3299ZM85.3655 17.8353C85.5802 17.7957 85.7782 17.9615 85.7782 18.1811V18.2937C85.7782 19.4742 85.4157 20.4176 84.7019 21.1435L84.7015 21.1439L84.7011 21.1444C83.9948 21.8706 83.0907 22.237 81.9708 22.237C81.1928 22.237 80.6087 22.0619 80.1941 21.7367C79.7864 21.402 79.5911 20.9955 79.5909 20.5048C79.5949 19.9682 79.7721 19.5471 80.1154 19.2223C80.4651 18.8916 81.0039 18.6451 81.7567 18.501L81.7574 18.5009L85.3655 17.8353Z" fill="white"/>
            <path className={"header__logo_text"} d="M91.354 22.3913L91.3545 22.3918C92.6136 23.693 94.1242 24.3486 95.8757 24.3486C96.5038 24.3486 97.119 24.252 97.7206 24.0591L97.7215 24.0588L97.7224 24.0585C98.3205 23.8609 98.8158 23.6478 99.2037 23.4172L99.2052 23.4163L99.2067 23.4154C99.8873 22.9954 100.53 22.4782 101.057 21.868C101.223 21.6757 101.194 21.3878 101.006 21.2172L100.124 20.4174C99.9171 20.2296 99.5975 20.2548 99.4113 20.4634C98.9554 20.974 98.4789 21.3967 97.8362 21.7409C97.2176 22.0721 96.5651 22.237 95.8757 22.237C94.7502 22.237 93.7724 21.8024 92.9332 20.9183C92.1048 20.0282 91.6894 18.9417 91.6894 17.6457C91.6894 16.3405 92.1052 15.2544 92.9332 14.3732C93.7727 13.4802 94.7505 13.0418 95.8757 13.0418C97.0755 13.0418 98.2513 13.7666 99.2411 14.829C99.4373 15.0397 99.7696 15.057 99.9736 14.8539L100.885 13.9459C101.072 13.76 101.08 13.458 100.898 13.2679C100.239 12.5815 99.5666 12.0155 98.6725 11.5748C97.8087 11.1362 96.8754 10.9175 95.8757 10.9175C94.1319 10.9175 92.6215 11.5779 91.3545 12.887C90.0942 14.1894 89.4634 15.7756 89.4634 17.633C89.4634 19.4905 90.0942 21.0806 91.354 22.3913Z" fill="white"/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M104.161 18.8941C104.119 18.6886 104.283 18.5056 104.492 18.5062L113.719 18.5294C113.965 18.53 114.173 18.3477 114.206 18.1031L114.301 17.3931V17.3789C114.301 15.5263 113.715 13.9812 112.537 12.7606C111.359 11.5321 109.889 10.9175 108.141 10.9175C106.446 10.9175 104.969 11.5795 103.72 12.888C102.477 14.1906 101.855 15.7765 101.855 17.633C101.855 19.4905 102.486 21.0806 103.746 22.3913L103.746 22.3918C105.006 23.693 106.516 24.3486 108.268 24.3486C108.912 24.3486 109.54 24.2522 110.15 24.0594L110.15 24.0591L110.151 24.0588C110.758 23.8612 111.258 23.648 111.646 23.4172L111.647 23.4169L111.647 23.4165C112.037 23.1812 112.398 22.915 112.728 22.6179L112.728 22.6177C112.995 22.3764 113.235 22.129 113.46 21.8604C113.617 21.673 113.596 21.3975 113.424 21.2243L112.645 20.4407C112.444 20.2393 112.118 20.2516 111.925 20.4605C111.459 20.9676 110.982 21.4 110.331 21.7398C109.697 22.071 109.01 22.237 108.268 22.237C107.169 22.237 106.214 21.8483 105.393 21.0631C104.739 20.4307 104.33 19.7089 104.161 18.8941ZM110.775 14.0886L110.776 14.089L110.776 14.0894C111.362 14.6461 111.756 15.3191 111.958 16.114C112.012 16.3244 111.846 16.5201 111.63 16.5201H104.541C104.321 16.5201 104.155 16.3188 104.217 16.1072C104.433 15.37 104.84 14.7151 105.443 14.14C106.214 13.4054 107.11 13.0418 108.141 13.0418C109.175 13.0418 110.049 13.3903 110.775 14.0886Z" fill="white"/>
            <path className={"header__logo_text"} d="M124.602 11.5252C124.537 11.322 124.349 11.1843 124.137 11.1843H122.99C122.778 11.1843 122.59 11.3217 122.524 11.5246L119.87 19.748C119.808 19.9413 119.537 19.9429 119.472 19.7504L116.708 11.5191C116.641 11.319 116.454 11.1843 116.244 11.1843H114.696C114.456 11.1843 114.287 11.422 114.365 11.6503L118.506 23.7624C118.574 23.9611 118.76 24.0945 118.969 24.0945H120.259C120.471 24.0945 120.659 23.9578 120.725 23.7555L123.359 15.6681C123.422 15.4745 123.694 15.4743 123.757 15.6679L126.402 23.7561C126.468 23.9581 126.656 24.0945 126.867 24.0945H128.145C128.354 24.0945 128.54 23.9611 128.608 23.7624L132.749 11.6503C132.827 11.422 132.659 11.1843 132.419 11.1843H130.87C130.66 11.1843 130.473 11.319 130.406 11.5191L127.643 19.748C127.578 19.9406 127.307 19.9388 127.244 19.7454L124.602 11.5252Z" fill="white"/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M135.074 18.8941C135.032 18.6886 135.196 18.5056 135.405 18.5062L144.632 18.5294C144.878 18.53 145.086 18.3477 145.119 18.1031L145.214 17.3931V17.3789C145.214 15.526 144.628 13.9808 143.449 12.7601C142.271 11.5319 140.802 10.9175 139.054 10.9175C137.359 10.9175 135.882 11.5795 134.633 12.888C133.39 14.1906 132.768 15.7765 132.768 17.633C132.768 19.4905 133.399 21.0806 134.659 22.3913L134.659 22.3918C135.919 23.693 137.429 24.3486 139.181 24.3486C139.825 24.3486 140.453 24.2522 141.063 24.0594L141.063 24.0591L141.064 24.0588C141.671 23.8612 142.171 23.648 142.559 23.4172L142.56 23.4169L142.56 23.4165C143.245 23.0034 143.858 22.4736 144.373 21.8602C144.53 21.6729 144.509 21.3975 144.337 21.2243L143.558 20.4406C143.357 20.2393 143.031 20.2516 142.838 20.4605C142.372 20.9676 141.895 21.4 141.244 21.7398C140.61 22.071 139.923 22.237 139.181 22.237C138.082 22.237 137.127 21.8482 136.306 21.0628C135.652 20.4304 135.243 19.7088 135.074 18.8941ZM141.689 14.0886L141.689 14.089L141.689 14.0894C142.275 14.6461 142.669 15.3191 142.871 16.114C142.925 16.3244 142.759 16.5201 142.543 16.5201H135.454C135.234 16.5201 135.068 16.3188 135.13 16.1072C135.346 15.37 135.753 14.7151 136.356 14.14C137.127 13.4054 138.023 13.0418 139.054 13.0418C140.088 13.0418 140.962 13.3903 141.689 14.0886Z" fill="white"/>
            <path className={"header__logo_text"} fillRule="evenodd" clipRule="evenodd" d="M149.335 12.4228C149.198 12.5516 148.968 12.4548 148.968 12.2665V5.94683C148.968 5.67497 148.749 5.45459 148.479 5.45459H147.232C146.961 5.45459 146.742 5.67497 146.742 5.94683V23.6022C146.742 23.8741 146.961 24.0944 147.232 24.0944H148.479C148.749 24.0944 148.968 23.8741 148.968 23.6022V23.0443C148.968 22.8534 149.21 22.757 149.351 22.8845L149.354 22.887L149.357 22.8895C149.618 23.1084 149.921 23.3257 150.264 23.5415C150.62 23.7651 151.05 23.954 151.551 24.1104L151.552 24.1105L151.552 24.1107C152.069 24.2693 152.604 24.3485 153.155 24.3485C154.81 24.3485 156.253 23.685 157.476 22.3764L157.477 22.3759C158.701 21.0572 159.314 19.4768 159.314 17.6457C159.314 15.806 158.697 14.221 157.464 12.9022C156.241 11.5856 154.802 10.9174 153.155 10.9174C152.603 10.9174 152.064 11.0011 151.539 11.1683C151.031 11.324 150.605 11.5082 150.265 11.7238C149.934 11.9255 149.625 12.1578 149.337 12.4206L149.336 12.4217L149.335 12.4228ZM155.868 14.3836C156.681 15.2739 157.088 16.357 157.088 17.6457C157.088 18.9255 156.681 20.0091 155.867 20.9085L155.867 20.9085C155.057 21.8044 154.155 22.2369 153.155 22.2369C152.102 22.2369 151.14 21.7901 150.263 20.8673C149.397 19.9395 148.968 18.8686 148.968 17.6457C148.968 16.4137 149.397 15.343 150.263 14.4241C151.14 13.4924 152.103 13.0417 153.155 13.0417C154.154 13.0417 155.056 13.4778 155.866 14.3821L155.867 14.3829L155.868 14.3836Z" fill="white"/>
            <path className={"header__logo_image"} fillRule="evenodd" clipRule="evenodd" d="M21.4188 23.7835H21.4269V23.6911L21.4357 23.7835H21.4438C22.0119 23.7835 22.5792 23.9028 23.0827 24.1413C23.8389 24.4997 24.6819 24.6999 25.5719 24.6999C27.5957 24.6999 29.7802 23.7657 31.4306 23.0597L31.859 22.8771C32.0202 22.8089 32.175 22.7442 32.3226 22.6845C32.6976 22.5326 32.9941 22.5305 33.0542 23.1395C33.1456 24.0639 33.122 24.9627 32.8819 26.2601C32.8599 26.3755 32.9729 26.4797 33.0916 26.4797H33.6477C33.7424 26.4797 33.8453 26.4275 33.8932 26.3432C34.429 25.1177 34.8865 23.5984 34.8395 22.0368C34.7966 20.6127 34.5728 19.8359 33.199 20.3874L31.6137 20.8797C31.234 20.9718 31.2348 20.6408 31.2349 20.3798C31.2349 20.248 31.2412 20.1153 31.2251 19.9841C31.1999 19.3367 31.1971 19.2558 32.3616 18.5615L34.6834 17.1333C34.8477 17.0251 35.0682 17.0578 35.1825 17.2189C35.9552 18.14 36.7562 19.595 36.8507 21.313C36.9702 23.486 36.6746 24.6675 36.3028 26.1532L36.28 26.2443C36.2658 26.3692 36.3635 26.4785 36.4881 26.4785H37.1287C37.2121 26.4785 37.2914 26.425 37.3222 26.3469C38.0093 24.8546 38.6757 23.022 38.5709 20.7902C38.4429 18.0665 37.4089 15.6268 35.8134 14.3618C35.3715 13.9952 34.9304 13.969 34.4606 14.2965L31.869 15.8174C31.0202 16.3356 30.7761 16.0548 30.5374 15.5774C30.4862 15.4749 30.4324 15.3738 30.3764 15.2739C30.1593 14.8829 29.9423 14.4627 30.4886 14.0705C30.7157 13.9073 31.4237 13.4183 32.2137 12.8724L32.2272 12.8632L32.2907 12.8194L32.3514 12.7776L32.3846 12.7549L32.3879 12.7525C33.4538 12.017 34.6134 11.2166 34.9224 10.9904C35.4801 10.5821 35.9771 10.3581 36.3304 10.7022C37.7986 12.1324 39.9293 14.4461 40.6975 17.6062C41.3993 20.4928 40.7238 23.1843 40.0993 25.6728L40.007 26.0414L39.9626 26.2197C39.9309 26.3516 40.0298 26.4803 40.1642 26.4803H40.7675C40.8409 26.4803 40.9092 26.4394 40.9463 26.3753C42.4138 23.5079 43.3175 20.2433 42.6258 16.4589C41.8939 12.4542 38.9172 9.22454 37.1417 7.61523L37.1195 7.59496C36.5725 7.09899 36.063 6.63679 34.9224 7.42732C33.7664 8.22849 28.0173 12.08 27.4775 12.4149C26.9377 12.7498 26.3238 13.0134 25.7654 12.9805C24.3324 12.8959 23.1215 12.8536 21.4422 12.8536H21.4357L21.4269 12.9459V12.8536H21.4204C19.741 12.8536 18.5302 12.8959 17.0971 12.9805C16.5388 13.0134 15.9249 12.7498 15.3851 12.4149C14.8453 12.08 9.09617 8.22849 7.94016 7.42732C6.79956 6.63679 6.29002 7.09899 5.74301 7.59496L5.72083 7.61523C3.94536 9.22454 0.968688 12.4542 0.236716 16.4589C-0.454981 20.2433 0.448729 23.5079 1.91626 26.3753C1.95335 26.4394 2.02163 26.4803 2.0951 26.4803H2.69831C2.83275 26.4803 2.93162 26.3516 2.89992 26.2197C2.855 26.0386 2.80924 25.8562 2.76321 25.6728C2.13871 23.1843 1.46328 20.4928 2.16502 17.6062C2.93322 14.4461 5.06397 12.1324 6.53214 10.7022C6.88546 10.3581 7.38248 10.5821 7.94016 10.9904C8.24941 11.2168 9.41113 12.0186 10.4779 12.7549L10.5103 12.777L10.6569 12.8783L10.7181 12.9207L10.7395 12.9355C11.4925 13.4556 12.1556 13.9137 12.374 14.0705C12.9202 14.4627 12.7033 14.8829 12.4861 15.2739C12.4301 15.3738 12.3764 15.4749 12.3252 15.5774C12.0865 16.0548 11.8424 16.3356 10.9936 15.8174L8.40191 14.2965C7.93213 13.969 7.49101 13.9952 7.04918 14.3618C5.45367 15.6268 4.41963 18.0665 4.29167 20.7902C4.18683 23.022 4.85321 24.8546 5.54035 26.3469C5.57112 26.425 5.6505 26.4785 5.73383 26.4785H6.37443C6.49902 26.4785 6.59677 26.3692 6.58255 26.2443L6.55975 26.1532C6.18795 24.6675 5.89235 23.486 6.01186 21.313C6.10634 19.595 6.90732 18.14 7.68002 17.2189C7.79434 17.0578 8.01485 17.0251 8.17917 17.1333L10.5009 18.5615C11.6655 19.2558 11.6626 19.3367 11.6374 19.9841C11.6249 20.0865 11.626 20.1898 11.6271 20.2928L11.6277 20.3798C11.6278 20.6408 11.6286 20.9718 11.2488 20.8797L9.6636 20.3874C8.28973 19.8359 8.06594 20.6127 8.02308 22.0368C7.97609 23.5984 8.43352 25.1177 8.96935 26.3432C9.01729 26.4275 9.12014 26.4797 9.21486 26.4797H9.77091C9.8897 26.4797 10.0027 26.3755 9.98065 26.2601C9.74055 24.9627 9.71696 24.0639 9.8083 23.1395C9.86847 22.5305 10.1649 22.5326 10.54 22.6845C10.8083 22.7931 11.1007 22.918 11.4122 23.0511L11.4319 23.0597C13.0823 23.7657 15.2669 24.6999 17.2906 24.6999C18.1807 24.6999 19.0236 24.4997 19.7799 24.1413C20.2834 23.9028 20.8506 23.7835 21.4188 23.7835ZM19.3363 19.873C19.4491 19.8194 19.7272 19.9868 19.6661 20.0964C19.176 20.9754 18.2416 21.5695 17.1693 21.5695C15.589 21.5695 14.3078 20.2791 14.3078 18.6874C14.3078 17.0957 15.589 15.8053 17.1693 15.8053C18.2416 15.8053 19.176 16.3993 19.6661 17.2784C19.7272 17.3879 19.4491 17.5554 19.3363 17.5018C19.1682 17.422 18.9804 17.3773 18.7822 17.3773C18.0639 17.3773 17.4815 17.9638 17.4815 18.6874C17.4815 19.411 18.0639 19.9974 18.7822 19.9974C18.9804 19.9974 19.1682 19.9528 19.3363 19.873ZM25.65 21.5695C26.7222 21.5695 27.6566 20.9754 28.1468 20.0964C28.2078 19.9868 27.9297 19.8194 27.8169 19.873C27.6488 19.9528 27.461 19.9974 27.2628 19.9974C26.5445 19.9974 25.9621 19.411 25.9621 18.6874C25.9621 17.9638 26.5445 17.3773 27.2628 17.3773C27.461 17.3773 27.6488 17.422 27.8169 17.5018C27.9297 17.5554 28.2078 17.3879 28.1468 17.2784C27.6566 16.3993 26.7222 15.8053 25.65 15.8053C24.0696 15.8053 22.7884 17.0957 22.7884 18.6874C22.7884 20.2791 24.0696 21.5695 25.65 21.5695Z" fill="#3393FF"/>
            <path className={"header__logo_image"} d="M14.2886 9.5225L15.2322 8.47161L17.6412 10.3889L15.2107 11.2057L14.2886 9.5225Z" fill="white"/>
            <path className={"header__logo_image"}d="M28.5188 10.9418C28.6336 6.02633 25.7066 1.30536 22.5588 0.252566C19.411 -0.800227 15.5585 1.51592 13.4166 5.75406C14.6661 5.98493 16.0031 5.72022 17.2622 4.99634C15.8024 6.09601 14.4647 9.47138 14.7744 11.6196L21.1599 13.4844L28.5188 10.9418Z" fill="#DB233A"/>
            <path className={"header__logo_image"} d="M17.3321 14.8276C20.7055 15.9352 24.9772 14.8851 26.3433 14.1857C27.8242 13.434 28.7085 12.5834 28.994 11.7034C29.4148 10.3925 28.8735 9.12016 28.447 9.33442C28.447 9.33442 27.6438 10.6775 26.6313 11.2911C25.7722 11.8131 24.5429 12.0983 23.6174 12.2203C21.3442 12.5151 14.5411 11.9125 14.6379 9.5469C14.6665 8.84538 13.6041 10.1655 13.6265 10.9363C13.6999 13.2087 15.9561 14.3764 17.3321 14.8276Z" fill="white"/>
            <path className={"header__logo_image"} d="M12.2575 8.08939C13.1237 8.221 13.9326 7.62548 14.0642 6.75926C14.1958 5.89304 13.6003 5.08415 12.7341 4.95254C11.8678 4.82094 11.0589 5.41646 10.9273 6.28268C10.7957 7.1489 11.3913 7.95779 12.2575 8.08939Z" fill="white"/>
        </svg>
    )
}

export const SVG_HeaderLinkIcon = (props) => {
    const {width, height, color, className} = props

    return (
        <svg className={className || ""} width={width || "13px"} height={height || "13px"} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.92308 1H2C1.44771 1 1 1.44772 1 2V11C1 11.5523 1.44772 12 2 12H11C11.5523 12 12 11.5523 12 11V6.07692" stroke={color ||  variables.colorBasicBlue} strokeLinejoin="round"/>
            <path d="M5 8L12 1" stroke={color ||  variables.colorBasicBlue} strokeLinejoin="round"/>
            <path d="M8.5 1L12 1V4.5" stroke={color ||  variables.colorBasicBlue}/>
        </svg>
    )
}
