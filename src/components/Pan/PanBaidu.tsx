// https://nd-static.bdstatic.com/m-static/v20-main/home/img/icon-home-new.b4083345.png

import Pan from "./index";

export default function PanBaidu({url, password}) {
    const icon = (
        <img src="https://nd-static.bdstatic.com/m-static/v20-main/home/img/icon-home-new.b4083345.png" alt="百度网盘"/>
    )
    return (
        <Pan type="百度网盘" icon={icon} url={url} password={password} />
    )
}