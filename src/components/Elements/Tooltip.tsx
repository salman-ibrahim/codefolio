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
        // TODO: Position the tooltip to the left of the content
    } else {
        // Default positioning
        // TODO: Position the tooltip to the right of the content
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