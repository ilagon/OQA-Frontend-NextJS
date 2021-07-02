import style from "../styles/ErrorBox.module.scss";

function ErrorBox({ErrorMessage}) {
    return (
        <div className={style.ErrorBox}>
            <p>{ErrorMessage}</p>
        </div>
    );
}

export default ErrorBox;
