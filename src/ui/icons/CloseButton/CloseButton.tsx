import React, {FC} from 'react'
import Icon, {IconProps} from "../Icon";

const CloseButton: FC<IconProps> = ({
                                        width,
                                        height,
                                        originalWidth,
                                        originalHeight,
                                        color,
                                        fill,
                                        isWhiteOrRed,
                                        ...props
                                    }) => (
    <Icon
        width={width}
        height={height}
        originalHeight={originalHeight}
        originalWidth={originalWidth}
        {...props}
    >
        <path
            d="M17.9282 23.9151L25.3197 16.2926C26.2268 15.3572 26.2268 13.8406 25.3197 12.9045L23.677 11.2104C22.7699 10.275 21.2993 10.275 20.3915 11.2104L13 18.8329L5.60847 11.2104C4.70142 10.275 3.2308 10.275 2.32301 11.2104L0.680284 12.9045C-0.226761 13.8398 -0.226761 15.3564 0.680284 16.2926L8.07182 23.9151L0.680284 31.5376C-0.226761 32.473 -0.226761 33.9896 0.680284 34.9257L2.32301 36.6198C3.23006 37.5552 4.70142 37.5552 5.60847 36.6198L13 28.9973L20.3915 36.6198C21.2986 37.5552 22.7699 37.5552 23.677 36.6198L25.3197 34.9257C26.2268 33.9904 26.2268 32.4738 25.3197 31.5376L17.9282 23.9151Z"
            fill="#CDD6CF"
        />
    </Icon>
)

CloseButton.defaultProps = {
    originalWidth: 26,
    originalHeight: 26,
    width: 26,
    height: 26,
    color: 'white',
}

export default CloseButton
