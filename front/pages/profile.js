import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [
    { nickname: "나윤호" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];
  const followingList = [
    { nickname: "나윤호" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
