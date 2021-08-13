import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const UserProfile = () => {
  return (
    <Card
      action={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>YH</Avatar>} titile="YounhoNa" />
      <Button>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
