import CustomButtonDelete from "./CustomButtonDelete";
import CustomButtonComplete from "./CustomButtonComplete";

function User(props) {
  return (
    <li className="square-style">
      <strong>{props.user.title}</strong>
      <p>{props.user.contents}</p>
      <div className="gp">
        <CustomButtonDelete
          color="white"
          gap="50px"
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </CustomButtonDelete>
        <CustomButtonComplete
          color="white"
          gap="50px"
          onClick={() => {
            props.handleChange(props.user.done);
            if (props.user.done === true) {
              props.user.done = false;
            } else {
              props.user.done = true;
            }
          }}
        >
          {props.user.done === true ? "완료" : "취소"}
        </CustomButtonComplete>
      </div>
    </li>
  );
}

export default User;
