// https://nd-static.bdstatic.com/m-static/v20-main/home/img/icon-home-new.b4083345.png

import Pan from "./index";

export default function PanBaidu({url, password}) {
    const icon = (
        <img src="https://img.alicdn.com/imgextra/i2/O1CN011vHpiQ251TseXpbH7_!!6000000007466-2-tps-120-120.png" alt="阿里云盘"/>
    )
    return (
        <Pan type="阿里云盘" icon={icon} url={url} password={password} />
    )
}