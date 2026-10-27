import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import Icon from "./Icon";
import EnquiryForm from "./EnquiryForm";
import {isDemoMode, pageHref, pageLabels, presets, presetTitles, schools, type School, type PageId} from "@/data/schools";

function TextArrow({children}: {children:ReactNode}) { return <span className="text-link">{children}<Icon name="arrowUp" size={16}/></span>; }

function Brand({school, inverted=false}: {school:School;inverted?:boolean}) {
  return <Link href={pageHref(school,"home")} className={`brand ${inverted?"brand--inverse":""}`} aria-label={`${school.name} - homepage`}>
    <span className="brand__mark" aria-hidden="true">{school.logoGlyph}</span>
    <span className="brand__words"><strong>{school.shortName}</strong><small>{school.category}</small></span>
  </Link>;
}

function Header({school, current}: {school:School;current:PageId}) {
  return <>
    {isDemoMode() && <div className="demo-bar"><div className="container demo-bar__inner">
      <span className="demo-bar__label"><span className="live-pip"/> SCHOOL TEMPLATE STUDIO <span className="demo-bar__divider">/</span> VIEW A DESIGN</span>
      <div className="demo-options" aria-label="Choose school website preview">
        {presets.map(id=><Link key={id} href={`${current==="home"?"/":`/${current}`}?school=${id}`} className={school.id===id?"is-selected":""} aria-current={school.id===id?"page":undefined}>{presetTitles[id]}</Link>)}
      </div>
    </div></div>}
    <div className="announcement"><div className="container announcement__inner">
      <span className="announcement__lead"><span className="announcement__spark">✳</span> {school.motto}</span>
      <Link href={pageHref(school,"admissions")}>Discover admissions <Icon name="arrow" size={14}/></Link>
    </div></div>
    <header className="site-header"><div className="container site-header__inner">
      <Brand school={school}/>
      <nav className="desktop-nav" aria-label="Main navigation">{pageLabels.slice(0,7).map(page=><Link key={page.id} href={pageHref(school,page.id)} aria-current={current===page.id?"page":undefined} className={current===page.id?"active":""}>{page.label}</Link>)}</nav>
      <Link className="header-cta" href={pageHref(school,"contact")}>Get in touch <Icon name="arrowUp" size={17}/></Link>
      <details className="mobile-nav"><summary aria-label="Open navigation"><Icon name="menu" size={22}/></summary><nav aria-label="Mobile navigation">{pageLabels.map(page=><Link key={page.id} href={pageHref(school,page.id)} aria-current={current===page.id?"page":undefined}>{page.label} <Icon name="arrowUp" size={16}/></Link>)}</nav></details>
    </div></header>
  </>;
}

function Footer({school}: {school:School}) {
  return <footer className="footer"><div className="container">
    <div className="footer__top"><div className="footer__intro"><Brand school={school} inverted/><p>Learning with purpose, growing with heart. Every chapter begins with possibility.</p><span className="footer__pill">A brighter way to learn <span aria-hidden="true">✳</span></span></div>
      <div className="footer__links"><h3>Explore</h3>{pageLabels.slice(0,4).map(p=><Link key={p.id} href={pageHref(school,p.id)}>{p.label}</Link>)}</div>
      <div className="footer__links"><h3>Discover</h3>{pageLabels.slice(4).map(p=><Link key={p.id} href={pageHref(school,p.id)}>{p.label}</Link>)}</div>
      <div className="footer__contact"><h3>Say hello</h3><p>{school.contact.location}</p><a href={`mailto:${school.contact.email}`}>{school.contact.email}</a><p>{school.contact.phone}</p></div>
    </div>
    <div className="footer__bottom"><span>© {new Date().getFullYear()} {school.name}. Demo website — sample school identity.</span><span>Made for brighter school communities <span aria-hidden="true">✦</span></span></div>
  </div></footer>;
}

function SectionIntro({eyebrow,title,description,align="left"}: {eyebrow:string;title:string;description?:string;align?:"left"|"center"}) {
  return <div className={`section-intro section-intro--${align}`}><div className="kicker"><span className="kicker__line"/>{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function Hero({school}: {school:School}) {
  return <section className="hero"><div className="container hero__grid">
    <div className="hero__copy"><div className="hero__eyebrow"><span className="hero__eyebrow-mark">✦</span>{school.hero.eyebrow}</div>
      <h1>{school.hero.lead}<br/><em>{school.hero.emphasis}</em>{school.hero.tail}</h1>
      <p className="hero__summary">{school.hero.summary}</p>
      <div className="hero__actions"><Link className="button button--yellow" href={pageHref(school,"admissions")}>Explore admissions <Icon name="arrowUp" size={18}/></Link><Link className="button button--outline" href={pageHref(school,"about")}>Our story <Icon name="arrow" size={17}/></Link></div>
      <div className="hero__footnote"><div className="footnote-avatars" aria-hidden="true"><span>✳</span><span>✦</span><span>★</span></div><div><strong>Growing together, every day.</strong><small>{school.hero.note}</small></div></div>
    </div>
    <div className="hero__visual"><div className="hero__art"><img src={school.hero.image} alt={`Illustration of learners at ${school.shortName}`} width={800} height={670}/></div>
      <div className="hero__floating hero__floating--top"><span className="float-icon"><Icon name="sun" size={23}/></span><span><strong>A place to belong</strong><small>Every learner matters</small></span></div>
      <div className="hero__floating hero__floating--bottom"><span aria-hidden="true">✳</span><strong>{school.hero.sticker}</strong></div>
      <div className="hero__star" aria-hidden="true">✦</div>
    </div>
  </div></section>;
}

function Highlights({school}: {school:School}) {return <div className="highlights"><div className="container highlights__grid">{school.highlights.map(item=><div className="highlight" key={item.value}><span>{item.value} /</span><strong>{item.title}</strong><Icon name="sparkle" size={19}/></div>)}</div></div>}

function ProgramCard({school, program, index}: {school:School;program:School["programs"][number];index:number}) {
  return <Link href={pageHref(school,"academics")} className={`program-card program-card--${program.theme}`}><div className="program-card__upper"><span className="program-card__number">0{index+1} / {program.stage}</span><span className="program-card__icon"><Icon name={program.icon as "book"|"sun"|"rocket"|"flask"|"award"} size={28}/></span></div><div><h3>{program.name}</h3><p>{program.description}</p></div><span className="program-card__arrow"><Icon name="arrowUp" size={18}/></span></Link>;
}

function ExperienceCard({experience, index}: {experience:School["experiences"][number];index:number}) {
  const icons:("sparkle"|"leaf"|"award")[]=["sparkle","leaf","award"];
  return <article className={`experience-card experience-card--${index+1}`}><span className="experience-card__symbol"><Icon name={icons[index%3]} size={32}/></span><div className="experience-card__content"><span>{experience.category}</span><h3>{experience.name}</h3><p>{experience.description}</p></div><div className="experience-card__stripe" aria-hidden="true"/></article>;
}

function Cta({school}: {school:School}) {return <section className="cta-wrap"><div className="container"><div className="cta-panel"><div className="cta-panel__decor cta-panel__decor--one"/><div className="cta-panel__decor cta-panel__decor--two"/><div className="cta-panel__content"><span className="eyebrow-on-dark">YOUR NEXT CHAPTER STARTS HERE</span><h2>Where will your <em>journey</em> take you?</h2><p>We would love to hear your story. Explore the admissions process or get in touch to learn more.</p><Link className="button button--yellow" href={pageHref(school,"contact")}>Let's talk <Icon name="arrowUp" size={18}/></Link></div><div className="cta-panel__flower" aria-hidden="true">✳</div></div></div></section>}

function NewsGrid({school,full=false}: {school:School;full?:boolean}) {return <div className="news-grid">{school.news.map((article,i)=><article className="news-card" key={article.title}><div className={`news-card__visual news-card__visual--${i+1}`}><span className="news-card__shape" aria-hidden="true">{["✳","✦","◈"][i]}</span><span className="news-card__tag">{article.type}</span></div><div className="news-card__body"><span className="news-card__sample">{full?"SAMPLE EDITORIAL ARTICLE":"EDITORIAL IDEA"}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="news-card__end">{full?"Replace with your school's article":"School news inspiration"}<Icon name="arrowUp" size={17}/></span></div></article>)}</div>}

function Home({school}: {school:School}) {
  return <main><Hero school={school}/><Highlights school={school}/>
    <section className="section intro-section"><div className="container intro-section__grid"><div><div className="sticker-mini"><Icon name="heart" size={18}/> MADE FOR GROWING MINDS</div><SectionIntro eyebrow={school.introduction.kicker} title={school.introduction.title} description={school.introduction.body}/><Link className="inline-cta" href={pageHref(school,"about")}><TextArrow>Get to know our school</TextArrow></Link></div>
      <div className="welcome-composition"><div className="welcome-composition__block"><span className="welcome-composition__sun">✳</span><div><span>OUR PHILOSOPHY</span><h3>Learn with joy.<br/>Grow with purpose.</h3></div></div><div className="welcome-composition__note"><Icon name="leaf" size={30}/><p>Education is more than lessons — it's what inspires a love for learning.</p></div></div>
    </div></section>
    <section className="section section--soft"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="LEARNING AT EVERY STAGE" title="Find your place to flourish." description="Thoughtful pathways that help every learner grow in knowledge, confidence and character."/><Link className="inline-cta" href={pageHref(school,"academics")}><TextArrow>Explore academics</TextArrow></Link></div><div className="program-grid">{school.programs.map((program,i)=><ProgramCard key={program.name} school={school} program={program} index={i}/>)}</div></div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="WHAT MATTERS HERE" title="The little things make a big difference." description="The values behind every classroom, friendship and new discovery."/><div className="pillars-grid">{school.pillars.map((item,i)=><article className="pillar-card" key={item.title}><div className={`pillar-icon pillar-icon--${i+1}`}><Icon name={item.icon as "heart"|"sparkle"|"book"|"award"|"compass"|"users"|"layers"|"rocket"} size={28}/></div><span className="pillar-card__number">0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section life-feature"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="LIFE BEYOND LESSONS" title="Learning happens everywhere." description="The moments outside the classroom matter just as much as those inside."/><Link className="inline-cta" href={pageHref(school,"life")}><TextArrow>Explore school life</TextArrow></Link></div><div className="experience-grid">{school.experiences.map((item,i)=><ExperienceCard key={item.name} experience={item} index={i}/>)}</div></div></section>
    <section className="section section--cream"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="IDEAS, STORIES & UPDATES" title="A little news. A lot of heart." description="Example editorial cards, ready to be replaced by actual school announcements."/><Link className="inline-cta" href={pageHref(school,"news")}><TextArrow>Browse news</TextArrow></Link></div><NewsGrid school={school}/></div></section>
    <Cta school={school}/>
  </main>;
}

function PageHero({school,kicker,title,description}: {school:School;kicker:string;title:string;description:string}) {
  return <section className="page-hero"><div className="container page-hero__inner"><div><span className="page-hero__kicker"><span>✳</span>{kicker}</span><h1>{title}</h1><p>{description}</p></div><div className="page-hero__symbol" aria-hidden="true">{school.logoGlyph}</div></div></section>;
}

function About({school}: {school:School}) {return <main><PageHero school={school} kicker="OUR STORY" title="More than a school. A place to belong." description={school.introduction.body}/>
  <section className="section"><div className="container about-story"><div className="about-visual"><img src={school.hero.image} alt="Illustration showing learners and their school"/></div><div className="about-story__text"><SectionIntro eyebrow="WELCOME TO OUR COMMUNITY" title={school.introduction.title}/><p>We want every learner to be seen, encouraged and equipped for whatever comes next. Our community is built around strong relationships, meaningful learning and opportunities for every student to discover their strengths.</p><div className="about-chip-list"><span><Icon name="check" size={17}/> Thoughtful teaching</span><span><Icon name="check" size={17}/> A caring environment</span><span><Icon name="check" size={17}/> Confident learners</span></div></div></div></section>
  <section className="section section--soft"><div className="container"><div className="values-grid"><article className="value-panel"><span>01 / OUR MISSION</span><Icon name="compass" size={33}/><h2>What drives us.</h2><p>{school.mission}</p></article><article className="value-panel value-panel--yellow"><span>02 / OUR VISION</span><Icon name="sun" size={33}/><h2>What we imagine.</h2><p>{school.vision}</p></article></div></div></section>
  <section className="section"><div className="container"><SectionIntro eyebrow="THE WAY WE WORK" title="Values we live, every day."/><div className="pillars-grid">{school.pillars.map((p,i)=><article key={p.title} className="pillar-card"><div className={`pillar-icon pillar-icon--${i+1}`}><Icon name={p.icon as "heart"|"sparkle"|"book"|"award"|"compass"|"users"|"layers"|"rocket"} size={29}/></div><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></div></section>
  <section className="section section--cream"><div className="container"><div className="principal-quote"><div className="principal-quote__mark">“</div><blockquote>{school.principalMessage}</blockquote><span>EXAMPLE HEADTEACHER'S MESSAGE — REPLACE BEFORE LAUNCH</span></div></div></section><Cta school={school}/></main>}

function Academics({school}: {school:School}) {return <main><PageHero school={school} kicker="ACADEMIC PATHWAYS" title="Curiosity meets opportunity." description="Explore the learning stages designed to help students build skills, confidence and a lifelong love of discovery."/>
  <section className="section"><div className="container"><SectionIntro eyebrow="OUR LEARNING PATHWAYS" title="A pathway for every stage." description="These sample programme descriptions can be tailored to the school's real curriculum and offered levels."/><div className="program-grid program-grid--large">{school.programs.map((p,i)=><ProgramCard school={school} key={p.name} program={p} index={i}/>)}</div></div></section>
  <section className="section section--soft"><div className="container about-story"><div><SectionIntro eyebrow="MORE THAN EXAM RESULTS" title="Building learners for life." description="Great education develops more than subject knowledge. Our approach values independent thinking, communication, collaboration and character."/><div className="about-chip-list"><span><Icon name="check" size={17}/> Active learning</span><span><Icon name="check" size={17}/> Meaningful feedback</span><span><Icon name="check" size={17}/> Personal growth</span></div></div><div className="academics-art"><Icon name="book" size={78}/><div className="academics-art__sun">✳</div><h3>Learn.<br/>Explore.<br/><em>Become.</em></h3></div></div></section>
  <Cta school={school}/></main>}

function Admissions({school}: {school:School}) {return <main><PageHero school={school} kicker="JOIN OUR COMMUNITY" title="Your next chapter starts here." description="Starting a new school should feel exciting. Here is a simple example admissions journey that each school can customise."/>
  <section className="section"><div className="container"><SectionIntro eyebrow="HOW TO APPLY" title="Four steps to a fresh start." description="An easy, welcoming path from first enquiry to the first day."/><div className="steps-grid">{[{title:"Say hello",text:"Contact the school and tell us the age or class you are interested in.",icon:"mail"},{title:"Come and explore",text:"Arrange a school visit and meet the learning community.",icon:"pin"},{title:"Review requirements",text:"Receive the current admission criteria, fees and available places.",icon:"book"},{title:"Get ready to begin",text:"Complete your application and prepare for a great first day.",icon:"check"}].map((st,i)=><article key={st.title} className="step-card"><span className="step-card__number">0{i+1}</span><span className="step-card__icon"><Icon name={st.icon as "mail"|"pin"|"book"|"check"} size={26}/></span><h3>{st.title}</h3><p>{st.text}</p></article>)}</div>
    <div className="admissions-note"><Icon name="shield" size={23}/><p><strong>For the live school website:</strong> replace this sample admissions guidance with verified application dates, entry levels, fees, requirements and school policies. The demo does not collect applications.</p></div>
  </div></section><section className="section section--soft"><div className="container split-cta"><div><SectionIntro eyebrow="A COMMUNITY WORTH DISCOVERING" title="Have a question? We're here to help." description="Every school's admissions journey is unique. Reach out and start the conversation."/></div><Link className="button button--dark" href={pageHref(school,"contact")}>Make an enquiry <Icon name="arrowUp" size={18}/></Link></div></section></main>}

function Life({school}: {school:School}) {return <main><PageHero school={school} kicker="SCHOOL LIFE" title="So much more than a classroom." description="Friendships, creative expression, movement and opportunities that help every student discover who they can become."/>
  <section className="section"><div className="container"><SectionIntro eyebrow="EVERY DAY IS AN OPPORTUNITY" title="A world beyond the timetable." description="These experience categories are examples. Add your school's real clubs, sports, events and facilities."/><div className="experience-grid experience-grid--full">{school.experiences.map((e,i)=><ExperienceCard experience={e} index={i} key={e.name}/>)}</div></div></section>
  <section className="section section--soft"><div className="container"><SectionIntro eyebrow="WHAT MAKES SCHOOL FEEL LIKE HOME" title="A place to find your people."/><div className="pillars-grid">{school.pillars.map((item,i)=><article className="pillar-card" key={item.title}><div className={`pillar-icon pillar-icon--${i+1}`}><Icon name={item.icon as "heart"|"sparkle"|"book"|"award"|"compass"|"users"|"layers"|"rocket"} size={28}/></div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section><Cta school={school}/></main>}

function News({school}: {school:School}) {return <main><PageHero school={school} kicker="NEWS & STORIES" title="Stories worth sharing." description="A welcoming space for school announcements, learning highlights and community moments."/>
  <section className="section"><div className="container"><div className="sample-banner"><Icon name="sparkle" size={20}/><p><strong>Demo content:</strong> the articles below are editorial examples, not reports of real events. Replace them with approved school news and dates before launch.</p></div><NewsGrid school={school} full/></div></section><Cta school={school}/></main>}

const galleryCards=[{title:"Discover & explore",type:"LEARNING MOMENTS",icon:"sun"},{title:"Creative expression",type:"ARTS & CULTURE",icon:"sparkle"},{title:"A love of learning",type:"IN THE CLASSROOM",icon:"book"},{title:"Community together",type:"SCHOOL SPIRIT",icon:"heart"},{title:"Beyond the classroom",type:"CLUBS & SPORT",icon:"award"},{title:"A brighter tomorrow",type:"EVERYDAY MOMENTS",icon:"rocket"}];
function Gallery({school}: {school:School}) {return <main><PageHero school={school} kicker="GALLERY" title="The moments that make us." description="A gallery space for school photography, events and the everyday moments that matter."/>
  <section className="section"><div className="container"><div className="sample-banner"><Icon name="camera" size={21}/><p><strong>Illustration placeholders:</strong> swap these cards with genuine school photographs, published with appropriate permissions, especially when children are identifiable.</p></div><div className="gallery-grid">{galleryCards.map((item,i)=><div className={`gallery-tile gallery-tile--${i+1}`} key={item.title}><span className="gallery-tile__icon"><Icon name={item.icon as "sun"|"sparkle"|"book"|"heart"|"award"|"rocket"} size={47}/></span><div><span>{item.type}</span><h3>{item.title}</h3></div></div>)}</div></div></section><Cta school={school}/></main>}

function Contact({school}: {school:School}) {return <main><PageHero school={school} kicker="GET IN TOUCH" title="Good conversations start here." description="Questions about admissions, programmes or school life? We'd love to hear from you."/>
  <section className="section"><div className="container contact-grid"><div className="contact-details"><SectionIntro eyebrow="LET'S CONNECT" title="We're here to help." description="These are sample contact details. Update them with the school's verified information before launch."/>
    <div className="contact-list"><div><span><Icon name="pin" size={23}/></span><div><h3>Come visit</h3><p>{school.contact.location}</p></div></div><div><span><Icon name="phone" size={23}/></span><div><h3>Give us a call</h3><p>{school.contact.phone}</p></div></div><div><span><Icon name="mail" size={23}/></span><div><h3>Drop us a message</h3><a href={`mailto:${school.contact.email}`}>{school.contact.email}</a></div></div><div><span><Icon name="clock" size={23}/></span><div><h3>Office hours</h3><p>{school.contact.hours}</p></div></div></div></div>
    <div className="contact-form-card"><div className="contact-form-card__head"><span className="contact-form-card__symbol"><Icon name="send" size={26}/></span><h2>Send an enquiry</h2><p>We'd love to learn how we can help.</p></div><EnquiryForm schoolName={school.name} recipient={school.contact.email}/></div>
  </div></section></main>}

export function SchoolSite({school,page="home"}: {school:School;page?:PageId}) {
  const style={"--primary":school.palette.primary,"--primary-dark":school.palette.secondary,"--yellow":school.palette.accent,"--cream":school.palette.cream,"--tint":school.palette.tint} as CSSProperties;
  return <div className={`site site--${school.id}`} style={style}><Header school={school} current={page}/>{page==="home"?<Home school={school}/>:page==="about"?<About school={school}/>:page==="academics"?<Academics school={school}/>:page==="admissions"?<Admissions school={school}/>:page==="life"?<Life school={school}/>:page==="news"?<News school={school}/>:page==="gallery"?<Gallery school={school}/>:<Contact school={school}/>}<Footer school={school}/></div>;
}
