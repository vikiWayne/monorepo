import { IconTypes, SVGIconProps } from "./icons.types";

const getSvg = (name: IconTypes): JSX.Element => {
  switch (name) {
    case "alert-success":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="var(--colorCircle, currentColor)"
          />
          <path
            d="M12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0ZM9.6 18.4968L3.9516 12.8484L5.6484 11.1516L9.6 15.1032L18.3516 6.3516L20.0484 8.0484L9.6 18.4968Z"
            fill="var(--colorPath, currentColor)"
          />
        </svg>
      );

    case "alert-error":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="var(--colorCircle)" />
          <path
            d="M12 0C5.38278 0 0 5.38278 0 12C0 18.6172 5.38278 24 12 24C18.6172 24 24 18.6172 24 12C24 5.38278 18.6172 0 12 0ZM11.1652 6.62609C11.1652 6.52174 11.2174 6.41739 11.3739 6.41739H12.5739C12.6783 6.41739 12.7826 6.46956 12.7826 6.62609V13.6696C12.7826 13.7739 12.7304 13.8783 12.5739 13.8783H11.3739C11.2696 13.8783 11.1652 13.8261 11.1652 13.6696V6.62609ZM12.8348 17.3739C12.8348 17.4783 12.7826 17.5826 12.6261 17.5826H11.3739C11.2696 17.5826 11.1652 17.5304 11.1652 17.3739V16.0174C11.1652 15.913 11.2174 15.8087 11.3739 15.8087H12.6261C12.7304 15.8087 12.8348 15.8609 12.8348 16.0174V17.3739Z"
            fill="var(--colorPath)"
          />
        </svg>
      );

    case "alert-info":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="var(--colorCircle)" />
          <path
            d="M12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0ZM13.2 18H10.8V10.8H13.2V18ZM13.2 8.4H10.8V6H13.2V8.4Z"
            fill="var(--colorPath)"
          />
        </svg>
      );

    case "alert-warning":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="var(--colorCircle)" />
          <path
            d="M24 21.3333V2.66667C24 1.19333 22.8067 0 21.3333 0H2.66667C1.19333 0 0 1.19333 0 2.66667V21.3333C0 22.8067 1.19333 24 2.66667 24H21.3333C22.8067 24 24 22.8067 24 21.3333ZM10.6667 8V5.33333H13.3333V8H10.6667ZM10.6667 18.6667V10.6667H13.3333V18.6667H10.6667Z"
            fill="var(--colorPath)"
          />
        </svg>
      );

    case "checkbox-default":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 0.5H17.5C19.1569 0.5 20.5 1.84315 20.5 3.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H3.5C1.84315 20.5 0.5 19.1569 0.5 17.5V3.5C0.5 1.84315 1.84315 0.5 3.5 0.5Z"
            fill="var(--fillCheckbox)"
            stroke="var(--strokeCheckbox)"
          />
        </svg>
      );

    case "checkbox-checked":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 0.5H17.5C19.1569 0.5 20.5 1.84315 20.5 3.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H3.5C1.84315 20.5 0.5 19.1569 0.5 17.5V3.5C0.5 1.84315 1.84315 0.5 3.5 0.5Z"
            fill="var(--checkedBg)"
            stroke="var(--checkedStroke)"
          />
          <path
            d="M6.12506 10.3916L8.80434 13.0707L14.0001 7.875"
            stroke="var(--tickColor)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "radio-default":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9"
            cy="9"
            r="8.5"
            fill="var(--radioUncheckedFill)"
            stroke="var(--radioUncheckStroke)"
          />
        </svg>
      );

    case "radio-checked":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9"
            cy="9"
            r="8.5"
            fill="var(--radioCheckedFill)"
            stroke="var(--radioCheckStroke)"
          />
          <path
            d="M5.25 8.90707L7.54652 11.2035L12 6.75"
            stroke="var(--radioTick)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "fallbackImage":
      return (
        <svg viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.1 0.5H2.9C1.574 0.5 0.5 1.574 0.5 2.9V17.3C0.5 18.626 1.574 19.7 2.9 19.7H22.1C23.426 19.7 24.5 18.626 24.5 17.3V2.9C24.5 1.574 23.426 0.5 22.1 0.5ZM10.1 5.3C10.7624 5.3 11.3 5.8376 11.3 6.5C11.3 7.1624 10.7624 7.7 10.1 7.7C9.4376 7.7 8.9 7.1624 8.9 6.5C8.9 5.8376 9.4376 5.3 10.1 5.3ZM20.9 16.1H4.1L8.2988 10.7012L11.3 14.312L15.5 8.9012L20.9 16.1Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return <svg />;
  }
};

export const SVGIcon = (props: SVGIconProps) => {
  return getSvg(props.name);
};
