import { AiOutlineLeft } from 'react-icons/ai';
import PropTypes from "prop-types";
import styles from './styles.module.scss';

export function ButtonFlag({ primary, backgroundColor, size, label, ...props}){
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <button
            type="button"
            aria-label='click para o anterior'
            className={[`storybook-button`, `storybook-button--${size}`, mode].join('')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}<AiOutlineLeft />
        </button>
    )
}
ButtonFlag.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  ButtonFlag.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };