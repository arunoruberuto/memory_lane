import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MemberProfile } from "@/components/home/MemberProfile";
import { getMemberById, getOtherMembers, members } from "@/data/members";

type MemberPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return members.map((member) => ({
    id: member.id
  }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getMemberById(id);

  if (!member) {
    return {
      title: "Member Not Found / U卒業"
    };
  }

  return {
    title: `${member.name} / U卒業`,
    description: member.bio
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { id } = await params;
  const member = getMemberById(id);

  if (!member) {
    notFound();
  }

  return <MemberProfile member={member} otherMembers={getOtherMembers(member.id)} />;
}
