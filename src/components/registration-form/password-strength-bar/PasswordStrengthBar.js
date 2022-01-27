import zxcvbn from "zxcvbn";

const PasswordStrengthBar = ({ password }) => {
    const testResult = zxcvbn(password);
    const num = (testResult.score * 100) / 4;
    const progressColor = () => {
        switch (testResult.score) {
            case 0:
                return "#FF6596";
            case 1:
                return "#FF6596";
            case 2:
                return "#fbb407";
            case 3:
                return "#24CCA7";
            case 4:
                return "#24CCA7";

            default:
                return "none";
        }
    };

    const createPasswordLabel = () => {
        switch (testResult.score) {
            case 0:
                return "";
            case 1:
                return "Easy";
            case 2:
                return "Medium";
            case 3:
                return "Good";
            case 4:
                return "Awesome!";

            default:
                return "";
        }
    };

    const changeProgressStyle = () => ({
        width: "100%",
        height: "4px",
        marginTop: "-2px",
        backgroundColor: "#e0e0e0",
    });

    const changePasswordColor = () => ({
        position: "absolute",
        width: `${num}%`,
        height: "4px",
        background: progressColor(),
        borderRadius: "4px",
    });

    return (
        <>
            <div className="progress" style={changeProgressStyle()}>
                <div className="progress_bar" style={changePasswordColor()}>
                    &nbsp;
                </div>
            </div>
            <p
                className="text_pr"
                style={{
                    color: progressColor(),
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-50%)",
                    fontFamily: "Abel",
                    fontWeight: "700",
                    fontSize: "1.6rem",
                    letterSpacing: "0.1em",
                }}
            >
                {createPasswordLabel()}
            </p>
        </>
    );
};

export default PasswordStrengthBar;
