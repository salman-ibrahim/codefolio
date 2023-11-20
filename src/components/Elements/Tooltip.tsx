import { RefObject, createRef, useState } from "react";
import "@/assets/css/tooltip.css";
type Props = {
    children: React.ReactNode,
    text: string,
}

function Tooltip(props: Props) {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const calculateTooltipPosition = (buttonRef: RefObject<any>, tooltipRef: RefObject<any>) => {
    if (!buttonRef.current || !tooltipRef.current) return {};

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const position = {
      visibility: isTooltipVisible ? 'visible' : 'hidden',
      opacity: isTooltipVisible ? 1 : 0,
    };

    if (buttonRect.left + tooltipRect.width > window.innerWidth) {
      // Tooltip goes beyond the right edge of the screen
      position.left = 'auto';
      position.right = 0;
    } else {
      // Default positioning
      position.left = buttonRect.left + window.scrollX + buttonRect.width / 2 - tooltipRect.width / 2 + 'px';
      position.right = 'auto';
    }

    return position;
  };

  const buttonRef = createRef();
  const tooltipRef = createRef();

  const tooltipPosition = calculateTooltipPosition(buttonRef, tooltipRef);

  return (
    <div className="tooltip-container">
      <span
        className="tooltip-trigger"
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
        ref={buttonRef as any}
      >
        {props.children}
      </span>
      <div
        className={`tooltip`}
        style={tooltipPosition}
        ref={tooltipRef as any}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;