import { Navigate, useParams } from "react-router-dom";
import { MemberProfile } from "@/components/top/MemberProfile";
import { getMemberById, getOtherMembers } from "@/data/members";

export function MemberPage() {
  const { id } = useParams();
  const member = getMemberById(id);

  if (!member) {
    return <Navigate to="/" replace />;
  }

  return <MemberProfile member={member} otherMembers={getOtherMembers(member.id)} />;
}
