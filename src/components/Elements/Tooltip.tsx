import { RefObject, createRef, useState } from "react";
import "@/assets/css/tooltip.css";

type Position = {
  visibility: string;
  opacity: number;
  left?: string;
  right?: string;
};

type Props = {
  children: React.ReactNode;
  text: string;
};

function Tooltip(props: Props) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const calculateTooltipPosition = (
    buttonRef: RefObject<HTMLSpanElement>,
    tooltipRef: RefObject<HTMLDivElement>
  ): Position => {
    if (!buttonRef.current || !tooltipRef.current) return { visibility: 'hidden', opacity: 0 };

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const position: Position = {
      visibility: isTooltipVisible ? 'visible' : 'hidden',
      opacity: isTooltipVisible ? 1 : 0,
    };

    if (buttonRect.left + tooltipRect.width > window.innerWidth) {
      // Tooltip goes beyond the right edge of the screen
      position.left = 'auto';
      position.right = '0';
    } else {
      // Default positioning
      position.left =
        buttonRect.left + window.scrollX + buttonRect.width / 2 - tooltipRect.width / 2 + 'px';
      position.right = 'auto';
    }

    return position;
  };

  const buttonRef = createRef<HTMLSpanElement>();
  const tooltipRef = createRef<HTMLDivElement>();

  const tooltipPosition = calculateTooltipPosition(buttonRef, tooltipRef);

  return (
    <div className="tooltip-container">
      <span className="tooltip-trigger" onMouseOver={showTooltip} onMouseOut={hideTooltip} ref={buttonRef}>
        {props.children}
      </span>
      <div className={`tooltip`} style={tooltipPosition as React.CSSProperties} ref={tooltipRef}>
        {props.text}
      </div>
    </div>
  );
}

export default Tooltip;
