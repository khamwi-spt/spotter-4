import React, { useState, useRef, useEffect } from "react";

// ── Brand tokens ──────────────────────────────────────────────
const PURPLE = "#9B6FE4";
const BLUE   = "#6EB4F7";
const GRAD   = "linear-gradient(135deg, #9B6FE4 0%, #6EB4F7 100%)";
const CARD_BG= "#22223B";
const TEXT   = "#F0EFFF";
const MUTED  = "#8887A8";
const BG     = "#12121F";
const GREEN  = "#4ADE80";
const SPOT   = "#F7A26E";  // Spot / target colour — warm orange

// ── SVG Icons ─────────────────────────────────────────────────
const SpotterLogo = ({ height = 36 }) => {
  const aspect = 550 / 490;
  const width = height * aspect;
  return (
    <svg width={width} height={height} viewBox="424 0 550 490" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sLg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9B6FE4"/><stop offset="100%" stopColor="#6EB4F7"/></linearGradient></defs>
      <path d="M 629.00 246.58 L 629.00 246.61 C629.00,246.71 629.00,246.79 628.96,246.83 C628.76,247.07 627.44,246.33 619.06,241.64 L 618.50 241.33 C568.19,213.17 545.09,164.08 557.66,112.00 C563.74,86.81 578.68,64.93 602.00,47.05 C621.58,32.05 644.76,22.56 674.50,17.40 C690.71,14.58 719.52,15.05 738.00,18.42 C761.11,22.63 782.60,29.16 799.62,37.13 C802.99,38.71 807.00,40.00 808.53,40.00 C810.06,40.00 812.70,41.06 814.41,42.36 C816.11,43.65 818.62,45.06 820.00,45.49 C824.80,47.00 848.55,64.70 866.50,80.17 L 878.21 90.26 L 889.36 79.17 C902.35,66.25 906.25,64.05 916.28,64.02 C927.58,63.99 935.54,68.79 940.55,78.67 C944.39,86.26 944.68,96.05 941.25,103.03 C939.68,106.24 927.71,118.87 900.27,146.25 C878.94,167.53 860.02,186.02 858.22,187.35 C848.26,194.67 832.02,193.04 823.36,183.84 C817.90,178.04 815.68,172.40 815.76,164.50 C815.85,154.61 817.76,151.00 828.86,139.67 L 838.50 129.85 L 833.00 124.91 C829.97,122.20 822.33,116.02 816.00,111.18 C779.45,83.19 744.51,66.72 708.62,60.53 C696.64,58.47 671.21,58.51 658.95,60.61 C633.70,64.95 610.94,76.69 595.33,93.41 C578.50,111.44 571.69,129.39 571.78,155.50 C571.86,179.46 577.79,196.63 592.26,214.82 C598.33,222.46 616.89,238.80 625.25,243.88 C627.31,245.14 629.00,246.35 629.00,246.58 Z" fill="rgb(147,160,230)"/>
      <path d="M 728.20 474.51 C721.26,475.42 710.26,475.93 699.70,475.83 C678.62,475.61 676.40,475.44 662.00,472.93 C627.76,466.95 593.40,454.41 562.50,436.60 C547.63,427.33 556.00,431.59 559.03,433.14 C562.00,434.95 563.17,435.58 564.00,435.68 C570.45,437.93 576.50,440.46 608.02,453.64 C635.62,459.58 670.50,460.66 688.20,461.21 C711.73,459.50 721.00,457.00 741.60,451.42 C757.77,445.47 764.25,441.08 769.00,437.04 C772.39,435.59 775.67,434.97 780.81,431.44 C789.40,423.90 794.22,419.90 795.09,419.40 C797.17,418.22 811.31,401.29 817.56,390.29 C822.33,381.98 826.50,367.50 829.08,358.00 C831.41,327.73 829.67,322.68 822.99,299.00 C815.12,283.23 807.65,275.24 800.02,265.38 C791.95,256.83 788.39,256.27 783.33,253.62 C778.45,249.00 765.34,239.89 740.38,225.10 C719.17,213.00 712.25,199.10 714.97,182.57 C719.65,172.91 728.64,167.04 739.98,166.24 L 746.50 165.78 L 765.50 175.32 C800.34,192.82 823.14,209.79 840.97,231.50 C862.55,257.78 874.01,289.86 873.99,324.00 C873.98,344.97 871.37,358.87 863.95,377.38 C843.16,429.22 791.56,466.14 728.20,474.51 Z" fill="rgb(147,160,230)"/>
      <path d="M 764.85 239.55 C772.61,244.99 786.08,257.66 806.46,284.78 C813.49,299.03 816.61,316.47 814.99,332.50 C811.86,363.54 793.10,388.89 761.50,404.76 C709.62,430.81 632.19,417.92 563.18,371.74 L 555.86 366.84 L 564.73 357.67 C574.82,347.24 575.84,332.76 562.00,310.15 C549.00,307.50 536.85,309.32 450.53,395.75 C448.52,401.41 451.34,421.23 463.74,432.88 C470.05,436.19 488.37,432.49 503.89,419.11 L 516.18 407.25 L 526.54 414.50 C541.54,424.55 559.00,435.07 576.50,440.46 C608.02,453.64 662.00,472.93 699.70,475.83 C728.20,474.51 791.56,466.14 863.95,377.38 C873.99,324.00 840.97,231.50 765.50,175.32 L 746.50 165.78 L 739.98 166.24 C719.65,172.91 715.59,205.80 740.38,225.10 C759.96,235.07 786.08,257.66 814.99,332.50 C764.85,239.55 764.85,239.55 764.85,239.55 Z" fill="rgb(188,152,232)"/>
      <circle cx="460" cy="339" r="22" fill="rgb(188,152,232)"/>
      <circle cx="707" cy="310" r="28" fill="rgb(188,152,232)"/>
      <circle cx="921" cy="175" r="22" fill="rgb(147,160,230)"/>
      <circle cx="675" cy="165" r="22" fill="rgb(147,160,230)"/>
    </svg>
  );
};

const DumbbellIcon = ({ size=22, color="currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="9" width="4" height="6" rx="1.5" fill={color}/>
    <rect x="18" y="9" width="4" height="6" rx="1.5" fill={color}/>
    <rect x="6" y="10.5" width="12" height="3" rx="1" fill={color}/>
    <rect x="5" y="7.5" width="2" height="9" rx="1" fill={color}/>
    <rect x="17" y="7.5" width="2" height="9" rx="1" fill={color}/>
  </svg>
);

const ProteinShakeIcon = ({ size=22, color="currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M8.5 3h7l0.8 3.5H7.7L8.5 3z" fill={color} opacity="0.9"/>
    <path d="M7.7 6.5L9 19.5A1.5 1.5 0 0010.5 21h3a1.5 1.5 0 001.5-1.5l1.3-13H7.7z" fill={color} opacity="0.7"/>
    <path d="M16 5.5 Q18.5 4 20 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const PersonIcon = ({ size=22, color="currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

const CheckIcon = ({ size=22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Target/bullseye icon for Spot feature
const TargetIcon = ({ size=22, color="#F7A26E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

const BoostIcon = ({ size=26, color="white" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

// ── Toggle ────────────────────────────────────────────────────
const Toggle = ({ on, onToggle }) => (
  <div onClick={onToggle} style={{
    width:46,height:26,borderRadius:13,cursor:"pointer",flexShrink:0,
    background:on?GRAD:CARD_BG,border:`1px solid ${on?"transparent":MUTED+"44"}`,
    position:"relative",transition:"background 0.25s",
  }}>
    <div style={{position:"absolute",top:3,left:on?22:3,width:18,height:18,
      borderRadius:"50%",background:"white",transition:"left 0.25s",
      boxShadow:"0 1px 4px rgba(0,0,0,0.3)"}}/>
  </div>
);

// ── WorkoutBadge ──────────────────────────────────────────────
const BADGE_COLORS = {
  "Weightlifting":"#9B6FE4","CrossFit":"#E46FA0","Hyrox":"#F7A26E",
  "Yoga":"#6ED4A0","Running":"#6EB4F7","Pilates":"#B46EF7",
  "Calisthenics":"#F7D06E","HIIT":"#F76E6E","General Classes":"#6EE7D4",
};
const WorkoutBadge = ({ label, small }) => {
  const color = BADGE_COLORS[label] || PURPLE;
  return (
    <span style={{display:"inline-flex",alignItems:"center",background:color+"22",
      border:`1px solid ${color}55`,color,borderRadius:20,
      padding:small?"3px 10px":"5px 14px",fontSize:small?11:13,fontWeight:600,
      fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.02em"}}>{label}</span>
  );
};

// ── LookingFor ────────────────────────────────────────────────
const LOOKING_FOR_OPTIONS = [
  {id:"serious",  label:"Life Spotter",    sub:"My forever gym partner",   icon:"💍"},
  {id:"shortterm",label:"Spot & See",      sub:"Short-term, open to more", icon:"🌱"},
  {id:"buddy",    label:"Gym Buddy",       sub:"No romance, just gains",   icon:"🏋️"},
  {id:"anything", label:"Open to Anything",sub:"Let's see where it goes",  icon:"✨"},
];
const LF_COLORS = {serious:"#F7A26E",shortterm:"#6EB4F7",buddy:"#6ED4A0",anything:"#B46EF7"};
const LookingForBadge = ({ id, small }) => {
  const opt = LOOKING_FOR_OPTIONS.find(o=>o.id===id);
  if (!opt) return null;
  const color = LF_COLORS[id] || PURPLE;
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:4,background:color+"22",
      border:`1px solid ${color}55`,color,borderRadius:20,
      padding:small?"3px 10px":"5px 14px",fontSize:small?11:13,fontWeight:600,
      fontFamily:"'DM Sans', sans-serif"}}>
      {opt.icon} {small?opt.label:`${opt.label} · ${opt.sub}`}
    </span>
  );
};

// ── Constants ─────────────────────────────────────────────────
const WORKOUT_OPTIONS = ["Weightlifting","CrossFit","Hyrox","Yoga","Running","Pilates","Calisthenics","HIIT","General Classes"];
const LEVEL_OPTIONS   = ["Beginner","Intermediate","Advanced"];
const TIME_OPTIONS    = ["🌅 Early Bird · 5–9am","☀️ Morning · 9am–12pm","⚡ Afternoon · 12–4pm","🌆 Evening · 4–8pm","🌙 Night Owl · 8–11pm"];

const PROMPT_BANK = [
  { id:"neverSkip",   q:"Never skipping…" },
  { id:"worstHabit",  q:"My worst gym habit is…" },
  { id:"hateLike",    q:"The exercise I pretend to like but hate is…" },
  { id:"lookingFor",  q:"Looking for someone who…" },
  { id:"postWorkout", q:"Post-workout I always…" },
  { id:"pumpSong",    q:"My go-to pump-up song is…" },
  { id:"beatYou",    q:"I bet I could beat you at…" },
];

// ── Sample data ───────────────────────────────────────────────
const PHOTOS = {
  jordan:["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80","https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"],
  alex:["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80","https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"],
  sam:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80","https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80","https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80"],
  riley:["https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80","https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80","https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"],
  morgan:["https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80","https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80","https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80"],
};
const PROFILES = [
  {id:1,name:"Jordan",age:27,photos:PHOTOS.jordan,workouts:["Weightlifting","Hyrox"],gym:"Gold's Gym, JLT",distance:"1.2 km",level:"Advanced",time:"🌅 Early Bird · 5–9am",lookingFor:"serious",exercises:["Deadlifts","Bench Press","Barbell Rows","Pull-ups","Front Squat"],bio:"Chasing PRs and good vibes. Looking for someone to suffer through leg day with 🏋️",spotted:true,verified:true,
    prompts:[
      {id:"neverSkip",  a:"Leg day. Every. Single. Monday. No excuses."},
      {id:"beatYou",   a:"Any sled push race. No mercy."},
      {id:"postWorkout",a:"A double espresso and 40g of protein. In that order."},
    ]},
  {id:2,name:"Alex",age:24,photos:PHOTOS.alex,workouts:["CrossFit","Running"],gym:"CrossFit Dubai, DIFC",distance:"3.4 km",level:"Intermediate",time:"☀️ Morning · 9am–12pm",lookingFor:"anything",exercises:["Thrusters","Double Unders","Box Jumps","Muscle-ups","Kettlebell Swings"],bio:"5am WODs and weekend 10Ks. Fuelled by pre-workout and optimism ☀️",spotted:false,verified:false,
    prompts:[
      {id:"pumpSong",   a:"Eye of the Tiger. Unironically. Every time."},
      {id:"worstHabit", a:"Checking my phone between every set. Working on it."},
      {id:"lookingFor", a:"Someone who won't bail on our 6am session when it's raining."},
    ]},
  {id:3,name:"Sam",age:29,photos:PHOTOS.sam,workouts:["Yoga","Pilates"],gym:"Warehouse Gym, Business Bay",distance:"0.8 km",level:"Beginner",time:"🌆 Evening · 4–8pm",lookingFor:"buddy",exercises:["Sun Salutation","Warrior Flow","Pigeon Pose","Core Plank","Hip Openers"],bio:"Movement is medicine. Looking for mindful gym dates and açaí bowls after 🧘",spotted:false,verified:true,
    prompts:[
      {id:"hateLike",   a:"Hot yoga. I smile through it. I am suffering."},
      {id:"postWorkout",a:"Açaí bowl, shower, 20 minutes of doing absolutely nothing."},
      {id:"lookingFor", a:"Someone who understands rest days are sacred."},
    ]},
  {id:4,name:"Riley",age:31,photos:PHOTOS.riley,workouts:["Hyrox","HIIT"],gym:"Fitness First, Marina",distance:"2.1 km",level:"Advanced",time:"🌅 Early Bird · 5–9am",lookingFor:"shortterm",exercises:["Sled Push","Wall Balls","Burpee Broad Jumps","SkiErg","Farmers Carry"],bio:"Hyrox is my love language. Let's race to the finish line together 🏁",spotted:false,verified:false,
    prompts:[
      {id:"neverSkip",  a:"SkiErg. It's where the magic happens."},
      {id:"beatYou",   a:"A 5K time trial. I run scared."},
      {id:"pumpSong",   a:"Anything above 160 BPM. I don't make the rules."},
    ]},
  {id:5,name:"Morgan",age:28,photos:PHOTOS.morgan,workouts:["HIIT","CrossFit"],gym:"GymNation, Al Quoz",distance:"4.1 km",level:"Intermediate",time:"☀️ Morning · 9am–12pm",lookingFor:"anything",exercises:["Burpees","Box Jumps","Battle Ropes","Sprint Intervals","Mountain Climbers"],bio:"High intensity, good vibes only. Let's sweat together 💪",spotted:false,verified:false,
    prompts:[
      {id:"worstHabit", a:"Hogging the battle ropes for way too long. Sorry not sorry."},
      {id:"hateLike",   a:"Stretching. I know. I know."},
      {id:"lookingFor", a:"Someone who matches my energy and doesn't judge my pre-workout face."},
    ]},
];
const MATCHES_DATA = [
  {id:1,name:"Jordan",age:27,photos:PHOTOS.jordan,workouts:["Weightlifting","Hyrox"],lastMsg:"Hey! Want to hit the gym this week?",time:"2m",unread:true,
    prompts:[{id:"neverSkip",a:"Leg day. Every. Single. Monday."},{id:"beatYou",a:"Any sled push race. No mercy."}]},
  {id:2,name:"Riley",age:31,photos:PHOTOS.riley,workouts:["Hyrox","HIIT"],lastMsg:"That sled push session sounds brutal 😅",time:"1h",unread:false,
    prompts:[{id:"neverSkip",a:"SkiErg. It's where the magic happens."},{id:"beatYou",a:"A 5K time trial. I run scared."}]},
];
const LIKED_YOU = [
  {id:6,name:"???",age:"??",photos:["https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"],workouts:["Weightlifting"]},
  {id:7,name:"???",age:"??",photos:["https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80"],workouts:["CrossFit"]},
  {id:8,name:"???",age:"??",photos:["https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80"],workouts:["Yoga"]},
];
const MESSAGES_DATA = {
  1:[{id:1,from:"them",text:"Hey! Saw you're into Hyrox too 🙌",time:"10:24"},{id:2,from:"me",text:"Yes! Finally someone who gets the pain 😂",time:"10:26"},{id:3,from:"them",text:"Want to hit the gym this week? I go to Gold's in JLT",time:"10:27"}],
  2:[{id:1,from:"them",text:"That sled push session sounds brutal 😅",time:"Yesterday"},{id:2,from:"me",text:"It was 🔥 worth every second though",time:"Yesterday"}],
};

// ── Expanded Profile Modal ────────────────────────────────────
function ExpandedProfileModal({ profile, onClose, onLike, onPass, onSpot, onLikePrompt }) {
  const [likedPrompt, setLikedPrompt] = useState(null);

  const handleLikePrompt = (prompt) => {
    setLikedPrompt(prompt.id);
    onLikePrompt && onLikePrompt(profile, prompt);
  };

  const promptDef = (id) => PROMPT_BANK.find(p => p.id === id);

  return (
    <div style={{position:"fixed",inset:0,background:BG,zIndex:700,display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:"'DM Sans', sans-serif"}}>
      {/* Header */}
      <div style={{padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"absolute",top:0,left:0,right:0,zIndex:10}}>
        <button onClick={onClose} style={{width:36,height:36,borderRadius:"50%",background:"rgba(18,18,31,0.7)",border:"none",color:TEXT,fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>←</button>
        <button onClick={()=>onLikePrompt&&onLikePrompt(profile,null)} style={{width:36,height:36,borderRadius:"50%",background:"rgba(18,18,31,0.7)",border:"none",color:MUTED,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>⋯</button>
      </div>

      {/* Scrollable content */}
      <div style={{flex:1,overflowY:"auto"}}>
        {/* Full photo carousel — taller */}
        <div style={{position:"relative",height:440}}>
          <PhotoCarousel photos={profile.photos} height={440}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(18,18,31,1) 0%, rgba(18,18,31,0.2) 60%, transparent 100%)",pointerEvents:"none"}}/>

          {/* Badges on photo */}
          <div style={{position:"absolute",top:56,left:12,display:"flex",gap:6}}>
            {profile.verified && (
              <div style={{width:28,height:28,borderRadius:"50%",background:BLUE,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(110,180,247,0.5)"}}>
                <span style={{fontSize:12,fontWeight:900,color:"white"}}>✓</span>
              </div>
            )}
            {profile.spotted && (
              <div style={{width:28,height:28,borderRadius:"50%",background:SPOT,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 12px ${SPOT}88`}}>
                <TargetIcon size={16} color="white"/>
              </div>
            )}
          </div>

          {/* Name/age over photo */}
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 20px 16px",pointerEvents:"none"}}>
            <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:6}}>
              <span style={{fontSize:30,fontWeight:900,fontFamily:"'Syne', sans-serif",color:TEXT}}>{profile.name}</span>
              <span style={{fontSize:22,color:MUTED,fontWeight:400}}>{profile.age}</span>
              <span style={{marginLeft:"auto",fontSize:13,color:MUTED}}>📍 {profile.distance}</span>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {profile.workouts.map(w=><WorkoutBadge key={w} label={w} small/>)}
              {profile.lookingFor && <LookingForBadge id={profile.lookingFor} small/>}
            </div>
          </div>
        </div>

        {/* Body content */}
        <div style={{padding:"16px 16px 120px",display:"flex",flexDirection:"column",gap:12}}>

          {/* Bio */}
          {profile.bio && (
            <p style={{color:TEXT,fontSize:15,lineHeight:1.7,margin:0}}>{profile.bio}</p>
          )}

          {/* Gym stats strip */}
          <div style={{display:"flex",gap:0,background:CARD_BG,borderRadius:16,overflow:"hidden"}}>
            {[["🏋️","Level",profile.level],["⏰","Time",profile.time.split("·")[0].trim()],["📍","Gym",profile.gym.split(",")[0]]].map(([icon,label,val],i,arr)=>(
              <div key={label} style={{flex:1,padding:"12px 8px",textAlign:"center",borderRight:i<arr.length-1?`1px solid ${BG}`:""}} >
                <div style={{fontSize:16,marginBottom:2}}>{icon}</div>
                <div style={{fontSize:10,color:MUTED,marginBottom:2,textTransform:"uppercase",letterSpacing:"0.06em"}}>{label}</div>
                <div style={{fontSize:12,color:TEXT,fontWeight:700,lineHeight:1.3}}>{val}</div>
              </div>
            ))}
          </div>

          {/* Prompts — the Hinge-style section */}
          {(profile.prompts||[]).map((p, i) => {
            const def = promptDef(p.id);
            if (!def) return null;
            const isLiked = likedPrompt === p.id;
            return (
              <div key={p.id} style={{display:"flex",flexDirection:"column",gap:10}}>
                {/* Interleave a photo between prompts — hidden entirely if broken */}
                {i === 1 && profile.photos[1] && (
                  <div style={{borderRadius:20,overflow:"hidden",height:220}}>
                    <img src={profile.photos[1]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}
                      onError={e=>{e.target.parentElement.style.display="none";}}/>
                  </div>
                )}
                <div style={{background:CARD_BG,borderRadius:20,padding:"16px 16px 12px",position:"relative"}}>
                  <div style={{fontSize:11,color:MUTED,fontWeight:600,marginBottom:6,letterSpacing:"0.02em"}}>{def.q}</div>
                  <div style={{fontSize:15,color:TEXT,fontWeight:600,lineHeight:1.5,marginBottom:12}}>{p.a}</div>
                  <button onClick={()=>handleLikePrompt(p)} style={{
                    display:"flex",alignItems:"center",gap:6,
                    background:isLiked?`${PURPLE}22`:"none",
                    border:isLiked?`1px solid ${PURPLE}`:`1px solid ${MUTED}33`,
                    borderRadius:20,padding:"5px 12px",cursor:"pointer",
                    color:isLiked?PURPLE:MUTED,fontSize:12,fontWeight:600,
                    fontFamily:"'DM Sans', sans-serif",transition:"all 0.2s",
                  }}>
                    <span style={{fontSize:13}}>{isLiked?"💜":"🤍"}</span>
                    {isLiked ? "Liked this!" : "Like this answer"}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Third photo — hidden if broken */}
          {profile.photos[2] && (
            <div style={{borderRadius:20,overflow:"hidden",height:220}}>
              <img src={profile.photos[2]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}
                onError={e=>{e.target.parentElement.style.display="none";}}/>
            </div>
          )}

          {/* Exercises */}
          {(profile.exercises||[]).length > 0 && (
            <div style={{background:CARD_BG,borderRadius:20,padding:"16px 18px"}}>
              <div style={{fontSize:12,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:12}}>🔥 Top exercises</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {profile.exercises.map(e=>(
                  <span key={e} style={{background:`${PURPLE}22`,border:`1px solid ${PURPLE}44`,color:TEXT,borderRadius:20,padding:"5px 14px",fontSize:13}}>{e}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed action buttons at bottom */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"12px 20px 28px",background:`linear-gradient(to top, ${BG} 70%, transparent)`,display:"flex",justifyContent:"center",alignItems:"center",gap:16}}>
        <button onClick={()=>{onPass&&onPass();onClose();}} style={{width:54,height:54,borderRadius:"50%",border:"2px solid #F76E6E44",background:"#F76E6E11",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F76E6E" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button onClick={()=>{onSpot&&onSpot();onClose();}} style={{width:48,height:48,borderRadius:"50%",border:`2px solid ${SPOT}44`,background:`${SPOT}18`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <TargetIcon size={22} color={SPOT}/>
        </button>
        <button onClick={()=>{onLike&&onLike();onClose();}} style={{width:68,height:68,borderRadius:"50%",border:"none",background:GRAD,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 8px 24px rgba(155,111,228,0.5)"}}>
          <CheckIcon size={26}/>
        </button>
      </div>
    </div>
  );
}

// ── Onboarding ────────────────────────────────────────────────
const ONBOARDING_STEPS = ["welcome","name","age","photos","workout","level","timing","lookingFor","gym","prompts","done"];

function OnboardingScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name:"", age:"", photos:[], workout:[], level:"", time:"", lookingFor:"", gym:"",
    prompts:[{id:"",a:""},{id:"",a:""},{id:"",a:""}],
  });

  const stepId = ONBOARDING_STEPS[step];
  const total  = ONBOARDING_STEPS.length - 2; // exclude welcome+done from progress
  const progress = Math.min(step / (ONBOARDING_STEPS.length - 1), 1);

  const next = () => {
    if (step < ONBOARDING_STEPS.length - 1) setStep(s => s + 1);
    else onComplete(form);
  };
  const back = () => setStep(s => Math.max(0, s - 1));

  const canContinue = () => {
    if (stepId === "welcome") return true;
    if (stepId === "name")    return form.name.trim().length > 0;
    if (stepId === "age")     return form.age && parseInt(form.age) >= 18;
    if (stepId === "photos")  return form.photos.length > 0;
    if (stepId === "workout") return form.workout.length > 0;
    if (stepId === "level")   return form.level.length > 0;
    if (stepId === "timing")  return form.time.length > 0;
    if (stepId === "lookingFor") return form.lookingFor.length > 0;
    if (stepId === "gym")     return true;
    return true;
  };

  const PLACEHOLDER_PHOTOS = [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80",
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80",
  ];

  const toggleWorkout = (w) => setForm(f => {
    const has = f.workout.includes(w);
    if (has) return {...f, workout: f.workout.filter(x => x !== w)};
    if (f.workout.length >= 2) return {...f, workout: [f.workout[1], w]};
    return {...f, workout: [...f.workout, w]};
  });

  return (
    <div style={{position:"fixed",inset:0,background:BG,zIndex:2000,display:"flex",flexDirection:"column",fontFamily:"'DM Sans', sans-serif"}}>
      {/* Progress header */}
      {stepId !== "welcome" && stepId !== "done" && (
        <div style={{padding:"14px 20px 0",display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
          <button onClick={back} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0,flexShrink:0,opacity:step>0?1:0,pointerEvents:step>0?"auto":"none"}}>←</button>
          {/* Segmented progress */}
          <div style={{flex:1,display:"flex",gap:3}}>
            {ONBOARDING_STEPS.filter(s=>s!=="welcome"&&s!=="done").map((s,i)=>{
              const stepIdx = ONBOARDING_STEPS.indexOf(s);
              const filled = step >= stepIdx;
              return <div key={s} style={{flex:1,height:3,borderRadius:2,background:filled?PURPLE:CARD_BG,transition:"background 0.3s"}}/>;
            })}
          </div>
          <span style={{fontSize:11,color:MUTED,flexShrink:0}}>
            {ONBOARDING_STEPS.filter(s=>s!=="welcome"&&s!=="done").indexOf(stepId)+1}/{ONBOARDING_STEPS.filter(s=>s!=="welcome"&&s!=="done").length}
          </span>
        </div>
      )}

      <div style={{flex:1,overflowY:"auto",padding:"20px 24px 28px",display:"flex",flexDirection:"column",gap:20}}>

        {/* WELCOME */}
        {stepId === "welcome" && (
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24,textAlign:"center",minHeight:"70vh"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16}}>
              <SpotterLogo height={72}/>
              <div>
                <div style={{fontSize:34,fontWeight:900,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:8,letterSpacing:"-0.02em"}}>SPOTTER</div>
                <div style={{fontSize:17,fontWeight:600,color:TEXT,marginBottom:10}}>Find your gym partner.</div>
                <p style={{color:MUTED,fontSize:14,lineHeight:1.7,maxWidth:280}}>Match with people who train like you. Meet at the gym first. See where it goes.</p>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
              <button onClick={next} style={{background:GRAD,border:"none",borderRadius:16,padding:"15px",color:"white",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%",letterSpacing:"0.02em"}}>
                Create Account
              </button>
              <button onClick={next} style={{background:CARD_BG,border:"none",borderRadius:16,padding:"14px",color:MUTED,fontWeight:600,fontSize:15,cursor:"pointer",width:"100%"}}>
                Sign In
              </button>
            </div>
            <p style={{color:MUTED,fontSize:11,maxWidth:260,lineHeight:1.5}}>By continuing you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        )}

        {/* NAME */}
        {stepId === "name" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>What's your name?</div>
              <p style={{color:MUTED,fontSize:13}}>This is how you'll appear to other Spotters.</p>
            </div>
            <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
              placeholder="First name"
              style={{background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:14,padding:"14px 18px",color:TEXT,fontSize:18,outline:"none",fontFamily:"'DM Sans', sans-serif",fontWeight:600}}/>
            <p style={{color:MUTED,fontSize:11}}>Your surname is never shown.</p>
          </div>
        )}

        {/* AGE */}
        {stepId === "age" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>How old are you?</div>
              <p style={{color:MUTED,fontSize:13}}>You must be 18 or over to use Spotter.</p>
            </div>
            <input type="number" value={form.age} onChange={e=>setForm(f=>({...f,age:e.target.value}))}
              placeholder="Your age"
              style={{background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:14,padding:"14px 18px",color:TEXT,fontSize:18,outline:"none",fontFamily:"'DM Sans', sans-serif",fontWeight:600}}/>
          </div>
        )}

        {/* PHOTOS */}
        {stepId === "photos" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>Add your photos</div>
              <p style={{color:MUTED,fontSize:13}}>Add at least 1 photo. Up to 6. Gym shots welcome.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8}}>
              {[0,1,2,3,4,5].map(i => {
                const hasPhoto = form.photos[i];
                return (
                  <div key={i} onClick={()=>{
                    if (hasPhoto) {
                      setForm(f=>({...f,photos:f.photos.filter((_,j)=>j!==i)}));
                    } else {
                      setForm(f=>({...f,photos:[...f.photos,PLACEHOLDER_PHOTOS[i]]}));
                    }
                  }} style={{
                    aspectRatio:"3/4",borderRadius:12,overflow:"hidden",cursor:"pointer",
                    background:CARD_BG,border:`1px dashed ${hasPhoto?"transparent":MUTED+"44"}`,
                    display:"flex",alignItems:"center",justifyContent:"center",position:"relative",
                  }}>
                    {hasPhoto ? (
                      <>
                        <img src={hasPhoto} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>
                        <div style={{position:"absolute",top:4,right:4,width:20,height:20,borderRadius:"50%",background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"white"}}>✕</div>
                        {i===0 && <div style={{position:"absolute",bottom:4,left:4,background:GRAD,borderRadius:8,padding:"2px 8px",fontSize:10,color:"white",fontWeight:700}}>Main</div>}
                      </>
                    ) : (
                      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                        <span style={{fontSize:24,color:MUTED}}>+</span>
                        <span style={{fontSize:10,color:MUTED}}>{i===0?"Required":"Optional"}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* WORKOUT */}
        {stepId === "workout" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>How do you train?</div>
              <p style={{color:MUTED,fontSize:13}}>Pick up to 2. First selected = your primary style.</p>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {WORKOUT_OPTIONS.map(w=>{
                const active = form.workout.includes(w);
                const isPrimary = form.workout[0]===w;
                return (
                  <button key={w} onClick={()=>toggleWorkout(w)} style={{
                    background:active?(isPrimary?GRAD:`${BLUE}33`):CARD_BG,
                    border:active?"none":`1px solid ${MUTED}33`,borderRadius:20,
                    padding:"9px 18px",cursor:"pointer",
                    color:active?"white":MUTED,fontSize:14,fontWeight:600,fontFamily:"'DM Sans', sans-serif",
                  }}>{isPrimary?"① ":active?"② ":""}{w}</button>
                );
              })}
            </div>
          </div>
        )}

        {/* LEVEL */}
        {stepId === "level" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>Experience level?</div>
              <p style={{color:MUTED,fontSize:13}}>Be honest — it helps us find better matches.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[["Beginner","Just getting started, loving every rep 💪"],["Intermediate","I know my way around the gym"],["Advanced","PRs are my love language 🏆"]].map(([lvl,desc])=>(
                <button key={lvl} onClick={()=>setForm(f=>({...f,level:lvl}))} style={{
                  background:form.level===lvl?`${PURPLE}22`:CARD_BG,
                  border:form.level===lvl?`1px solid ${PURPLE}`:`1px solid transparent`,
                  borderRadius:14,padding:"16px",cursor:"pointer",textAlign:"left",
                  display:"flex",alignItems:"center",gap:12,
                }}>
                  <div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${form.level===lvl?PURPLE:MUTED}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    {form.level===lvl && <div style={{width:10,height:10,borderRadius:"50%",background:PURPLE}}/>}
                  </div>
                  <div>
                    <div style={{color:TEXT,fontWeight:700,fontSize:15}}>{lvl}</div>
                    <div style={{color:MUTED,fontSize:12,marginTop:2}}>{desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TIMING */}
        {stepId === "timing" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>When do you train?</div>
              <p style={{color:MUTED,fontSize:13}}>We'll match you with people on your schedule.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {TIME_OPTIONS.map(t=>(
                <button key={t} onClick={()=>setForm(f=>({...f,time:t}))} style={{
                  background:form.time===t?`${PURPLE}22`:CARD_BG,
                  border:form.time===t?`1px solid ${PURPLE}`:`1px solid transparent`,
                  borderRadius:12,padding:"13px 16px",
                  color:form.time===t?TEXT:MUTED,fontSize:14,fontWeight:form.time===t?700:400,
                  cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans', sans-serif",
                }}>{t}</button>
              ))}
            </div>
          </div>
        )}

        {/* LOOKING FOR */}
        {stepId === "lookingFor" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>What are you looking for?</div>
              <p style={{color:MUTED,fontSize:13}}>Be upfront — it saves everyone time.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {LOOKING_FOR_OPTIONS.map(opt=>(
                <button key={opt.id} onClick={()=>setForm(f=>({...f,lookingFor:opt.id}))} style={{
                  background:form.lookingFor===opt.id?`${PURPLE}22`:CARD_BG,
                  border:form.lookingFor===opt.id?`1px solid ${PURPLE}`:`1px solid transparent`,
                  borderRadius:14,padding:"14px 16px",cursor:"pointer",
                  display:"flex",alignItems:"center",gap:12,textAlign:"left",
                }}>
                  <span style={{fontSize:22}}>{opt.icon}</span>
                  <div>
                    <div style={{color:TEXT,fontWeight:700,fontSize:15}}>{opt.label}</div>
                    <div style={{color:MUTED,fontSize:12,marginTop:2}}>{opt.sub}</div>
                  </div>
                  {form.lookingFor===opt.id && <div style={{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:GRAD,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"white",flexShrink:0}}>✓</div>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* GYM */}
        {stepId === "gym" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>Where do you train?</div>
              <p style={{color:MUTED,fontSize:13}}>Your gym helps us find people nearby.</p>
            </div>
            <input value={form.gym} onChange={e=>setForm(f=>({...f,gym:e.target.value}))}
              placeholder="e.g. Fitness First, Marina"
              style={{background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:14,padding:"14px 18px",color:TEXT,fontSize:15,outline:"none",fontFamily:"'DM Sans', sans-serif"}}/>
            <p style={{color:MUTED,fontSize:12}}>You can change this any time in your profile.</p>
          </div>
        )}

        {/* PROMPTS */}
        {stepId === "prompts" && (
          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <div>
              <div style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:6}}>Tell them who you are</div>
              <p style={{color:MUTED,fontSize:13,lineHeight:1.6}}>Answer 3 prompts. This is how people decide to swipe right — make it count.</p>
            </div>
            {[0,1,2].map(i => {
              const p = form.prompts[i] || {id:"",a:""};
              const usedIds = form.prompts.filter((_,j)=>j!==i).map(x=>x.id);
              const available = PROMPT_BANK.filter(pb=>!usedIds.includes(pb.id));
              return (
                <div key={i} style={{background:CARD_BG,borderRadius:20,padding:"16px"}}>
                  <div style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:12}}>Prompt {i+1}</div>
                  {/* Prompt selector */}
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
                    {available.map(pb=>(
                      <button key={pb.id} onClick={()=>setForm(f=>{const ps=[...f.prompts];ps[i]={id:pb.id,a:ps[i]?.a||""};return{...f,prompts:ps};})} style={{
                        background:p.id===pb.id?`${PURPLE}22`:BG,
                        border:p.id===pb.id?`1px solid ${PURPLE}`:`1px solid transparent`,
                        borderRadius:12,padding:"9px 14px",cursor:"pointer",textAlign:"left",
                        color:p.id===pb.id?TEXT:MUTED,fontSize:13,fontWeight:p.id===pb.id?700:400,
                        fontFamily:"'DM Sans', sans-serif",
                      }}>{pb.q}</button>
                    ))}
                    {p.id && !available.find(pb=>pb.id===p.id) && (
                      <div style={{background:`${PURPLE}22`,border:`1px solid ${PURPLE}`,borderRadius:12,padding:"9px 14px",color:TEXT,fontSize:13,fontWeight:700}}>{PROMPT_BANK.find(pb=>pb.id===p.id)?.q}</div>
                    )}
                  </div>
                  {/* Answer input */}
                  {p.id && (
                    <textarea value={p.a} onChange={e=>setForm(f=>{const ps=[...f.prompts];ps[i]={...ps[i],a:e.target.value};return{...f,prompts:ps};})}
                      placeholder="Your answer…" rows={2}
                      style={{width:"100%",background:BG,border:`1px solid ${PURPLE}44`,borderRadius:12,padding:"10px 14px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif",resize:"none"}}/>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DONE */}
        {stepId === "done" && (
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,textAlign:"center",minHeight:"70vh"}}>
            <div style={{fontSize:80}}>🏋️</div>
            <div>
              <div style={{fontSize:28,fontWeight:900,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:8,letterSpacing:"-0.02em"}}>
                You're ready{form.name ? `, ${form.name}` : ""}!
              </div>
              <p style={{color:MUTED,fontSize:14,lineHeight:1.7,maxWidth:260}}>Your profile is set up. Time to find your perfect gym partner in Dubai.</p>
            </div>
            {/* Quick summary of what they set */}
            <div style={{background:CARD_BG,borderRadius:20,padding:"16px 20px",width:"100%",display:"flex",flexDirection:"column",gap:8}}>
              {form.workout?.length>0 && <div style={{display:"flex",justifyContent:"space-between",fontSize:13}}><span style={{color:MUTED}}>Workout</span><span style={{color:TEXT,fontWeight:600}}>{form.workout.slice(0,2).join(" · ")}</span></div>}
              {form.level && <div style={{display:"flex",justifyContent:"space-between",fontSize:13}}><span style={{color:MUTED}}>Level</span><span style={{color:TEXT,fontWeight:600}}>{form.level}</span></div>}
              {form.time && <div style={{display:"flex",justifyContent:"space-between",fontSize:13}}><span style={{color:MUTED}}>Time</span><span style={{color:TEXT,fontWeight:600}}>{form.time.split("·")[0].trim()}</span></div>}
            </div>
            <button onClick={()=>onComplete(form)} style={{background:GRAD,border:"none",borderRadius:16,padding:"15px",color:"white",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%",letterSpacing:"0.02em"}}>
              Start Discovering ⚡
            </button>
          </div>
        )}
      </div>

      {/* Continue button */}
      {stepId !== "welcome" && stepId !== "done" && (
        <div style={{padding:"12px 24px 32px",display:"flex",flexDirection:"column",gap:8}}>
          {/* Prompts step: separate Save & Continue + Skip */}
          {stepId === "prompts" ? (
            <>
              <button onClick={next} style={{
                background:GRAD,border:"none",borderRadius:16,padding:"15px",
                color:"white",fontWeight:800,fontSize:16,cursor:"pointer",
                fontFamily:"'Syne', sans-serif",width:"100%",transition:"all 0.2s",
              }}>Save & Continue →</button>
              <button onClick={next} style={{
                background:"none",border:"none",color:MUTED,fontSize:14,
                cursor:"pointer",textDecoration:"underline",textAlign:"center",padding:"4px",
              }}>Skip for now</button>
            </>
          ) : stepId === "gym" ? (
            <>
              <button onClick={next} disabled={!canContinue()} style={{
                background:canContinue()?GRAD:"#333",border:"none",borderRadius:16,padding:"15px",
                color:canContinue()?"white":MUTED,fontWeight:800,fontSize:16,cursor:canContinue()?"pointer":"default",
                fontFamily:"'Syne', sans-serif",width:"100%",transition:"all 0.2s",
              }}>Continue →</button>
              <button onClick={next} style={{
                background:"none",border:"none",color:MUTED,fontSize:14,
                cursor:"pointer",textDecoration:"underline",textAlign:"center",padding:"4px",
              }}>Skip for now</button>
            </>
          ) : (
            <button onClick={next} disabled={!canContinue()} style={{
              background:canContinue()?GRAD:"#333",border:"none",borderRadius:16,padding:"15px",
              color:canContinue()?"white":MUTED,fontWeight:800,fontSize:16,cursor:canContinue()?"pointer":"default",
              fontFamily:"'Syne', sans-serif",width:"100%",transition:"all 0.2s",
            }}>Continue →</button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Photo carousel helper ─────────────────────────────────────
function PhotoCarousel({ photos, height=380 }) {
  const [idx, setIdx] = useState(0);
  const arr = photos && photos.length ? photos : ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80"];
  return (
    <div style={{position:"relative",height,width:"100%",overflow:"hidden",borderRadius:"0"}}>
      <img src={arr[idx]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80";}}/>
      {/* Tap zones */}
      {arr.length > 1 && <>
        <div onClick={()=>setIdx(i=>Math.max(0,i-1))} style={{position:"absolute",top:0,left:0,width:"40%",height:"100%",cursor:idx>0?"pointer":"default"}}/>
        <div onClick={()=>setIdx(i=>Math.min(arr.length-1,i+1))} style={{position:"absolute",top:0,right:0,width:"40%",height:"100%",cursor:idx<arr.length-1?"pointer":"default"}}/>
      </>}
      {/* Dots */}
      {arr.length > 1 && (
        <div style={{position:"absolute",top:8,left:0,right:0,display:"flex",justifyContent:"center",gap:4,padding:"0 8px"}}>
          {arr.map((_,i)=>(
            <div key={i} style={{height:3,flex:1,maxWidth:40,borderRadius:2,background:i===idx?"white":"rgba(255,255,255,0.4)",transition:"background 0.2s"}}/>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Boost Modal ───────────────────────────────────────────────
function BoostModal({ onClose }) {
  const [tab, setTab] = useState("boost");
  const [selected, setSelected] = useState("monthly");
  const boostPlans = [
    {id:"weekly",   label:"1 Week",   price:"AED 29",per:"per week",  badge:null},
    {id:"monthly",  label:"1 Month",  price:"AED 79",per:"per month", badge:"Most Popular"},
    {id:"quarterly",label:"3 Months", price:"AED 59",per:"per month", badge:"Best Value"},
  ];
  const spotPacks = [
    {id:"f5", label:"5 Spots",  price:"AED 19",per:"AED 3.80 each",badge:null},
    {id:"f15",label:"15 Spots", price:"AED 39",per:"AED 2.60 each",badge:"Most Popular"},
    {id:"f40",label:"40 Spots", price:"AED 79",per:"AED 1.98 each",badge:"Best Value"},
  ];
  const plans = tab==="boost"?boostPlans:spotPacks;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.94)",zIndex:800,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",backdropFilter:"blur(10px)"}}>
      <div style={{width:"100%",maxWidth:430,background:CARD_BG,borderRadius:"28px 28px 0 0",padding:"24px 24px 36px",display:"flex",flexDirection:"column",gap:16,maxHeight:"90vh",overflowY:"auto"}}>
        <div style={{width:40,height:4,borderRadius:2,background:MUTED,margin:"-8px auto 4px"}}/>
        <div style={{display:"flex",background:BG,borderRadius:16,padding:4,gap:4}}>
          {[{id:"boost",label:"⚡ Boost"},{id:"spots",label:"🎯 Spots"}].map(t=>(
            <button key={t.id} onClick={()=>{setTab(t.id);setSelected(t.id==="boost"?"monthly":"f15");}} style={{flex:1,padding:"10px 0",borderRadius:12,border:"none",cursor:"pointer",background:tab===t.id?GRAD:"transparent",color:tab===t.id?"white":MUTED,fontWeight:700,fontSize:14,fontFamily:"'DM Sans', sans-serif",transition:"all 0.2s"}}>{t.label}</button>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:4}}>{tab==="boost"?"⚡":"🎯"}</div>
          <div style={{fontSize:18,fontWeight:900,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            {tab==="boost"?"SPOTTER BOOST":"SPOTS"}
          </div>
          <p style={{color:MUTED,fontSize:12,marginTop:6,lineHeight:1.6}}>
            {tab==="boost"
              ?"Priority in Discover · Unlimited swipes · See who liked you · No ads"
              :"Swipe up or tap 🎯 — they get notified, your profile stands out with a Spot icon"}
          </p>
        </div>
        {tab==="boost" && (
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {[["🔝","Priority in Discover","Be seen first by everyone nearby"],["∞","Unlimited Swipes","Never run out"],["👁","See Who Liked You","View everyone who already swiped right"],["🚫","No Ads","Clean, uninterrupted experience"]].map(([icon,title,sub])=>(
              <div key={title} style={{display:"flex",alignItems:"center",gap:10,background:BG,borderRadius:12,padding:"8px 12px"}}>
                <span style={{fontSize:16,flexShrink:0}}>{icon}</span>
                <div><div style={{color:TEXT,fontSize:12,fontWeight:600}}>{title}</div><div style={{color:MUTED,fontSize:11}}>{sub}</div></div>
              </div>
            ))}
          </div>
        )}
        {plans.map(p=>(
          <div key={p.id} onClick={()=>setSelected(p.id)} style={{border:selected===p.id?`2px solid ${PURPLE}`:`2px solid ${BG}`,background:selected===p.id?`${PURPLE}18`:BG,borderRadius:16,padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all 0.2s"}}>
            <div><div style={{fontWeight:700,color:TEXT,fontSize:14}}>{p.label}</div><div style={{color:MUTED,fontSize:12}}>{p.per}</div></div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:3}}>
              {p.badge && <span style={{fontSize:10,fontWeight:700,background:GRAD,color:"white",borderRadius:20,padding:"2px 8px"}}>{p.badge}</span>}
              <span style={{fontWeight:800,fontSize:16,color:TEXT}}>{p.price}</span>
            </div>
          </div>
        ))}
        <button style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"'Syne', sans-serif",letterSpacing:"0.04em"}}>
          {tab==="boost"?"ACTIVATE BOOST":"GET SPOTS"}
        </button>
        <button onClick={onClose} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline",textAlign:"center"}}>Maybe later</button>
      </div>
    </div>
  );
}

// ── Discover Screen ───────────────────────────────────────────
function DiscoverScreen({ onOpenBoost, lastPassed, onSetLastPassed, onMatch }) {
  const [index, setIndex]         = useState(0);
  const [action, setAction]       = useState(null);
  const [matchPop, setMatchPop]   = useState(false);
  const [expandedProfile, setExpandedProfile]   = useState(null);
  const [likedPromptData, setLikedPromptData]   = useState(null);
  const [showPromptLiked, setShowPromptLiked]   = useState(false);
  const [showLegend, setShowLegend]             = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter]   = useState("All");
  const [activeLFFilter, setActiveLFFilter] = useState("All");
  const [sparksLeft, setSparksLeft] = useState(3);
  const [spotPopup, setSpotPopup] = useState(false);
  const [outOfSpots, setOutOfSpots] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const cardRef  = useRef(null);
  const startX   = useRef(null);
  const startY   = useRef(null);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const filters = ["All","Weightlifting","CrossFit","Hyrox","Yoga","Running","HIIT","Pilates","Calisthenics","General Classes"];

  const getSorted = () => {
    let pool = PROFILES;
    if (activeFilter !== "All") {
      pool = [...pool.filter(p=>p.workouts[0]===activeFilter), ...pool.filter(p=>p.workouts[1]===activeFilter)];
    }
    if (activeLFFilter !== "All") pool = pool.filter(p=>p.lookingFor===activeLFFilter);
    return pool;
  };

  const filtered = getSorted();
  const allSeen  = index >= filtered.length;
  const profile  = allSeen ? null : filtered[index % filtered.length];

  const swipe = (dir) => {
    if (!profile) return;
    if (dir === "pass") onSetLastPassed && onSetLastPassed({profile, index});
    setAction(dir);
    if (dir==="like") setTimeout(()=>setMatchPop(true),300);
    setTimeout(()=>{setAction(null);setMatchPop(false);setIndex(i=>i+1);},dir==="like"?1400:600);
  };

  const handleUndo = () => {
    if (!lastPassed) return;
    setIndex(lastPassed.index);
    onSetLastPassed && onSetLastPassed(null);
  };

  const sendSpot = () => {
    if (!profile) return;
    if (sparksLeft <= 0) { setOutOfSpots(true); setTimeout(()=>setOutOfSpots(false),2000); return; }
    setSparksLeft(n=>n-1);
    setAction("spot");
    setSpotPopup(true);
    setTimeout(()=>{setAction(null);setSpotPopup(false);setIndex(i=>i+1);},1600);
  };

  const onTouchStart = (e) => { startX.current=e.touches[0].clientX; startY.current=e.touches[0].clientY; };
  const onTouchMove  = (e) => {
    if (!startX.current) return;
    currentX.current = e.touches[0].clientX - startX.current;
    currentY.current = e.touches[0].clientY - startY.current;
    if (!cardRef.current) return;
    const ax=Math.abs(currentX.current), ay=Math.abs(currentY.current);
    cardRef.current.style.transition = "none";
    if (ay > ax && currentY.current < -20)
      cardRef.current.style.transform = `translateY(${currentY.current}px) scale(${1+Math.abs(currentY.current)*0.0003})`;
    else
      cardRef.current.style.transform = `translateX(${currentX.current}px) rotate(${currentX.current*0.04}deg)`;
  };
  const onTouchEnd = () => {
    if (cardRef.current) { cardRef.current.style.transform=""; cardRef.current.style.transition="transform 0.3s"; }
    const ax=Math.abs(currentX.current), ay=Math.abs(currentY.current);
    if (ay>ax && currentY.current < -80) sendSpot();
    else if (currentX.current > 80) swipe("like");
    else if (currentX.current < -80) swipe("pass");
    startX.current=null; startY.current=null; currentX.current=0; currentY.current=0;
  };

  const anyFilter = activeFilter!=="All"||activeLFFilter!=="All";

  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}}>
      {/* Header */}
      <div style={{padding:"14px 20px 8px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <SpotterLogo height={34}/>
          <span style={{fontSize:19,fontWeight:800,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>SPOTTER</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          {/* ? icon legend button */}
          <button onClick={()=>setShowLegend(true)} style={{width:32,height:32,borderRadius:"50%",background:CARD_BG,border:"none",color:MUTED,fontSize:14,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans', sans-serif"}}>?</button>
          <button onClick={()=>setFilterOpen(!filterOpen)} style={{background:filterOpen||anyFilter?GRAD:CARD_BG,border:"none",borderRadius:12,padding:"7px 13px",color:filterOpen||anyFilter?"white":MUTED,cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"'DM Sans', sans-serif",display:"flex",alignItems:"center",gap:5}}>
            <span>⚡</span> Filter{anyFilter?" ·":""}
          </button>
        </div>
      </div>

      {/* Filter panel */}
      {filterOpen && (
        <div style={{padding:"8px 20px 12px",display:"flex",flexDirection:"column",gap:10,borderBottom:`1px solid ${CARD_BG}`}}>
          <div>
            <div style={{fontSize:10,color:MUTED,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6}}>Workout</div>
            <div style={{display:"flex",gap:8,overflowX:"auto",scrollbarWidth:"none",paddingBottom:2}}>
              {filters.map(f=>(
                <button key={f} onClick={()=>{setActiveFilter(f);setIndex(0);}} style={{background:activeFilter===f?GRAD:CARD_BG,border:"none",borderRadius:20,padding:"6px 14px",color:activeFilter===f?"white":MUTED,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"'DM Sans', sans-serif",flexShrink:0}}>{f}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:10,color:MUTED,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6}}>Looking For</div>
            <div style={{display:"flex",gap:8,overflowX:"auto",scrollbarWidth:"none",paddingBottom:2}}>
              {[{id:"All",label:"All",icon:""},...LOOKING_FOR_OPTIONS].map(opt=>(
                <button key={opt.id} onClick={()=>{setActiveLFFilter(opt.id);setIndex(0);}} style={{background:activeLFFilter===opt.id?GRAD:CARD_BG,border:"none",borderRadius:20,padding:"6px 14px",color:activeLFFilter===opt.id?"white":MUTED,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"'DM Sans', sans-serif",flexShrink:0}}>{opt.icon} {opt.label}</button>
              ))}
            </div>
          </div>
          {anyFilter && <button onClick={()=>{setActiveFilter("All");setActiveLFFilter("All");setIndex(0);}} style={{background:"none",border:"none",color:"#F76E6E",fontSize:12,cursor:"pointer",textDecoration:"underline",textAlign:"left",padding:0}}>Clear filters</button>}
        </div>
      )}

      {/* EMPTY STATE */}
      {allSeen ? (
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px",textAlign:"center",gap:16}}>
          <div style={{fontSize:64}}>🏋️</div>
          <div style={{fontSize:22,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT}}>You've seen everyone!</div>
          <p style={{color:MUTED,fontSize:14,lineHeight:1.7,maxWidth:280}}>
            No more profiles match your current filters. Try adjusting them, or come back tomorrow for fresh Spotters.
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            <button onClick={()=>{setIndex(0);setActiveFilter("All");setActiveLFFilter("All");}} style={{background:GRAD,border:"none",borderRadius:16,padding:"13px",color:"white",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>
              🔄 Start Over
            </button>
            <button onClick={onOpenBoost} style={{background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:16,padding:"13px",color:MUTED,fontWeight:600,fontSize:14,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>
              ⚡ Boost to see more people
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Card stack */}
          <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",position:"relative"}}>
            <div style={{position:"absolute",width:"calc(100% - 48px)",maxWidth:360,height:"72%",borderRadius:24,background:CARD_BG,transform:"scale(0.94) translateY(12px)",zIndex:0,opacity:0.5}}/>
            <div ref={cardRef} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
              onClick={()=>{ if(Math.abs(currentX.current)<5&&Math.abs(currentY.current)<5) setExpandedProfile(profile); }}
              style={{width:"100%",maxWidth:360,borderRadius:24,overflow:"hidden",background:CARD_BG,zIndex:1,position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",cursor:"pointer",
                transform:action==="like"?"translateX(120%) rotate(15deg)":action==="pass"?"translateX(-120%) rotate(-15deg)":action==="spot"?"translateY(-120%) scale(1.05)":"none",
                transition:action?"transform 0.45s cubic-bezier(0.4,0,0.2,1)":"transform 0.3s"}}>

              {/* Photo carousel */}
              <div style={{position:"relative"}}>
                <PhotoCarousel photos={profile.photos} height={370}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(18,18,31,0.98) 0%, rgba(18,18,31,0.3) 50%, transparent 100%)",pointerEvents:"none"}}/>

                {/* Stamps */}
                {action==="like" && <div style={{position:"absolute",top:24,left:24,border:"3px solid #6EF7A0",borderRadius:12,padding:"6px 16px",color:"#6EF7A0",fontSize:20,fontWeight:900,fontFamily:"'Syne', sans-serif",transform:"rotate(-12deg)"}}>LIKE ✓</div>}
                {action==="pass" && <div style={{position:"absolute",top:24,right:24,border:"3px solid #F76E6E",borderRadius:12,padding:"6px 16px",color:"#F76E6E",fontSize:20,fontWeight:900,fontFamily:"'Syne', sans-serif",transform:"rotate(12deg)"}}>PASS</div>}
                {action==="spot" && <div style={{position:"absolute",top:24,left:"50%",transform:"translateX(-50%)",border:`3px solid ${SPOT}`,borderRadius:12,padding:"6px 20px",color:SPOT,fontSize:20,fontWeight:900,fontFamily:"'Syne', sans-serif",whiteSpace:"nowrap"}}>🎯 SPOT SENT</div>}

                {/* Spot badge — target icon */}
                {profile.spotted && (
                  <div style={{position:"absolute",top:12,right:12,width:32,height:32,borderRadius:"50%",background:SPOT,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 12px ${SPOT}99`}}>
                    <TargetIcon size={18} color="white"/>
                  </div>
                )}

                {/* Verified badge — icon only */}
                {profile.verified && (
                  <div style={{position:"absolute",top:12,left:12,width:28,height:28,borderRadius:"50%",background:BLUE,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(110,180,247,0.5)"}}>
                    <span style={{fontSize:12,fontWeight:900,color:"white"}}>✓</span>
                  </div>
                )}

                {/* Info overlay */}
                <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 16px",pointerEvents:"none"}}>
                  <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:5}}>
                    <span style={{fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT}}>{profile.name}</span>
                    <span style={{fontSize:18,color:MUTED}}>{profile.age}</span>
                    <span style={{marginLeft:"auto",fontSize:12,color:MUTED}}>📍 {profile.distance}</span>
                  </div>
                  <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:5}}>
                    {profile.workouts.map(w=><WorkoutBadge key={w} label={w} small/>)}
                    {profile.lookingFor && <LookingForBadge id={profile.lookingFor} small/>}
                  </div>
                  <p style={{fontSize:12,color:MUTED,margin:0,lineHeight:1.5}}>{profile.bio}</p>
                </div>
              </div>

              {/* Details strip + See full profile */}
              <div style={{padding:"10px 16px 0",display:"flex",gap:16,alignItems:"center"}}>
                {[["🏋️",profile.level],["⏰",profile.time.split("·")[0].trim()],["📍",profile.gym.split(",")[0]]].map(([icon,val])=>(
                  <div key={val} style={{flex:1}}>
                    <div style={{fontSize:10,color:MUTED,marginBottom:2}}>{icon}</div>
                    <div style={{fontSize:11,color:TEXT,fontWeight:600}}>{val}</div>
                  </div>
                ))}
                <button onClick={e=>{e.stopPropagation();setShowReport(true);}} style={{background:"none",border:"none",color:MUTED,cursor:"pointer",padding:"4px",flexShrink:0,opacity:0.6}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
              </div>

              {/* See full profile pill — Hinge-style */}
              <div style={{padding:"8px 16px 12px",display:"flex",justifyContent:"center"}}>
                <div style={{display:"inline-flex",alignItems:"center",gap:5,background:`${PURPLE}18`,border:`1px solid ${PURPLE}33`,borderRadius:20,padding:"5px 14px",pointerEvents:"none"}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>
                  <span style={{fontSize:11,color:PURPLE,fontWeight:700,letterSpacing:"0.02em"}}>See full profile</span>
                </div>
              </div>
            </div>

            {/* Swipe hint — just one line now */}
            <div style={{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",opacity:0.3,pointerEvents:"none"}}>
              <div style={{fontSize:10,color:MUTED,whiteSpace:"nowrap"}}>↑ swipe up to Spot 🎯</div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:14,padding:"6px 20px 14px"}}>
            {/* Pass */}
            <button onClick={()=>swipe("pass")} style={{width:52,height:52,borderRadius:"50%",border:"2px solid #F76E6E44",background:"#F76E6E11",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F76E6E" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            {/* Undo */}
            <button onClick={handleUndo} title="Undo last pass" style={{width:42,height:42,borderRadius:"50%",border:`2px solid ${BLUE}33`,background:`${BLUE}11`,cursor:lastPassed?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,opacity:lastPassed?1:0.3,transition:"opacity 0.2s"}} disabled={!lastPassed}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.36"/></svg>
            </button>
            {/* Boost */}
            <button onClick={onOpenBoost} style={{width:62,height:62,borderRadius:"50%",border:"none",background:GRAD,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 8px 24px rgba(155,111,228,0.5)"}}>
              <BoostIcon size={26}/>
            </button>
            {/* Spot */}
            <button onClick={sendSpot} style={{width:42,height:42,borderRadius:"50%",border:`2px solid ${SPOT}44`,background:`${SPOT}18`,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,flexShrink:0}}>
              <TargetIcon size={18} color={SPOT}/>
              <span style={{fontSize:9,color:SPOT,fontWeight:700,lineHeight:1}}>{sparksLeft}</span>
            </button>
            {/* Like */}
            <button onClick={()=>swipe("like")} style={{width:52,height:52,borderRadius:"50%",border:`2px solid ${GREEN}44`,background:`${GREEN}11`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <CheckIcon size={21}/>
            </button>
          </div>
        </>
      )}

      {/* Spot sent popup */}
      {spotPopup && (
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"rgba(26,26,46,0.96)",borderRadius:24,padding:"22px 30px",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:200,backdropFilter:"blur(12px)",border:`1px solid ${SPOT}55`,boxShadow:`0 0 40px ${SPOT}33`}}>
          <div style={{width:56,height:56,borderRadius:"50%",background:SPOT,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 20px ${SPOT}66`}}>
            <TargetIcon size={30} color="white"/>
          </div>
          <div style={{fontWeight:900,fontSize:17,fontFamily:"'Syne', sans-serif",color:SPOT}}>SPOT SENT!</div>
          <div style={{color:MUTED,fontSize:12,textAlign:"center"}}>{profile?.name} has been notified.<br/>Your profile stands out in their stack.</div>
          <div style={{fontSize:11,color:MUTED}}>{sparksLeft} Spots remaining</div>
        </div>
      )}
      {outOfSpots && (
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"rgba(26,26,46,0.96)",borderRadius:24,padding:"18px 26px",display:"flex",flexDirection:"column",alignItems:"center",gap:8,zIndex:200,backdropFilter:"blur(12px)",border:`1px solid ${PURPLE}44`}}>
          <TargetIcon size={36} color={SPOT}/>
          <div style={{fontWeight:800,fontSize:15,color:TEXT}}>Out of Spots</div>
          <div style={{color:MUTED,fontSize:12,textAlign:"center"}}>Get more to keep showing serious interest.</div>
        </div>
      )}

      {/* Match popup */}
      {matchPop && (
        <div style={{position:"absolute",inset:0,background:"rgba(18,18,31,0.96)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:200,backdropFilter:"blur(12px)"}}>
          {/* Subtle radial glow */}
          <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle, ${PURPLE}22 0%, transparent 70%)`,pointerEvents:"none"}}/>
          <div style={{fontSize:52,marginBottom:10}}>⚡</div>
          <div style={{fontSize:30,fontWeight:900,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:6,letterSpacing:"-0.02em"}}>IT'S A SPARK!</div>
          <div style={{color:MUTED,fontSize:14,marginBottom:32,textAlign:"center",lineHeight:1.5,maxWidth:240}}>You and {profile?.name} both liked each other 🏋️</div>
          {/* Avatar pair */}
          <div style={{display:"flex",gap:4,marginBottom:32,position:"relative"}}>
            <img src={PROFILES[1].photos[0]} style={{width:80,height:80,borderRadius:"50%",objectFit:"cover",border:`3px solid ${BLUE}`,transform:"translateX(8px)"}} alt="" onError={e=>{e.target.style.display="none";}}/>
            <div style={{width:28,height:28,borderRadius:"50%",background:GRAD,border:`2px solid ${BG}`,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",zIndex:1,fontSize:13}}>⚡</div>
            <img src={profile?.photos[0]} style={{width:80,height:80,borderRadius:"50%",objectFit:"cover",border:`3px solid ${PURPLE}`,transform:"translateX(-8px)"}} alt="" onError={e=>{e.target.style.display="none";}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%",maxWidth:280,padding:"0 20px"}}>
            <button onClick={()=>{ setMatchPop(false); onMatch && onMatch(MATCHES_DATA[0]); }} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"'Syne', sans-serif",letterSpacing:"0.02em"}}>
              Send a Message 💬
            </button>
            <button onClick={()=>setMatchPop(false)} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline",padding:"4px"}}>
              Keep Discovering
            </button>
          </div>
        </div>
      )}
      {showReport && <BlockReportModal profile={profile} onClose={()=>setShowReport(false)}/>}

      {/* Icon legend overlay */}
      {showLegend && (
        <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.92)",zIndex:800,display:"flex",flexDirection:"column",justifyContent:"flex-end",backdropFilter:"blur(10px)"}} onClick={()=>setShowLegend(false)}>
          <div style={{background:CARD_BG,borderRadius:"28px 28px 0 0",padding:"24px 24px 40px",maxWidth:430,width:"100%"}} onClick={e=>e.stopPropagation()}>
            <div style={{width:40,height:4,borderRadius:2,background:MUTED,margin:"-8px auto 20px"}}/>
            <div style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:4}}>What the icons mean</div>
            <p style={{color:MUTED,fontSize:13,marginBottom:20}}>A quick guide to what you'll see on profiles.</p>
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              {[
                {icon:<TargetIcon size={18} color={SPOT}/>, label:"Spotted you", desc:"This person sent you a Spot — they're especially interested in your profile.", color:SPOT},
                {icon:"✓",  label:"Verified",        desc:"This profile has been verified with a selfie. You know they're a real person.", color:BLUE},
                {icon:"⚡", label:"Boost active",    desc:"This user is Boosted — their profile is prioritised in Discover right now.", color:PURPLE},
                {icon:"💜", label:"Liked a prompt",  desc:"You liked one of their answers. It'll be pinned at the top of your chat if you match."},
                {icon:"📍", label:"Distance",        desc:"How far away they are from your current location."},
              ].map(item=>(
                <div key={item.label} style={{display:"flex",alignItems:"flex-start",gap:14}}>
                  <div style={{width:40,height:40,borderRadius:"50%",background:item.color?`${item.color}22`:`${PURPLE}22`,border:`1px solid ${item.color||PURPLE}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    {typeof item.icon === "string"
                      ? <span style={{fontSize:18,color:item.color||PURPLE,fontWeight:800}}>{item.icon}</span>
                      : item.icon}
                  </div>
                  <div>
                    <div style={{color:TEXT,fontWeight:700,fontSize:14,marginBottom:3}}>{item.label}</div>
                    <div style={{color:MUTED,fontSize:13,lineHeight:1.5}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={()=>setShowLegend(false)} style={{marginTop:24,background:GRAD,border:"none",borderRadius:16,padding:"13px",color:"white",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",width:"100%"}}>Got it</button>
          </div>
        </div>
      )}

      {/* Expanded profile modal */}
      {expandedProfile && (
        <ExpandedProfileModal
          profile={expandedProfile}
          onClose={()=>setExpandedProfile(null)}
          onLike={()=>swipe("like")}
          onPass={()=>swipe("pass")}
          onSpot={()=>sendSpot()}
          onLikePrompt={(prof, prompt)=>{
            if (!prompt) return;
            setLikedPromptData({profile:prof, prompt});
            setShowPromptLiked(true);
            setTimeout(()=>setShowPromptLiked(false), 3000);
            setExpandedProfile(null);
            swipe("like");
          }}
        />
      )}

      {/* Prompt liked toast */}
      {showPromptLiked && likedPromptData && (
        <div style={{position:"fixed",bottom:100,left:"50%",transform:"translateX(-50%)",
          background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:20,
          padding:"12px 20px",zIndex:600,maxWidth:320,width:"90%",
          boxShadow:"0 8px 32px rgba(0,0,0,0.4)",backdropFilter:"blur(8px)"}}>
          <div style={{fontSize:11,color:MUTED,marginBottom:4}}>💜 You liked {likedPromptData.profile.name}'s answer to:</div>
          <div style={{fontSize:12,color:PURPLE,fontWeight:700,marginBottom:2}}>{PROMPT_BANK.find(p=>p.id===likedPromptData.prompt.id)?.q}</div>
          <div style={{fontSize:13,color:TEXT,fontStyle:"italic"}}>"{likedPromptData.prompt.a}"</div>
          <div style={{fontSize:11,color:MUTED,marginTop:6}}>This will be pinned at the top of your chat if you match ⚡</div>
        </div>
      )}
    </div>
  );
}

// ── Matches Screen ────────────────────────────────────────────
function MatchesScreen({ onChat, boosted }) {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"20px 20px 10px"}}>
        <h2 style={{margin:0,fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT}}>Matches</h2>
        <p style={{margin:"4px 0 0",color:MUTED,fontSize:13}}>{MATCHES_DATA.length} workout connections</p>
      </div>

      {/* Who liked you */}
      <div style={{margin:"0 20px 16px",borderRadius:20,overflow:"hidden",border:`1px solid ${PURPLE}33`,background:`${PURPLE}0A`}}>
        <div style={{padding:"12px 16px 10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:14,fontWeight:700,color:TEXT}}>👁 {LIKED_YOU.length} people liked you</div>
            <div style={{fontSize:12,color:MUTED,marginTop:2}}>{boosted ? "Tap a profile to connect" : "Unlock with Boost to see who"}</div>
          </div>
          {!boosted && (
            <span style={{fontSize:11,fontWeight:700,background:GRAD,color:"white",borderRadius:20,padding:"4px 12px",whiteSpace:"nowrap"}}>⚡ Boost</span>
          )}
        </div>
        <div style={{display:"flex",gap:2,padding:"0 2px 2px"}}>
          {LIKED_YOU.map((p,i)=>(
            <div key={p.id} style={{flex:1,position:"relative",overflow:"hidden",height:100,borderRadius:i===0?"0 0 0 18px":i===LIKED_YOU.length-1?"0 0 18px 0":"0",cursor:boosted?"pointer":"default"}}>
              <img src={p.photos[0]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",filter:boosted?"none":"blur(14px) brightness(0.5) saturate(0.3)"}} onError={e=>{e.target.style.background=CARD_BG;}}/>
              {!boosted && (
                <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(18,18,31,0.3)"}}>
                  {i===1 && <div style={{width:32,height:32,borderRadius:"50%",background:`${PURPLE}44`,border:`1px solid ${PURPLE}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>🔒</div>}
                </div>
              )}
              {boosted && (
                <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top,rgba(18,18,31,0.8),transparent)",padding:"6px 4px 4px",textAlign:"center",fontSize:10,color:"white",fontWeight:700}}>{p.workouts[0]}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Match list */}
      <div style={{flex:1,overflowY:"auto",padding:"0 20px"}}>
        <div style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Your Matches</div>
        {MATCHES_DATA.map(m=>(
          <div key={m.id} onClick={()=>onChat(m)} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 0",borderBottom:`1px solid ${CARD_BG}`,cursor:"pointer"}}>
            <div style={{position:"relative"}}>
              <img src={m.photos[0]} style={{width:64,height:64,borderRadius:"50%",objectFit:"cover",border:`2px solid ${PURPLE}44`}} alt={m.name} onError={e=>{e.target.style.background=CARD_BG;}}/>
              {m.unread && <div style={{position:"absolute",top:2,right:2,width:12,height:12,borderRadius:"50%",background:GRAD,border:`2px solid ${BG}`}}/>}
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:700,fontSize:16,color:TEXT,marginBottom:4}}>{m.name}, {m.age}</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{m.workouts.map(w=><WorkoutBadge key={w} label={w} small/>)}</div>
            </div>
            <div style={{color:MUTED,fontSize:20}}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Chat List ─────────────────────────────────────────────────
function ChatListScreen({ onChat }) {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"20px 20px 10px"}}>
        <h2 style={{margin:0,fontSize:24,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT}}>Chats</h2>
        <p style={{margin:"4px 0 0",color:MUTED,fontSize:13}}>Your conversations</p>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"0 20px"}}>
        {MATCHES_DATA.map(m=>(
          <div key={m.id} onClick={()=>onChat(m)} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 0",borderBottom:`1px solid ${CARD_BG}`,cursor:"pointer"}}>
            <div style={{position:"relative"}}>
              <img src={m.photos[0]} style={{width:54,height:54,borderRadius:"50%",objectFit:"cover"}} alt={m.name} onError={e=>{e.target.style.background=CARD_BG;}}/>
              {m.unread && <div style={{position:"absolute",top:0,right:0,width:12,height:12,borderRadius:"50%",background:GRAD,border:`2px solid ${BG}`}}/>}
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}>
                <span style={{fontWeight:700,fontSize:15,color:TEXT}}>{m.name}</span>
                <span style={{fontSize:11,color:MUTED}}>{m.time}</span>
              </div>
              <div style={{display:"flex",gap:6,marginBottom:4}}>{m.workouts.map(w=><WorkoutBadge key={w} label={w} small/>)}</div>
              <p style={{margin:0,fontSize:13,color:m.unread?TEXT:MUTED,fontWeight:m.unread?600:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Chat Screen ───────────────────────────────────────────────
function ChatScreen({ match, onBack }) {
  const [msgs, setMsgs]         = useState(MESSAGES_DATA[match.id] || []);
  const [input, setInput]       = useState("");
  const [showIce, setShowIce]   = useState(true);
  const [showShareDate, setShowShareDate] = useState(false);
  const [showReportChat, setShowReportChat] = useState(false);
  const [dateSent, setDateSent] = useState(false);
  const [showGif, setShowGif]   = useState(false);
  const [gifQuery, setGifQuery] = useState("");
  const [gifs, setGifs]         = useState([]);
  const [gifLoading, setGifLoading] = useState(false);

  // Tenor API — free public beta key for prototyping
  const TENOR_KEY = "AIzaSyAyimkuYQYF_y28sQBVQkuDZnuWEsE7hFc";

  const searchGifs = async (q) => {
    const query = q || "gym workout";
    setGifLoading(true);
    try {
      const res = await fetch(`https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(query)}&key=${TENOR_KEY}&limit=12&media_filter=gif`);
      const data = await res.json();
      setGifs(data.results || []);
    } catch {
      // Fallback: show static gym GIF placeholders
      setGifs([]);
    }
    setGifLoading(false);
  };

  const sendGif = (gif) => {
    const url = gif?.media_formats?.gif?.url || gif?.media_formats?.tinygif?.url;
    if (!url) return;
    setMsgs(m => [...m, { id:Date.now(), from:"me", text:"", gif:url, time:"Now" }]);
    setShowGif(false);
    setShowIce(false);
  };

  const icebreakers = [
    `What's your go-to pre-workout snack? 🍌`,
    `Favourite exercise we both do?`,
    `Morning session or evening grind? ☀️🌙`,
    `What's your current training goal? 🎯`,
  ];

  const send = (text) => {
    const t = (text||input).trim();
    if (!t) return;
    setMsgs(m=>[...m,{id:Date.now(),from:"me",text:t,time:"Now"}]);
    setInput("");
    setShowIce(false);
  };

  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"14px 20px",display:"flex",alignItems:"center",gap:12,borderBottom:`1px solid ${CARD_BG}`}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0}}>←</button>
        <img src={match.photos[0]} style={{width:42,height:42,borderRadius:"50%",objectFit:"cover"}} alt={match.name} onError={e=>{e.target.style.background=CARD_BG;}}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:16,color:TEXT}}>{match.name}, {match.age}</div>
          <div style={{fontSize:11,color:MUTED}}>{match.workouts.join(" · ")}</div>
        </div>
        <button onClick={()=>setShowShareDate(true)} style={{background:GRAD,border:"none",borderRadius:12,padding:"6px 12px",color:"white",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",flexShrink:0}}>📍 Share Date</button>
        <button onClick={()=>setShowReportChat(true)} style={{background:"none",border:"none",color:MUTED,cursor:"pointer",padding:"4px",flexShrink:0}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"14px 20px",display:"flex",flexDirection:"column",gap:10}}>
        <div style={{textAlign:"center",marginBottom:6}}>
          <span style={{fontSize:11,color:MUTED,background:CARD_BG,borderRadius:20,padding:"4px 12px"}}>You matched on shared workout vibes ⚡</span>
        </div>

        {/* Pinned prompt — shown when user liked a prompt before matching */}
        {match.prompts && match.prompts[0] && (() => {
          const def = PROMPT_BANK.find(p => p.id === match.prompts[0].id);
          if (!def) return null;
          return (
            <div style={{background:`${PURPLE}18`,border:`1px solid ${PURPLE}33`,borderRadius:16,padding:"12px 14px",marginBottom:4}}>
              <div style={{fontSize:10,color:PURPLE,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:4}}>💜 You liked their answer</div>
              <div style={{fontSize:11,color:MUTED,marginBottom:4}}>{def.q}</div>
              <div style={{fontSize:14,color:TEXT,fontWeight:600,fontStyle:"italic"}}>"{match.prompts[0].a}"</div>
              <button onClick={()=>send(`I loved your answer to "${def.q}" — ${match.prompts[0].a.substring(0,40)}...`)} style={{marginTop:8,background:GRAD,border:"none",borderRadius:12,padding:"6px 14px",color:"white",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>
                Use as opener 💬
              </button>
            </div>
          );
        })()}

        {/* Icebreakers */}
        {showIce && (
          <div style={{background:CARD_BG,borderRadius:16,padding:"12px 14px",marginBottom:4}}>
            <div style={{fontSize:11,color:MUTED,fontWeight:600,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>💬 Icebreaker prompts</div>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {icebreakers.map(ice=>(
                <button key={ice} onClick={()=>send(ice)} style={{background:BG,border:`1px solid ${PURPLE}33`,borderRadius:12,padding:"8px 12px",color:TEXT,fontSize:13,cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans', sans-serif"}}>
                  {ice}
                </button>
              ))}
            </div>
          </div>
        )}

        {msgs.map(m=>(
          <div key={m.id} style={{display:"flex",justifyContent:m.from==="me"?"flex-end":"flex-start"}}>
            {m.gif ? (
              <div style={{maxWidth:"72%",borderRadius:m.from==="me"?"18px 18px 4px 18px":"18px 18px 18px 4px",overflow:"hidden",position:"relative"}}>
                <img src={m.gif} alt="GIF" style={{width:"100%",maxWidth:220,display:"block",borderRadius:"inherit"}}/>
                <span style={{position:"absolute",bottom:4,right:6,fontSize:9,color:"rgba(255,255,255,0.7)",fontWeight:700,background:"rgba(0,0,0,0.4)",borderRadius:6,padding:"1px 5px"}}>GIF</span>
              </div>
            ) : (
              <div style={{maxWidth:"72%",padding:"10px 14px",borderRadius:m.from==="me"?"18px 18px 4px 18px":"18px 18px 18px 4px",background:m.from==="me"?GRAD:CARD_BG}}>
                <p style={{margin:0,fontSize:14,color:TEXT,lineHeight:1.5}}>{m.text}</p>
                <p style={{margin:"4px 0 0",fontSize:10,textAlign:"right",color:m.from==="me"?"rgba(255,255,255,0.6)":MUTED}}>{m.time}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* GIF picker */}
      {showGif && (
        <div style={{background:CARD_BG,borderTop:`1px solid ${BG}`,padding:"12px 14px",maxHeight:280,display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <input value={gifQuery} onChange={e=>setGifQuery(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&searchGifs(gifQuery)}
              placeholder="Search GIFs... (e.g. gains, workout, flex)"
              style={{flex:1,background:BG,border:`1px solid ${PURPLE}44`,borderRadius:20,padding:"8px 14px",color:TEXT,fontSize:13,outline:"none",fontFamily:"'DM Sans', sans-serif"}}/>
            <button onClick={()=>searchGifs(gifQuery)} style={{background:GRAD,border:"none",borderRadius:20,padding:"8px 14px",color:"white",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>Search</button>
            <button onClick={()=>setShowGif(false)} style={{background:"none",border:"none",color:MUTED,fontSize:18,cursor:"pointer",padding:"0 2px"}}>✕</button>
          </div>
          {/* Quick tags */}
          <div style={{display:"flex",gap:6,overflowX:"auto",scrollbarWidth:"none"}}>
            {["gains","workout","flex","high five","fist bump","running","yoga","celebration"].map(tag=>(
              <button key={tag} onClick={()=>{setGifQuery(tag);searchGifs(tag);}} style={{background:BG,border:`1px solid ${PURPLE}33`,borderRadius:20,padding:"4px 12px",color:MUTED,fontSize:11,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",fontFamily:"'DM Sans', sans-serif",flexShrink:0}}>{tag}</button>
            ))}
          </div>
          <div style={{flex:1,overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4}}>
            {gifLoading ? (
              <div style={{gridColumn:"1/-1",textAlign:"center",padding:"20px",color:MUTED,fontSize:13}}>Loading GIFs...</div>
            ) : gifs.length === 0 ? (
              <div style={{gridColumn:"1/-1",textAlign:"center",padding:"20px",color:MUTED,fontSize:13}}>
                {gifQuery?"No results — try another search":"Tap a tag or search above 👆"}
              </div>
            ) : (
              gifs.map(gif=>{
                const url = gif?.media_formats?.tinygif?.url || gif?.media_formats?.gif?.url;
                return url ? (
                  <div key={gif.id} onClick={()=>sendGif(gif)} style={{borderRadius:8,overflow:"hidden",cursor:"pointer",aspectRatio:"4/3",background:BG}}>
                    <img src={url} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  </div>
                ) : null;
              })
            )}
          </div>
          <div style={{fontSize:10,color:MUTED,textAlign:"right",opacity:0.5}}>Powered by Tenor</div>
        </div>
      )}

      {/* Input bar */}
      <div style={{padding:"10px 14px 18px",display:"flex",gap:8,alignItems:"center",borderTop:`1px solid ${CARD_BG}`}}>
        <button onClick={()=>{setShowGif(g=>!g);if(!showGif&&gifs.length===0)searchGifs("gym workout");}}
          style={{width:36,height:36,borderRadius:"50%",border:`1px solid ${showGif?PURPLE:MUTED+"44"}`,background:showGif?`${PURPLE}22`:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.2s"}}>
          <span style={{fontSize:15}}>🎞</span>
        </button>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Message..."
          style={{flex:1,background:CARD_BG,border:"none",borderRadius:24,padding:"11px 18px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif"}}/>
        <button onClick={()=>send()} style={{width:40,height:40,borderRadius:"50%",border:"none",background:GRAD,color:"white",fontSize:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>↑</button>
      </div>

      {/* Share Your Date modal */}
      {showShareDate && (
        <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.94)",zIndex:900,display:"flex",flexDirection:"column",justifyContent:"flex-end",backdropFilter:"blur(8px)"}}>
          <div style={{background:CARD_BG,borderRadius:"28px 28px 0 0",padding:"24px 24px 40px",display:"flex",flexDirection:"column",gap:16,maxWidth:430,width:"100%"}}>
            <div style={{width:40,height:4,borderRadius:2,background:MUTED,margin:"-8px auto 8px"}}/>
            <div style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>📍 Share Your Gym Date</div>
            <p style={{color:MUTED,fontSize:13,lineHeight:1.6}}>
              Let a trusted friend know where you're going and who you're meeting. They'll receive a link with {match.name}'s profile and your gym location.
            </p>
            <div style={{background:BG,borderRadius:16,padding:"14px 16px",display:"flex",flexDirection:"column",gap:8}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <img src={match.photos[0]} style={{width:40,height:40,borderRadius:"50%",objectFit:"cover"}} alt="" onError={e=>{e.target.style.background=CARD_BG;}}/>
                <div>
                  <div style={{color:TEXT,fontWeight:700,fontSize:14}}>{match.name}, {match.age}</div>
                  <div style={{color:MUTED,fontSize:12}}>{match.workouts.join(" · ")}</div>
                </div>
              </div>
              <div style={{color:MUTED,fontSize:12,paddingTop:4,borderTop:`1px solid ${CARD_BG}`}}>📍 Meeting at: <span style={{color:TEXT,fontWeight:600}}>Fitness First, Marina</span></div>
            </div>
            {dateSent ? (
              <div style={{background:`${GREEN}18`,border:`1px solid ${GREEN}44`,borderRadius:16,padding:"14px",textAlign:"center",color:GREEN,fontWeight:700,fontSize:15}}>✓ Shared with your emergency contact</div>
            ) : (
              <>
                <button onClick={()=>setDateSent(true)} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"'Syne', sans-serif"}}>
                  Share with trusted contact
                </button>
                <button onClick={()=>{}} style={{background:CARD_BG,border:"none",borderRadius:16,padding:"13px",color:MUTED,fontWeight:600,fontSize:14,cursor:"pointer"}}>
                  Copy link instead
                </button>
              </>
            )}
            <button onClick={()=>{setShowShareDate(false);setDateSent(false);}} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline",textAlign:"center"}}>
              {dateSent?"Close":"Cancel"}
            </button>
          </div>
        </div>
      )}

      {showReportChat && <BlockReportModal profile={match} onClose={()=>setShowReportChat(false)}/>}
    </div>
  );
}

// ── Settings screens ──────────────────────────────────────────
function NotificationsScreen({ onBack }) {
  const [prefs,setPrefs]=useState({newMatch:true,newMessage:true,flame:true,profileView:false,weeklyDigest:true,promotions:false});
  const toggle=k=>setPrefs(p=>({...p,[k]:!p[k]}));
  const rows=[
    {key:"newMatch",   label:"New Sparks",        sub:"When you both swipe right"},
    {key:"newMessage", label:"New Messages",       sub:"When a match messages you"},
    {key:"spot",      label:"Spots 🎯",          sub:"When someone Spots you"},
    {key:"profileView",label:"Profile Views",      sub:"When someone views your profile"},
    {key:"weeklyDigest",label:"Weekly Digest",     sub:"Your week in Spotter, every Sunday"},
    {key:"promotions", label:"Offers & Promotions",sub:"Deals on Boost and Spots"},
  ];
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"18px 20px 12px",display:"flex",alignItems:"center",gap:14,borderBottom:`1px solid ${CARD_BG}`}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0}}>←</button>
        <span style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>Notifications</span>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"8px 20px 32px"}}>
        {rows.map(r=>(
          <div key={r.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",borderBottom:`1px solid ${CARD_BG}`}}>
            <div><div style={{color:TEXT,fontSize:14,fontWeight:600}}>{r.label}</div><div style={{color:MUTED,fontSize:12,marginTop:2}}>{r.sub}</div></div>
            <Toggle on={prefs[r.key]} onToggle={()=>toggle(r.key)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrivacyScreen({ onBack }) {
  const [prefs,setPrefs]=useState({swipeUpSpot:true,showDistance:true,showGym:true,showAge:true,showActive:false,readReceipts:true,incognito:false});
  const toggle=k=>setPrefs(p=>({...p,[k]:!p[k]}));
  const rows=[
    {key:"swipeUpSpot", label:"Swipe Up to Spot 🎯",sub:"Send a Spot by swiping up on a card"},
    {key:"showDistance", label:"Show Distance",       sub:"Show how far you are from matches"},
    {key:"showGym",      label:"Show Gym Name",       sub:"Display your gym on your card"},
    {key:"showAge",      label:"Show Age",            sub:"Let others see your age"},
    {key:"showActive",   label:"Show Active Status",  sub:"Let matches see when you were last active"},
    {key:"readReceipts", label:"Read Receipts",       sub:"Let matches know when you've read their message"},
    {key:"incognito",    label:"Incognito Mode",      sub:"Browse unseen — Boost only 🔒",boost:true},
  ];
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"18px 20px 12px",display:"flex",alignItems:"center",gap:14,borderBottom:`1px solid ${CARD_BG}`}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0}}>←</button>
        <span style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>Privacy</span>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"8px 20px 32px"}}>
        {rows.map(r=>(
          <div key={r.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0",borderBottom:`1px solid ${CARD_BG}`,opacity:r.boost&&!prefs[r.key]?0.7:1}}>
            <div style={{flex:1,paddingRight:12}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{color:TEXT,fontSize:14,fontWeight:600}}>{r.label}</span>
                {r.boost&&<span style={{fontSize:10,fontWeight:700,background:GRAD,color:"white",borderRadius:10,padding:"1px 7px"}}>BOOST</span>}
              </div>
              <div style={{color:MUTED,fontSize:12,marginTop:2}}>{r.sub}</div>
            </div>
            <Toggle on={prefs[r.key]} onToggle={()=>toggle(r.key)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerificationScreen({ onBack, isVerified, onVerified }) {
  const [step,setStep]=useState(isVerified?"verified":"intro");
  const poses=["🤳","💪","👋","🙌"];
  const [pose]=useState(poses[Math.floor(Math.random()*poses.length)]);
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"18px 20px 12px",display:"flex",alignItems:"center",gap:14,borderBottom:`1px solid ${CARD_BG}`}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0}}>←</button>
        <span style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>Verification</span>
        {step==="verified"&&<span style={{marginLeft:"auto",fontSize:12,fontWeight:700,background:`${GREEN}22`,color:GREEN,borderRadius:20,padding:"4px 12px"}}>✓ Verified</span>}
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"24px 20px 32px",display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
        {step==="intro"&&<>
          <div style={{fontSize:64}}>📋</div>
          <div style={{textAlign:"center"}}>
            <div style={{fontWeight:800,fontSize:20,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:8}}>Verify Your Profile</div>
            <p style={{color:MUTED,fontSize:14,lineHeight:1.6}}>A blue ✓ badge shows you're a real person. Takes 30 seconds.</p>
          </div>
          {[["👤","Match your selfie","We compare it to your profile photo"],["🔒","Selfie never stored","Deleted immediately after verification"],["⚡","Instant review","Usually under a minute"]].map(([icon,t,s])=>(
            <div key={t} style={{background:CARD_BG,borderRadius:16,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:12,width:"100%"}}>
              <span style={{fontSize:22,flexShrink:0}}>{icon}</span>
              <div><div style={{color:TEXT,fontWeight:600,fontSize:14}}>{t}</div><div style={{color:MUTED,fontSize:12,marginTop:2}}>{s}</div></div>
            </div>
          ))}
          <button onClick={()=>setStep("pose")} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%"}}>Start Verification</button>
        </>}
        {step==="pose"&&<>
          <div style={{textAlign:"center"}}>
            <div style={{fontWeight:800,fontSize:20,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:8}}>Strike a Pose</div>
            <p style={{color:MUTED,fontSize:14,lineHeight:1.6}}>Take a selfie doing the pose below so we know it's really you.</p>
          </div>
          <div style={{width:140,height:140,borderRadius:"50%",background:GRAD,display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,boxShadow:`0 0 40px ${PURPLE}66`}}>{pose}</div>
          <div style={{background:CARD_BG,borderRadius:16,padding:"14px 20px",width:"100%",textAlign:"center"}}>
            <div style={{color:MUTED,fontSize:12,marginBottom:4}}>Your pose challenge</div>
            <div style={{color:TEXT,fontSize:15,fontWeight:700}}>{pose==="🤳"?"Selfie with hand raised":pose==="💪"?"Flex your arm at camera":pose==="👋"?"Wave with both hands":"Two thumbs up!"}</div>
          </div>
          <button onClick={()=>setStep("submitted")} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%"}}>📸 Take Selfie & Submit</button>
          <button onClick={()=>setStep("intro")} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline"}}>Go back</button>
        </>}
        {step==="submitted"&&<>
          <div style={{fontSize:64}}>⏳</div>
          <div style={{textAlign:"center"}}>
            <div style={{fontWeight:800,fontSize:20,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:8}}>Selfie Submitted!</div>
            <p style={{color:MUTED,fontSize:14,lineHeight:1.6}}>Reviewing now — usually under a minute. We'll notify you when done.</p>
          </div>
          <button onClick={()=>{onVerified();setStep("verified");}} style={{background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:16,padding:"14px",color:MUTED,fontWeight:600,fontSize:15,cursor:"pointer",width:"100%"}}>Simulate: Mark as Verified ✓</button>
        </>}
        {step==="verified"&&<>
          <div style={{fontSize:64}}>✅</div>
          <div style={{textAlign:"center"}}>
            <div style={{fontWeight:800,fontSize:20,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:8}}>You're Verified!</div>
            <p style={{color:MUTED,fontSize:14,lineHeight:1.6}}>A blue ✓ badge now appears on your profile and on your card in Discover.</p>
          </div>
          <div style={{background:`${GREEN}18`,border:`1px solid ${GREEN}44`,borderRadius:20,padding:"12px 24px",display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:20}}>✓</span><span style={{color:GREEN,fontWeight:700,fontSize:15}}>Profile Verified</span>
          </div>
          <button onClick={onBack} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:800,fontSize:15,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%"}}>← Back to Profile</button>
        </>}
      </div>
    </div>
  );
}

function SafetyCentreScreen({ onBack }) {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"18px 20px 12px",display:"flex",alignItems:"center",gap:14,borderBottom:`1px solid ${CARD_BG}`}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:MUTED,fontSize:20,cursor:"pointer",padding:0}}>←</button>
        <span style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>Safety Centre</span>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"16px 20px 32px",display:"flex",flexDirection:"column",gap:14}}>
        <div style={{background:`${GREEN}18`,border:`1px solid ${GREEN}33`,borderRadius:20,padding:"16px"}}>
          <div style={{fontSize:13,fontWeight:700,color:GREEN,marginBottom:4}}>🛡 Your safety is our priority</div>
          <div style={{color:MUTED,fontSize:12,lineHeight:1.6}}>All profiles are verified. You can block or report anyone at any time. Your location is never shared without permission.</div>
        </div>
        {[
          {icon:"📍",title:"Share Your Gym Date",sub:"Before meeting someone, share their profile + your gym location with a trusted friend.",action:"Share now"},
          {icon:"🚫",title:"Block & Report",sub:"Block removes them instantly. Report sends it to our safety team for review."},
          {icon:"📞",title:"Emergency Contacts",sub:"Save a contact who gets notified if you don't check in after your date."},
          {icon:"💬",title:"Trust Your Instincts",sub:"Never feel pressured. You can unmatch at any time, no explanation needed."},
          {icon:"🔒",title:"Your Data",sub:"We never sell your data. Read our full privacy policy at spotter.app/privacy"},
        ].map(item=>(
          <div key={item.title} style={{background:CARD_BG,borderRadius:16,padding:"16px"}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
              <span style={{fontSize:22,flexShrink:0}}>{item.icon}</span>
              <div style={{flex:1}}>
                <div style={{color:TEXT,fontWeight:700,fontSize:14,marginBottom:4}}>{item.title}</div>
                <div style={{color:MUTED,fontSize:12,lineHeight:1.5}}>{item.sub}</div>
                {item.action && <button style={{background:GRAD,border:"none",borderRadius:12,padding:"7px 16px",color:"white",fontSize:12,fontWeight:700,cursor:"pointer",marginTop:10,fontFamily:"'DM Sans', sans-serif"}}>{item.action}</button>}
              </div>
            </div>
          </div>
        ))}
        <div style={{textAlign:"center",padding:"8px 0"}}>
          <div style={{color:MUTED,fontSize:12}}>Need help? Contact us at</div>
          <div style={{color:PURPLE,fontSize:13,fontWeight:600,marginTop:2}}>safety@spotter.app</div>
        </div>
      </div>
    </div>
  );
}

function BlockReportModal({ profile, onClose }) {
  const [done, setDone] = useState("");
  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.94)",zIndex:900,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(8px)"}}>
      <div style={{background:CARD_BG,borderRadius:24,padding:"28px 24px",textAlign:"center",maxWidth:300}}>
        <div style={{fontSize:48,marginBottom:12}}>{done==="block"?"🚫":"📋"}</div>
        <div style={{fontWeight:800,fontSize:18,color:TEXT,marginBottom:8}}>{done==="block"?`${profile?.name} blocked`:"Report submitted"}</div>
        <div style={{color:MUTED,fontSize:13,marginBottom:20,lineHeight:1.5}}>{done==="block"?"They won't see your profile and you won't see theirs.":"Our safety team will review this within 24 hours."}</div>
        <button onClick={onClose} style={{background:GRAD,border:"none",borderRadius:16,padding:"12px 32px",color:"white",fontWeight:700,cursor:"pointer",fontSize:15}}>Done</button>
      </div>
    </div>
  );
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.94)",zIndex:900,display:"flex",flexDirection:"column",justifyContent:"flex-end",backdropFilter:"blur(8px)"}}>
      <div style={{background:CARD_BG,borderRadius:"28px 28px 0 0",padding:"24px 24px 36px",display:"flex",flexDirection:"column",gap:12,maxWidth:430,width:"100%"}}>
        <div style={{width:40,height:4,borderRadius:2,background:MUTED,margin:"-8px auto 8px"}}/>
        <div style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT,marginBottom:4}}>
          {profile ? `${profile.name}, ${profile.age}` : "This profile"}
        </div>
        {["I'm not interested","It seems like a fake profile","Inappropriate content","Harassment or abuse","Other"].map(reason=>(
          <button key={reason} onClick={()=>setDone("report")} style={{background:BG,border:`1px solid ${CARD_BG}`,borderRadius:14,padding:"13px 16px",color:TEXT,fontSize:14,cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans', sans-serif"}}>
            📋 Report: {reason}
          </button>
        ))}
        <button onClick={()=>setDone("block")} style={{background:"#F76E6E11",border:"1px solid #F76E6E33",borderRadius:14,padding:"13px 16px",color:"#F76E6E",fontSize:14,fontWeight:700,cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans', sans-serif"}}>
          🚫 Block {profile?.name||"this person"}
        </button>
        <button onClick={onClose} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline",textAlign:"center",marginTop:4}}>Cancel</button>
      </div>
    </div>
  );
}

// ── Edit Profile Modal ────────────────────────────────────────
const EXERCISE_DICT=["Deadlifts","Sumo Deadlifts","Romanian Deadlifts","Back Squat","Front Squat","Overhead Squat","Bench Press","Incline Bench Press","Overhead Press","Push Press","Barbell Rows","Pendlay Rows","Power Clean","Hang Clean","Clean and Jerk","Snatch","Good Mornings","Hip Thrust","Barbell Curl","Skull Crushers","Dumbbell Curls","Hammer Curls","Arnold Press","Lateral Raises","Front Raises","Dumbbell Rows","Goblet Squat","Bulgarian Split Squat","Dumbbell Lunges","Lat Pulldown","Cable Rows","Face Pulls","Tricep Pushdowns","Leg Press","Leg Curl","Leg Extension","Calf Raises","Pull-ups","Chin-ups","Muscle-ups","Dips","Push-ups","Handstand Push-ups","Pistol Squat","L-Sit","Ab Wheel","Dragon Flag","Hollow Body Hold","Thrusters","Wall Balls","Box Jumps","Double Unders","Kettlebell Swings","Burpees","Toes to Bar","Ring Rows","Assault Bike","SkiErg","Rowing","Sled Push","Sled Pull","Farmers Carry","Sandbag Lunges","Burpee Broad Jumps","Battle Ropes","Mountain Climbers","Jump Squats","Jump Lunges","High Knees","Sprint Intervals","Tempo Runs","Hill Sprints","Sun Salutation","Warrior Flow","Pigeon Pose","Core Plank","Child's Pose","Downward Dog","Hip Openers","Bridge Pose","Boat Pose","The Hundred","Roll Up","Single Leg Stretch","Teaser","Side Kicks"];

function EditProfileModal({ profile, onSave, onClose }) {
  const [form, setForm]       = useState({...profile});
  const [exInput, setExInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleEx = (val) => {
    setExInput(val);
    setSuggestions(val.length>1 ? EXERCISE_DICT.filter(e=>e.toLowerCase().includes(val.toLowerCase())&&!form.exercises.includes(e)).slice(0,5) : []);
  };
  const addEx = (ex) => { if(form.exercises.length<5){setForm(f=>({...f,exercises:[...f.exercises,ex]}));} setExInput(""); setSuggestions([]); };
  const rmEx  = (ex) => setForm(f=>({...f,exercises:f.exercises.filter(e=>e!==ex)}));
  const toggleW = (w) => setForm(f=>{
    const has=f.workouts.includes(w);
    if(has) return {...f,workouts:f.workouts.filter(x=>x!==w)};
    if(f.workouts.length>=2) return {...f,workouts:[f.workouts[1],w]};
    return {...f,workouts:[...f.workouts,w]};
  });

  const field = (label,key,type="text",ph="") => (
    <div>
      <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:6}}>{label}</label>
      <input type={type} value={form[key]||""} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} placeholder={ph}
        style={{width:"100%",background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:12,padding:"11px 14px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif"}}/>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:BG,zIndex:1000,display:"flex",flexDirection:"column",overflowY:"auto"}}>
      <div style={{padding:"18px 20px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${CARD_BG}`,position:"sticky",top:0,background:BG,zIndex:10}}>
        <button onClick={onClose} style={{background:"none",border:"none",color:MUTED,fontSize:15,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>Cancel</button>
        <span style={{fontWeight:800,fontSize:16,fontFamily:"'Syne', sans-serif",color:TEXT}}>Edit Profile</span>
        <button onClick={()=>onSave(form)} style={{background:GRAD,border:"none",borderRadius:12,padding:"7px 18px",color:"white",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>Save</button>
      </div>
      <div style={{padding:"20px",display:"flex",flexDirection:"column",gap:22,paddingBottom:48}}>
        <div style={{display:"flex",gap:12}}>{field("Name","name","text","First name")}<div style={{flex:"0 0 80px"}}>{field("Age","age","number")}</div></div>
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:6}}>Bio</label>
          <textarea value={form.bio||""} onChange={e=>setForm(f=>({...f,bio:e.target.value}))} rows={3}
            style={{width:"100%",background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:12,padding:"11px 14px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif",resize:"none"}}/>
        </div>
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:4}}>Workout Styles</label>
          <p style={{fontSize:11,color:MUTED,marginBottom:10}}>Up to 2 · First = primary</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {WORKOUT_OPTIONS.map(w=>{const a=form.workouts?.includes(w),p=form.workouts?.[0]===w;return(
              <button key={w} onClick={()=>toggleW(w)} style={{background:a?(p?GRAD:`${BLUE}33`):CARD_BG,border:a?"none":`1px solid ${MUTED}33`,borderRadius:20,padding:"7px 16px",cursor:"pointer",color:a?"white":MUTED,fontSize:13,fontWeight:600,fontFamily:"'DM Sans', sans-serif"}}>
                {p?"① ":a?"② ":""}{w}
              </button>
            );})}
          </div>
        </div>
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:10}}>Experience Level</label>
          <div style={{display:"flex",gap:8}}>
            {LEVEL_OPTIONS.map(l=>(
              <button key={l} onClick={()=>setForm(f=>({...f,level:l}))} style={{flex:1,background:form.level===l?GRAD:CARD_BG,border:"none",borderRadius:12,padding:"11px 4px",color:form.level===l?"white":MUTED,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"}}>{l}</button>
            ))}
          </div>
        </div>
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:10}}>Ideal Workout Time</label>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {TIME_OPTIONS.map(t=>(
              <button key={t} onClick={()=>setForm(f=>({...f,time:t}))} style={{background:form.time===t?`${PURPLE}22`:CARD_BG,border:form.time===t?`1px solid ${PURPLE}`:`1px solid transparent`,borderRadius:12,padding:"11px 16px",color:form.time===t?TEXT:MUTED,fontSize:13,fontWeight:form.time===t?700:400,cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans', sans-serif"}}>{t}</button>
            ))}
          </div>
        </div>
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:10}}>Looking For</label>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {LOOKING_FOR_OPTIONS.map(opt=>{const a=form.lookingFor===opt.id;return(
              <button key={opt.id} onClick={()=>setForm(f=>({...f,lookingFor:opt.id}))} style={{background:a?`${PURPLE}22`:CARD_BG,border:a?`1px solid ${PURPLE}`:`1px solid transparent`,borderRadius:14,padding:"12px 16px",cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:18}}>{opt.icon}</span>
                <div><div style={{color:a?TEXT:MUTED,fontSize:14,fontWeight:a?700:500,fontFamily:"'DM Sans', sans-serif"}}>{opt.label}</div><div style={{color:MUTED,fontSize:12,marginTop:1}}>{opt.sub}</div></div>
                {a&&<div style={{marginLeft:"auto",width:18,height:18,borderRadius:"50%",background:GRAD,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white",flexShrink:0}}>✓</div>}
              </button>
            );})}
          </div>
        </div>
        {field("Gym Location","gym","text","e.g. Fitness First, Marina")}
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:4}}>Top 5 Exercises</label>
          <p style={{fontSize:11,color:MUTED,marginBottom:8}}>{(form.exercises||[]).length}/5 · type to search or add your own</p>
          <div style={{position:"relative"}}>
            <input value={exInput} onChange={e=>handleEx(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&exInput.trim())addEx(exInput.trim());}}
              placeholder={(form.exercises||[]).length>=5?"Max 5 reached":"e.g. Deadlifts, Box Jumps..."} disabled={(form.exercises||[]).length>=5}
              style={{width:"100%",background:CARD_BG,border:`1px solid ${PURPLE}44`,borderRadius:12,padding:"11px 14px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif",opacity:(form.exercises||[]).length>=5?0.4:1}}/>
            {suggestions.length>0&&(
              <div style={{position:"absolute",top:"100%",left:0,right:0,background:CARD_BG,borderRadius:12,border:`1px solid ${PURPLE}44`,zIndex:10,overflow:"hidden",marginTop:4}}>
                {suggestions.map(s=><div key={s} onClick={()=>addEx(s)} style={{padding:"11px 14px",color:TEXT,fontSize:13,cursor:"pointer",borderBottom:`1px solid ${BG}`}}>{s}</div>)}
              </div>
            )}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:10}}>
            {(form.exercises||[]).map(e=>(
              <span key={e} style={{background:`${PURPLE}22`,border:`1px solid ${PURPLE}44`,color:TEXT,borderRadius:20,padding:"5px 12px",fontSize:12,display:"flex",alignItems:"center",gap:6}}>
                {e}<button onClick={()=>rmEx(e)} style={{background:"none",border:"none",color:MUTED,cursor:"pointer",fontSize:14,padding:0,lineHeight:1}}>×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Prompts */}
        <div>
          <label style={{fontSize:11,color:MUTED,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:4}}>Your Prompts</label>
          <p style={{fontSize:11,color:MUTED,marginBottom:14}}>Choose 3 prompts and write your answers. These show on your expanded profile.</p>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {[0,1,2].map(i=>{
              const prompts = form.prompts || [{id:"",a:""},{id:"",a:""},{id:"",a:""}];
              const p = prompts[i] || {id:"",a:""};
              const usedIds = prompts.filter((_,j)=>j!==i).map(x=>x.id).filter(Boolean);
              const available = PROMPT_BANK.filter(pb=>!usedIds.includes(pb.id));
              const updatePrompt = (field, val) => setForm(f=>{
                const ps = [...(f.prompts||[{id:"",a:""},{id:"",a:""},{id:"",a:""}])];
                ps[i] = {...(ps[i]||{id:"",a:""}), [field]:val};
                return {...f, prompts:ps};
              });
              return (
                <div key={i} style={{background:CARD_BG,borderRadius:16,padding:"14px"}}>
                  <div style={{fontSize:11,color:MUTED,fontWeight:600,marginBottom:8}}>Prompt {i+1}</div>
                  <select value={p.id} onChange={e=>updatePrompt("id",e.target.value)}
                    style={{width:"100%",background:BG,border:`1px solid ${PURPLE}44`,borderRadius:10,padding:"9px 12px",color:p.id?TEXT:MUTED,fontSize:13,outline:"none",fontFamily:"'DM Sans', sans-serif",marginBottom:8,cursor:"pointer"}}>
                    <option value="">Choose a prompt…</option>
                    {available.map(pb=><option key={pb.id} value={pb.id}>{pb.q}</option>)}
                    {p.id && !available.find(pb=>pb.id===p.id) && <option value={p.id}>{PROMPT_BANK.find(pb=>pb.id===p.id)?.q}</option>}
                  </select>
                  {p.id && (
                    <textarea value={p.a} onChange={e=>updatePrompt("a",e.target.value)}
                      placeholder="Your answer…" rows={2}
                      style={{width:"100%",background:BG,border:`1px solid ${PURPLE}44`,borderRadius:10,padding:"9px 12px",color:TEXT,fontSize:13,outline:"none",fontFamily:"'DM Sans', sans-serif",resize:"none"}}/>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={()=>onSave(form)} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px",color:"white",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%",marginTop:8}}>Save Profile</button>
      </div>
    </div>
  );
}

// ── Profile Screen ────────────────────────────────────────────
function ProfileScreen({ onOpenBoost, userProfile, onUpdateProfile }) {
  const [editing,setEditing]         = useState(false);
  const [settingsScreen,setSettings] = useState(null);
  const [isVerified,setIsVerified]   = useState(false);
  const [isSignedOut,setSignedOut]   = useState(false);
  const [showSafety,setShowSafety]   = useState(false);
  const [gpsCity,setGpsCity]         = useState("Detecting...");
  const [locationOverride,setLocOvr] = useState(null);
  const [showLocModal,setShowLoc]    = useState(false);
  const [locInput,setLocInput]       = useState("");

  // Use passed-in userProfile, fall back to defaults
  const me = userProfile;
  const setMe = onUpdateProfile;

  // Simulate GPS detection on mount
  useEffect(()=>{ const t = setTimeout(()=>setGpsCity("Dubai, UAE"),1200); return ()=>clearTimeout(t); }, []);
  const activeCity = locationOverride || gpsCity;

  return (
    <div style={{flex:1,overflowY:"auto",position:"relative"}}>
      {/* Cover */}
      <div style={{position:"relative",height:160,background:GRAD,flexShrink:0}}>
        <div style={{position:"absolute",inset:0,opacity:0.12,backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,0.1) 20px,rgba(255,255,255,0.1) 21px)"}}/>
      </div>
      {/* Avatar — pulled up over the cover */}
      <div style={{display:"flex",justifyContent:"center",marginTop:-44,marginBottom:0,position:"relative",zIndex:1}}>
        <div style={{position:"relative",display:"inline-block"}}>
          <img src={me.photos[0]} style={{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:`4px solid ${BG}`,display:"block"}} alt="Profile" onError={e=>{e.target.style.background=CARD_BG;}}/>
          {isVerified && <div style={{position:"absolute",bottom:2,right:2,width:24,height:24,borderRadius:"50%",background:BLUE,border:`2px solid ${BG}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"white",fontWeight:700}}>✓</div>}
        </div>
      </div>

      <div style={{padding:"12px 20px 14px",textAlign:"center"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:4}}>
          <span style={{fontSize:22,fontWeight:800,fontFamily:"'Syne', sans-serif",color:TEXT}}>{me.name}, {me.age}</span>
          {isVerified && <span style={{width:20,height:20,borderRadius:"50%",background:BLUE,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"white",fontWeight:700,flexShrink:0}}>✓</span>}
        </div>
        <div onClick={()=>setShowLoc(true)} style={{display:"inline-flex",alignItems:"center",gap:6,margin:"0 0 12px",cursor:"pointer",background:CARD_BG,borderRadius:20,padding:"5px 14px"}}>
          <span style={{fontSize:13}}>{locationOverride?"✈️":"📍"}</span>
          <span style={{fontSize:13,color:TEXT,fontWeight:600}}>{activeCity}</span>
          {locationOverride && <span style={{fontSize:10,color:BLUE,fontWeight:600,background:`${BLUE}22`,borderRadius:10,padding:"1px 6px"}}>Travelling</span>}
          <span style={{fontSize:11,color:MUTED}}>›</span>
        </div>
        <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:8}}>
          {me.workouts.map(w=><WorkoutBadge key={w} label={w}/>)}
        </div>
        {me.lookingFor && <div style={{display:"flex",justifyContent:"center",marginBottom:12}}><LookingForBadge id={me.lookingFor}/></div>}
        <p style={{color:MUTED,fontSize:14,lineHeight:1.6,margin:"0 0 14px"}}>{me.bio}</p>
        <button onClick={()=>setEditing(true)} style={{background:GRAD,border:"none",borderRadius:16,padding:"12px 32px",color:"white",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",width:"100%",marginBottom:10}}>Edit Profile</button>
      </div>

      {/* Stats */}
      <div style={{margin:"0 20px 18px",display:"flex",gap:8}}>
        {[{val:"∞",sub:"Swipes",tip:"Boost for unlimited",tipFn:onOpenBoost},{val:"3",sub:"Spots 🎯",tip:"Get more Spots",tipFn:onOpenBoost},{val:"4",sub:"Matches",tip:null},{val:"28",sub:"Views",tip:"This week"}].map(s=>(
          <div key={s.sub} style={{flex:1,background:CARD_BG,borderRadius:16,padding:"12px 6px",textAlign:"center"}}>
            <div style={{fontSize:18,fontWeight:800,color:TEXT,fontFamily:"'Syne', sans-serif"}}>{s.val}</div>
            <div style={{fontSize:10,color:MUTED,marginTop:2,lineHeight:1.3}}>{s.sub}</div>
            {s.tip && (s.tipFn
              ? <div onClick={s.tipFn} style={{fontSize:9,color:PURPLE,marginTop:3,cursor:"pointer",textDecoration:"underline",lineHeight:1.3}}>{s.tip}</div>
              : <div style={{fontSize:9,color:PURPLE,marginTop:3,lineHeight:1.3}}>{s.tip}</div>
            )}
          </div>
        ))}
      </div>

      {/* Workout profile */}
      <div style={{margin:"0 20px 18px",background:CARD_BG,borderRadius:20,padding:"16px 18px"}}>
        <div style={{fontSize:12,color:MUTED,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12}}>Workout Profile</div>
        {[["🏋️ Level",me.level],["⏰ Best time",me.time],["📍 Gym",me.gym]].map(([k,v])=>(
          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${BG}`}}>
            <span style={{color:MUTED,fontSize:13}}>{k}</span><span style={{color:TEXT,fontSize:13,fontWeight:600}}>{v}</span>
          </div>
        ))}
        {me.lookingFor && (() => {
          const opt = LOOKING_FOR_OPTIONS.find(o=>o.id===me.lookingFor);
          return opt ? (
            <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${BG}`}}>
              <span style={{color:MUTED,fontSize:13}}>💘 Looking for</span>
              <span style={{color:TEXT,fontSize:13,fontWeight:600}}>{opt.icon} {opt.label}</span>
            </div>
          ) : null;
        })()}
        <div style={{padding:"10px 0 0"}}>
          <div style={{color:MUTED,fontSize:12,marginBottom:8}}>🔥 Top 5 exercises</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {me.exercises.map(e=><span key={e} style={{background:`${PURPLE}22`,border:`1px solid ${PURPLE}44`,color:TEXT,borderRadius:20,padding:"4px 12px",fontSize:12}}>{e}</span>)}
          </div>
        </div>
      </div>

      {/* My Prompts */}
      {(me.prompts||[]).filter(p=>p.id&&p.a).length > 0 && (
        <div style={{margin:"0 20px 20px",display:"flex",flexDirection:"column",gap:10}}>
          <div style={{fontSize:12,color:MUTED,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>My Prompts</div>
          {(me.prompts||[]).filter(p=>p.id&&p.a).map(p=>{
            const def = PROMPT_BANK.find(pb=>pb.id===p.id);
            if (!def) return null;
            return (
              <div key={p.id} style={{background:CARD_BG,borderRadius:16,padding:"14px 16px"}}>
                <div style={{fontSize:11,color:MUTED,marginBottom:6}}>{def.q}</div>
                <div style={{fontSize:14,color:TEXT,fontWeight:600,lineHeight:1.5}}>{p.a}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Settings */}
      <div style={{margin:"0 20px 32px"}}>
        {[
          {label:"🔔 Notifications",fn:()=>setSettings("notifications")},
          {label:"🔒 Privacy",       fn:()=>setSettings("privacy")},
          {label:"📋 Verification",  fn:()=>setSettings("verification")},
          {label:"🛡 Safety Centre", fn:()=>setShowSafety(true)},
          {label:"🚪 Sign out",      fn:()=>setSignedOut(true)},
        ].map(item=>(
          <div key={item.label} onClick={item.fn} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:`1px solid ${CARD_BG}`,cursor:"pointer"}}>
            <span style={{color:TEXT,fontSize:14}}>{item.label}</span>
            <span style={{color:MUTED}}>›</span>
          </div>
        ))}
      </div>

      {/* Modals */}
      {editing && <EditProfileModal profile={me} onSave={u=>{setMe(u);setEditing(false);}} onClose={()=>setEditing(false)}/>}
      {settingsScreen && (
        <div style={{position:"fixed",inset:0,background:BG,zIndex:500,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {settingsScreen==="notifications" && <NotificationsScreen onBack={()=>setSettings(null)}/>}
          {settingsScreen==="privacy"       && <PrivacyScreen onBack={()=>setSettings(null)}/>}
          {settingsScreen==="verification"  && <VerificationScreen onBack={()=>setSettings(null)} isVerified={isVerified} onVerified={()=>setIsVerified(true)}/>}
        </div>
      )}
      {showSafety && (
        <div style={{position:"fixed",inset:0,background:BG,zIndex:500,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <SafetyCentreScreen onBack={()=>setShowSafety(false)}/>
        </div>
      )}
      {isSignedOut && (
        <div style={{position:"fixed",inset:0,background:BG,zIndex:500,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 32px",gap:20,textAlign:"center"}}>
          <SpotterLogo height={64}/>
          <div style={{fontSize:24,fontWeight:900,fontFamily:"'Syne', sans-serif",background:GRAD,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>See you next session</div>
          <p style={{color:MUTED,fontSize:14,textAlign:"center",lineHeight:1.6,maxWidth:280}}>You've been signed out. Your matches and messages are waiting.</p>
          <button onClick={()=>setSignedOut(false)} style={{background:GRAD,border:"none",borderRadius:16,padding:"14px 32px",color:"white",fontWeight:800,fontSize:16,cursor:"pointer",fontFamily:"'Syne', sans-serif",width:"100%",marginTop:8}}>Sign Back In</button>
          <button onClick={()=>setSignedOut(false)} style={{background:"none",border:"none",color:MUTED,fontSize:13,cursor:"pointer",textDecoration:"underline"}}>Continue as guest</button>
        </div>
      )}

      {/* Location modal */}
      {showLocModal && (
        <div style={{position:"fixed",inset:0,background:"rgba(12,12,24,0.94)",zIndex:600,display:"flex",flexDirection:"column",justifyContent:"flex-end",backdropFilter:"blur(8px)"}}>
          <div style={{background:CARD_BG,borderRadius:"28px 28px 0 0",padding:"24px 24px 40px",display:"flex",flexDirection:"column",gap:16,maxWidth:430,width:"100%"}}>
            <div style={{width:40,height:4,borderRadius:2,background:MUTED,margin:"-8px auto 4px"}}/>
            <div style={{fontWeight:800,fontSize:18,fontFamily:"'Syne', sans-serif",color:TEXT}}>Your Location</div>
            <div style={{background:BG,borderRadius:16,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span>📍</span>
                <div><div style={{color:TEXT,fontWeight:700,fontSize:14}}>GPS Location</div><div style={{color:MUTED,fontSize:12}}>{gpsCity}</div></div>
              </div>
              <button onClick={()=>{setLocOvr(null);setShowLoc(false);}} style={{background:!locationOverride?GRAD:CARD_BG,border:"none",borderRadius:20,padding:"6px 14px",color:"white",fontSize:12,fontWeight:700,cursor:"pointer"}}>{!locationOverride?"Active":"Use GPS"}</button>
            </div>
            <div>
              <div style={{color:MUTED,fontSize:12,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:12}}>✈️ Travelling? Set manually</div>
              <div style={{display:"flex",gap:8}}>
                <input value={locInput} onChange={e=>setLocInput(e.target.value)} placeholder="e.g. Barcelona, Spain"
                  style={{flex:1,background:BG,border:`1px solid ${PURPLE}44`,borderRadius:12,padding:"11px 14px",color:TEXT,fontSize:14,outline:"none",fontFamily:"'DM Sans', sans-serif"}}/>
                <button onClick={()=>{if(locInput.trim()){setLocOvr(locInput.trim());setLocInput("");}setShowLoc(false);}} style={{background:GRAD,border:"none",borderRadius:12,padding:"11px 18px",color:"white",fontWeight:700,fontSize:14,cursor:"pointer"}}>Set</button>
              </div>
              {locationOverride && <button onClick={()=>{setLocOvr(null);setShowLoc(false);}} style={{background:"none",border:"none",color:"#F76E6E",fontSize:13,cursor:"pointer",marginTop:10,textDecoration:"underline",padding:0}}>Remove override — go back to GPS</button>}
            </div>
            <button onClick={()=>setShowLoc(false)} style={{background:BG,border:"none",borderRadius:16,padding:"13px",color:MUTED,fontSize:14,cursor:"pointer"}}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Nav icons ─────────────────────────────────────────────────
function NavIcon({ id, active }) {
  const color = active ? TEXT : MUTED;
  const wrap  = (child) => <div style={{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"}}>{child}</div>;
  if (id==="discover") return wrap(<DumbbellIcon size={24} color={color}/>);
  if (id==="matches")  return wrap(<svg width="22" height="22" viewBox="0 0 24 24" fill={active?"#E46FA0":"none"} stroke={active?"#E46FA0":MUTED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>);
  if (id==="chat")     return wrap(<ProteinShakeIcon size={22} color={color}/>);
  return wrap(<PersonIcon size={22} color={color}/>);
}

// ── Root App ──────────────────────────────────────────────────
const NAV = [
  {id:"discover",label:"Discover"},
  {id:"matches", label:"Matches"},
  {id:"chat",    label:"Chat"},
  {id:"profile", label:"Profile"},
];

export default function SpotterApp() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [tab, setTab]           = useState("discover");
  const [chatMatch, setChatMatch] = useState(null);
  const [showBoost, setShowBoost] = useState(false);
  const [lastPassed, setLastPassed] = useState(null);

  // Global user profile — set by onboarding, editable in ProfileScreen
  const [userProfile, setUserProfile] = useState({
    name:"You", age:26,
    photos:["https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80",
            "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80"],
    workouts:["Weightlifting","Hyrox"], gym:"Fitness First, Marina",
    level:"Intermediate", time:"🌅 Early Bird · 5–9am", lookingFor:"serious",
    exercises:["Deadlifts","Overhead Press","Romanian Deadlifts","Barbell Rows","Squats"],
    bio:"Lifting heavy and living light. Looking for a gym partner who won't skip Monday.",
    prompts:[
      {id:"neverSkip",   a:"Deadlifts. Non-negotiable."},
      {id:"beatYou",     a:"A deadlift competition. Just try me."},
      {id:"postWorkout", a:"Protein shake, then pretend I'm not exhausted."},
    ],
  });

  const handleOnboardingComplete = (form) => {
    // Map onboarding form → userProfile shape
    setUserProfile(prev => ({
      ...prev,
      name:     form.name     || prev.name,
      age:      form.age      || prev.age,
      photos:   form.photos?.length ? form.photos : prev.photos,
      workouts: form.workout?.length ? form.workout : prev.workouts,
      gym:      form.gym      || prev.gym,
      level:    form.level    || prev.level,
      time:     form.time     || prev.time,
      lookingFor: form.lookingFor || prev.lookingFor,
      prompts:  form.prompts?.filter(p=>p.id&&p.a).length ? form.prompts.filter(p=>p.id&&p.a) : prev.prompts,
    }));
    setShowOnboarding(false);
  };

  const SHARED_STYLE = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
    ::-webkit-scrollbar{display:none;}
    button{font-family:'DM Sans',sans-serif;}
    input,textarea,select{font-family:'DM Sans',sans-serif;}
  `;

  if (showOnboarding) {
    return (
      <>
        <style>{SHARED_STYLE}</style>
        <div style={{width:"100%",maxWidth:430,margin:"0 auto",height:"100svh",background:BG,fontFamily:"'DM Sans', sans-serif",color:TEXT,overflow:"hidden"}}>
          <OnboardingScreen onComplete={handleOnboardingComplete}/>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{SHARED_STYLE}</style>
      <div style={{width:"100%",maxWidth:430,margin:"0 auto",height:"100svh",background:BG,display:"flex",flexDirection:"column",fontFamily:"'DM Sans', sans-serif",color:TEXT,position:"relative",overflow:"hidden"}}>
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}}>
          {tab==="discover" && <DiscoverScreen onOpenBoost={()=>setShowBoost(true)} lastPassed={lastPassed} onSetLastPassed={setLastPassed} onMatch={m=>{setChatMatch(m);setTab("chat");}}/>}
          {tab==="matches"  && <MatchesScreen onChat={m=>{setChatMatch(m);setTab("chat");}} boosted={false}/>}
          {tab==="chat"     && !chatMatch && <ChatListScreen onChat={m=>setChatMatch(m)}/>}
          {tab==="chat"     && chatMatch  && <ChatScreen match={chatMatch} onBack={()=>setChatMatch(null)}/>}
          {tab==="profile"  && <ProfileScreen onOpenBoost={()=>setShowBoost(true)} userProfile={userProfile} onUpdateProfile={setUserProfile}/>}
        </div>

        {/* Bottom nav */}
        <div style={{display:"flex",borderTop:`1px solid ${CARD_BG}`,background:BG,paddingBottom:"env(safe-area-inset-bottom, 8px)"}}>
          {NAV.map(n=>{
            const active = tab===n.id;
            return (
              <button key={n.id} onClick={()=>{setTab(n.id);if(n.id!=="chat")setChatMatch(null);}}
                style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 0 6px",background:"none",border:"none",cursor:"pointer",gap:3,position:"relative",transition:"opacity 0.15s"}}>
                {active && <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:32,height:2,borderRadius:2,background:GRAD}}/>}
                <NavIcon id={n.id} active={active}/>
                <span style={{fontSize:10,fontWeight:active?700:400,color:active?TEXT:MUTED,letterSpacing:"0.04em",transition:"color 0.15s"}}>{n.label}</span>
              </button>
            );
          })}
        </div>

        {showBoost && <BoostModal onClose={()=>setShowBoost(false)}/>}
      </div>
    </>
  );
}
