import type {Metadata} from "next";
import {SchoolSite} from "@/components/SchoolSite";
import {isDemoMode,resolveSchool} from "@/data/schools";

type Props={searchParams:Promise<{school?:string}>};
export async function generateMetadata({searchParams}:Props):Promise<Metadata>{
  const {school}=await searchParams;
  const s=resolveSchool(school);
  return {
    title:`${s.name} | ${s.motto}`,
    description:s.hero.summary,
    robots:isDemoMode()?{index:false,follow:false}:undefined,
  };
}
export default async function HomePage({searchParams}:Props) {
  const {school}=await searchParams;
  return <SchoolSite school={resolveSchool(school)}/>;
}
