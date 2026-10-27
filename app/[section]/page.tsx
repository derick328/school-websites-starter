import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {SchoolSite} from "@/components/SchoolSite";
import {isDemoMode,pageLabels,resolveSchool,type PageId} from "@/data/schools";

type Props={params:Promise<{section:string}>;searchParams:Promise<{school?:string}>};
const sectionNames=new Set<PageId>(["about","academics","admissions","life","news","gallery","contact"]);
export async function generateMetadata({params,searchParams}:Props):Promise<Metadata>{
  const [{section},{school}]=await Promise.all([params,searchParams]);
  if(!sectionNames.has(section as PageId))return {};
  const s=resolveSchool(school),label=pageLabels.find(p=>p.id===section)?.label??"School";
  return {title:`${label} | ${s.name}`,description:`${label} at ${s.name}. ${s.motto}`,robots:isDemoMode()?{index:false,follow:false}:undefined};
}
export default async function SectionPage({params,searchParams}:Props){
  const [{section},{school}]=await Promise.all([params,searchParams]);
  if(!sectionNames.has(section as PageId))notFound();
  return <SchoolSite school={resolveSchool(school)} page={section as PageId}/>;
}
