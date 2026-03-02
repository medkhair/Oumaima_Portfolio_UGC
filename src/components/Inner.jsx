
function Inner({ children, className = "" }) {
    return (
        <div className={`inner ${className}`}>
            {children}
        </div>
    );
}

export default Inner;