export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "anne-of-green-gables-tour",
    path: "/anne-of-green-gables-tour",
    title: "Anne of Green Gables Tour — Prince Edward Island from Charlottetown",
    shortTitle: "Anne of Green Gables",
    summary:
      "Green Gables Heritage Place, Lucy Maud Montgomery landscapes, and Cavendish countryside — the defining literary excursion from Charlottetown cruise port.",
    duration: "4–5 hours (typical tour)",
    fitness: "Easy",
    distanceFromTerminal:
      "Green Gables is roughly 35 km northwest of the cruise terminal; about 40–50 minutes by road through rural PEI.",
    transferRequired: true,
    transferNote:
      "Coach or van essential. Most organised tours include Green Gables admission, guided interpretation, and scenic stops in Cavendish.",
    bestFor: [
      "Literature lovers and families familiar with Anne Shirley",
      "First-time visitors to Prince Edward Island",
      "Passengers with at least six hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Anne of Green Gables tours follow predictable highway routes with reliable timing — among the most popular Charlottetown shore excursions when your port call allows half a day.",
    weatherConsiderations:
      "Cavendish is exposed to Gulf of St. Lawrence breezes. Pack layers and rain gear; farm paths can be muddy after showers.",
    cruiseSnapshot:
      "Anne of Green Gables is why many cruise passengers choose Charlottetown. A focused tour delivers the farmhouse, Haunted Wood trails, and Montgomery-era landscapes without attempting the entire island in one port day.",
    snapshotFields: {
      timeInPort: "6–8 hours recommended",
      bestFor: "Literature, families, photography",
      activityLevel: "Easy — short walks on heritage paths",
      familyFriendly: "Excellent — beloved by children and adults",
      returnToShip: "High confidence on standard tours",
      popularTypes: "Dedicated Anne tours, Cavendish combos",
    },
    description: [
      "Lucy Maud Montgomery drew the world to Prince Edward Island through Anne Shirley's adventures at Green Gables. Cruise passengers who make the drive to Cavendish step into the preserved farmhouse, barnyard, and woodland trails that inspired the novels — a pilgrimage for readers and a vivid history lesson for everyone else.",
      "Green Gables Heritage Place sits in the heart of Cavendish, surrounded by rolling fields and the kind of red-clay lanes Montgomery described. Guides connect fiction to real island life: orphan trains, one-room schoolhouses, and the quiet beauty that made PEI a literary landmark.",
      "Most shore excursions allow 60–90 minutes at Green Gables plus photo stops at coastal lookouts or Avonlea Village depending on the operator. Attempting Green Gables on a four-hour port call is usually unrealistic once transfer time and all-aboard buffer are counted.",
    ],
    highlights: [
      "Green Gables Heritage Place farmhouse and exhibits",
      "Haunted Wood and Lovers Lane walking trails",
      "Lucy Maud Montgomery literary interpretation",
      "Cavendish countryside and coastal photo stops",
    ],
    faqs: [
      {
        question: "How far is Green Gables from the Charlottetown cruise terminal?",
        answer:
          "About 35 km — typically 40–50 minutes each way by coach. It is not walkable on a port day.",
      },
      {
        question: "Do I need to have read Anne of Green Gables?",
        answer:
          "No — guides explain the stories and island context for newcomers. Fans will appreciate extra detail at the heritage site.",
      },
      {
        question: "Is this tour suitable for a short port call?",
        answer:
          "Allow at least six hours ashore. Four-hour calls should stay in Charlottetown or choose a walking tour instead.",
      },
    ],
    relatedSlugs: [
      "cavendish-north-shore-tour",
      "best-of-prince-edward-island-tour",
      "charlottetown-walking-tour",
    ],
  },
  {
    slug: "best-of-prince-edward-island-tour",
    path: "/best-of-prince-edward-island-tour",
    title: "Best of Prince Edward Island Tour from Charlottetown",
    shortTitle: "Best of PEI",
    summary:
      "A curated island sampler — Green Gables, red cliffs, fishing villages, and coastal lookouts — for cruise passengers who want PEI's greatest hits in one day.",
    duration: "6–7 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Full-day routing typically covers 80–120 km across central and north shore PEI from the cruise terminal.",
    transferRequired: true,
    transferNote:
      "Coach or small-group van required. Itineraries combine heritage sites, beaches, and village stops with lunch built in.",
    bestFor: [
      "First-time PEI visitors wanting a comprehensive overview",
      "Passengers with eight or more hours ashore",
      "Photographers seeking cliffs, farms, and harbours",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Full-day island tours are popular but demand generous port time. Confirm your all-aboard deadline and build 45–60 minutes buffer beyond the stated return.",
    weatherConsiderations:
      "Coastal fog and wind can appear quickly. Operators may shorten beach stops in poor weather while keeping heritage sites on schedule.",
    cruiseSnapshot:
      "Prince Edward Island rewards slow travel — but cruise passengers rarely have that luxury. A best-of-PEI tour compresses Green Gables, north shore scenery, and Confederation-era stories into one structured day from Charlottetown.",
    snapshotFields: {
      timeInPort: "8+ hours recommended",
      bestFor: "Overview, photography, culture",
      activityLevel: "Easy — optional short walks at stops",
      familyFriendly: "Good — long coach day",
      returnToShip: "Moderate — verify timing with operator",
      popularTypes: "Full-day coach tours, small-group vans",
    },
    description: [
      "The best-of-PEI formula varies by operator but typically threads together Green Gables or Confederation history with north shore lookouts, a fishing harbour, and time at a red-sand beach. The goal is breadth — giving cruise passengers a genuine sense of why the island captivates visitors beyond Charlottetown's waterfront.",
      "Unlike a dedicated Anne tour, this product spreads attention across landscapes Montgomery made famous and the working coast where lobster boats still define village economies. Lunch stops often feature local seafood when season permits.",
      "This is not a realistic choice for five-hour port calls. Eight hours ashore with an early departure from the terminal gives operators room to deliver the experience without rushing past all-aboard.",
    ],
    highlights: [
      "Multi-stop island overview in one port day",
      "Green Gables or Confederation heritage included",
      "North shore cliffs and red-sand beaches",
      "Fishing village and lighthouse photo opportunities",
    ],
    faqs: [
      {
        question: "How much of PEI does this tour cover?",
        answer:
          "Most routes focus on central and north shore highlights within driving range of Charlottetown — not the entire island end to end.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Some operators include lunch; others stop at a restaurant where you pay separately. Confirm when you enquire.",
      },
      {
        question: "Can I do this on a six-hour port call?",
        answer:
          "It is tight. Most passengers need eight or more hours ashore for a comfortable full-day island tour.",
      },
    ],
    relatedSlugs: [
      "anne-of-green-gables-tour",
      "cavendish-north-shore-tour",
      "prince-edward-island-scenic-drive",
    ],
  },
  {
    slug: "cavendish-north-shore-tour",
    path: "/cavendish-north-shore-tour",
    title: "Cavendish & North Shore Tour — Prince Edward Island",
    shortTitle: "Cavendish North Shore",
    summary:
      "Dunes, red cliffs, Green Gables country, and Gulf beaches — the scenic north shore loop that defines PEI's coastal character from Charlottetown.",
    duration: "5–6 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Cavendish and north shore beaches lie 30–45 km from the cruise terminal; roughly 40–55 minutes by road.",
    transferRequired: true,
    transferNote:
      "Coach or van required. Tours typically include Green Gables, a beach stop, and coastal lookout points.",
    bestFor: [
      "Beach lovers and coastal photographers",
      "Anne of Green Gables fans wanting scenery plus heritage",
      "Passengers with six or more hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "North shore loops stay within predictable driving distances from Charlottetown — reliable timing when booked through operators who monitor cruise schedules.",
    weatherConsiderations:
      "Gulf beaches are windy and cooler than they look. Sand dunes and boardwalks can be slippery when wet; bring footwear you do not mind getting sandy.",
    cruiseSnapshot:
      "PEI's north shore delivers the postcard imagery cruise passengers expect — white sand, red sandstone cliffs, and farm fields rolling to the sea. Combining Cavendish with a beach stop fills a balanced half-day from the cruise port.",
    snapshotFields: {
      timeInPort: "6–8 hours recommended",
      bestFor: "Beaches, Anne sites, coastal scenery",
      activityLevel: "Easy — dune walks optional",
      familyFriendly: "Excellent for beach days",
      returnToShip: "High on standard north shore loops",
      popularTypes: "Cavendish combos, beach and heritage tours",
    },
    description: [
      "Prince Edward Island National Park protects long stretches of the north shore where dunes, marshland, and red cliffs meet the Gulf of St. Lawrence. Cruise tours through Cavendish often pair Green Gables Heritage Place with Brackley Beach or Covehead Harbour — giving passengers both literary heritage and open-coast drama.",
      "Summer brings busy parking at popular beaches, but organised tours handle logistics and timing. Spring and fall calls offer quieter shores with sharper light for photography along the sandstone bluffs.",
      "Most itineraries allow 45–90 minutes at a beach plus time at Green Gables. Combining this loop with a full Charlottetown walking tour on the same port day is only feasible on extended calls with careful scheduling.",
    ],
    highlights: [
      "Cavendish and Green Gables Heritage Place",
      "North shore beaches and dune landscapes",
      "Red sandstone cliff lookouts",
      "Prince Edward Island National Park scenery",
    ],
    faqs: [
      {
        question: "Can I swim on a Cavendish north shore tour?",
        answer:
          "Some tours allow beach free time in summer when weather cooperates. Water temperatures remain cool even in July — many guests wade rather than swim.",
      },
      {
        question: "How does this differ from the dedicated Anne tour?",
        answer:
          "Both visit Green Gables country. The north shore tour emphasises beaches and coastal scenery alongside heritage stops.",
      },
      {
        question: "Is Cavendish crowded when cruise ships are in port?",
        answer:
          "July and August can be busy. Morning departures often beat peak beach crowds.",
      },
    ],
    relatedSlugs: [
      "anne-of-green-gables-tour",
      "pei-lighthouse-tour",
      "prince-edward-island-scenic-drive",
    ],
  },
  {
    slug: "pei-lighthouse-tour",
    path: "/pei-lighthouse-tour",
    title: "PEI Lighthouse Tour from Charlottetown",
    shortTitle: "PEI Lighthouses",
    summary:
      "Classic island lighthouses, harbour entrances, and coastal drives — PEI's maritime heritage within reach of Charlottetown cruise passengers.",
    duration: "4–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Lighthouse stops typically lie 15–40 km from the cruise terminal depending on routing.",
    transferRequired: true,
    transferNote:
      "Coach or van required. Routes may include Covehead, Point Prim, or Victoria-by-the-Sea depending on operator and season.",
    bestFor: [
      "Maritime history and lighthouse enthusiasts",
      "Photographers seeking coastal icons",
      "Passengers with five or more hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Lighthouse tours use fixed coastal routes with predictable stop times — strong return-to-ship confidence when your port call allows half a day.",
    weatherConsiderations:
      "Lighthouse lookouts are fully exposed. Fog can obscure views but adds atmosphere; wind requires a warm layer even in summer.",
    cruiseSnapshot:
      "Prince Edward Island's lighthouses guarded a coast of hidden reefs and shifting sandbars. A dedicated tour connects Charlottetown passengers to these sentinels without the full-day commitment of a best-of-island run.",
    snapshotFields: {
      timeInPort: "5–7 hours recommended",
      bestFor: "Lighthouses, coastal drives, photography",
      activityLevel: "Easy — short walks at each stop",
      familyFriendly: "Good",
      returnToShip: "High on organised tours",
      popularTypes: "Coastal drives, lighthouse circuits",
    },
    description: [
      "PEI's lighthouses range from square wooden towers to brick beacons overlooking the Northumberland Strait. Tours from Charlottetown typically visit two or three accessible lights with time for boardwalk walks and harbour photography at fishing villages along the way.",
      "Point Prim Lighthouse — PEI's oldest — and Covehead Harbour light near the national park are common inclusions. Some operators add Victoria-by-the-Sea, a tiny arts village where the tide races through a narrow channel past a classic white tower.",
      "Unlike rural wildlife tours elsewhere in Atlantic Canada, lighthouse circuits stay close enough to Charlottetown for reliable half-day timing on standard Canada & New England port calls.",
    ],
    highlights: [
      "Multiple PEI lighthouse stops in one tour",
      "Coastal boardwalks and harbour photography",
      "Maritime history interpretation",
      "Flexible half-day timing from cruise port",
    ],
    faqs: [
      {
        question: "Can you go inside the lighthouses?",
        answer:
          "Access varies by site and season. Some towers allow climbs; others are exterior viewing only. Confirm with your operator.",
      },
      {
        question: "Which lighthouses are included?",
        answer:
          "Itineraries differ. Point Prim, Covehead, and Victoria-by-the-Sea appear frequently — ask when you enquire for your sailing date.",
      },
      {
        question: "Is this tour good for a five-hour port call?",
        answer:
          "Yes — lighthouse circuits are among the better half-day options when Green Gables feels too far for your schedule.",
      },
    ],
    relatedSlugs: [
      "prince-edward-island-scenic-drive",
      "cavendish-north-shore-tour",
      "historic-confederation-tour",
    ],
  },
  {
    slug: "prince-edward-island-scenic-drive",
    path: "/prince-edward-island-scenic-drive",
    title: "Prince Edward Island Scenic Drive from Charlottetown",
    shortTitle: "PEI Scenic Drive",
    summary:
      "Red cliffs, farm lanes, fishing harbours, and quiet coastal roads — a flexible scenic day through PEI countryside without overpromising a fixed checklist.",
    duration: "4–6 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Scenic routes vary; coastal and rural loops typically cover 40–80 km from the cruise terminal.",
    transferRequired: true,
    transferNote:
      "Coach or small-group van essential. Itineraries adapt to weather, light, and seasonal road conditions.",
    bestFor: [
      "Scenery lovers who have already toured downtown Charlottetown",
      "Photographers wanting rural PEI",
      "Six-to-eight-hour port calls seeking island flavour",
    ],
    returnConfidence: "High",
    returnNote:
      "Scenic drives that stay on central and north shore roads generally maintain reliable return timing compared with ambitious full-island circuits.",
    weatherConsiderations:
      "Rural roads can be narrow; fog and rain reduce visibility on coastal sections. Operators may reroute inland on stormy days.",
    cruiseSnapshot:
      "PEI's appeal is as much the journey as any single attraction — red soil fields, lupins in June, and lobster boats in every harbour. A scenic drive samples that landscape within sensible range of Charlottetown cruise port.",
    snapshotFields: {
      timeInPort: "6–8 hours ideal",
      bestFor: "Coastal drives, photography, villages",
      activityLevel: "Easy — optional walks at stops",
      familyFriendly: "Good",
      returnToShip: "High on peninsula loops",
      popularTypes: "Small-group vans, private drivers",
    },
    description: [
      "Scenic drive tours trace PEI's north shore, Confederation Trail crossings, or quiet back roads through potato country and dairy farms. Stops might include a harbour, a cliff lookout, a craft studio, or a church with a view — routing changes with season and group interest.",
      "This product suits passengers who have already walked Charlottetown's waterfront and want rural island character without committing to a rigid Green Gables-only itinerary. Honest operators explain what is realistic for your visit month before leaving the terminal.",
      "Photography at red cliffs, lighthouses, and working harbours fills memory cards without the fitness demands of long backcountry hikes.",
    ],
    highlights: [
      "Flexible coastal and countryside routing",
      "Red cliffs, farms, and fishing harbours",
      "Weather-adaptive itineraries",
      "Balanced timing for standard port days",
    ],
    faqs: [
      {
        question: "How does this differ from the best-of-PEI tour?",
        answer:
          "Best-of tours hit named highlights on a fixed schedule. Scenic drives allow more flexible routing and may skip Green Gables depending on the day.",
      },
      {
        question: "Will we stop at a beach?",
        answer:
          "Many scenic drives include a beach or cliff lookout when weather and time allow. Confirm beach stops when you enquire.",
      },
      {
        question: "Is motion sickness a concern?",
        answer:
          "PEI roads are generally gentle compared with mountainous coasts, but winding rural lanes affect some guests.",
      },
    ],
    relatedSlugs: [
      "pei-lighthouse-tour",
      "cavendish-north-shore-tour",
      "lobster-experience-tour",
    ],
  },
  {
    slug: "charlottetown-walking-tour",
    path: "/charlottetown-walking-tour",
    title: "Charlottetown Walking Tour — Historic Waterfront & City Centre",
    shortTitle: "Walking Tour",
    summary:
      "Province House, Peake's Wharf, Victoria Row, and Confederation history — the essential introduction to Charlottetown from the cruise pier on foot.",
    duration: "2–3 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Cruise ships dock at Charlottetown's waterfront — Victoria Row and Province House are often 5–15 minutes on foot.",
    transferRequired: false,
    transferNote:
      "Walking tours start at or near the terminal. No transfer required for standard downtown routes.",
    bestFor: [
      "First-time visitors wanting city orientation",
      "Shorter port calls and mobility-conscious guests",
      "Rainy-day plans mixing indoor stops with harbour walks",
    ],
    returnConfidence: "High",
    returnNote:
      "City walking tours are the most flexible Charlottetown shore excursions for timing. Self-guided waterfront walks are easy to control against all-aboard.",
    weatherConsiderations:
      "Harbour walks are exposed to breeze. Cobblestones and boardwalks need sensible footwear when wet.",
    cruiseSnapshot:
      "Charlottetown is among the most walkable cruise ports in Atlantic Canada — when your ship docks centrally, a walking tour delivers Confederation history, shopping, and harbour views without highway transfers.",
    snapshotFields: {
      timeInPort: "4+ hours for core highlights",
      bestFor: "History, architecture, harbour walks",
      activityLevel: "Easy — flat waterfront, gentle hills inland",
      familyFriendly: "Excellent",
      returnToShip: "Very high near waterfront berths",
      popularTypes: "Guided walks, self-guided harbour loops",
    },
    description: [
      "A Charlottetown walking tour threads together the stories that shaped Canada: the 1864 Charlottetown Conference at Province House, the merchants who built Peake's Wharf, and the Victorian streetscape of Victoria Row where cafés and boutiques occupy heritage storefronts.",
      "Guides explain how this small capital became the birthplace of Confederation and how the island's fishing, farming, and shipbuilding economies shaped the harbour you see today. Stops may include Confederation Centre of the Arts, St. Dunstan's Basilica exterior, and the boardwalk linking the cruise terminal to the historic core.",
      "Four-hour port calls suit a focused waterfront and Victoria Row walk. Six hours opens time for Confederation Centre exhibits or a harbour-side lunch before returning to the ship.",
    ],
    highlights: [
      "Province House National Historic Site area",
      "Victoria Row and Peake's Wharf",
      "Confederation history and harbour views",
      "Minimal transfer time from cruise berths",
    ],
    faqs: [
      {
        question: "Can I explore downtown Charlottetown without a tour?",
        answer:
          "Yes — many cruise berths place you within walking distance of the waterfront and Victoria Row. See our walking-from-port guide for a self-guided map-style route.",
      },
      {
        question: "How flat is the walking route?",
        answer:
          "The waterfront and Victoria Row are relatively flat. Side streets toward Province House involve gentle grades.",
      },
      {
        question: "Does this include Green Gables?",
        answer:
          "No — Green Gables requires a separate coach tour. Walking tours stay within Charlottetown.",
      },
    ],
    relatedSlugs: [
      "historic-confederation-tour",
      "lobster-experience-tour",
      "anne-of-green-gables-tour",
    ],
  },
  {
    slug: "historic-confederation-tour",
    path: "/historic-confederation-tour",
    title: "Historic Confederation Tour — Charlottetown, PEI",
    shortTitle: "Confederation Tour",
    summary:
      "Province House, Founders' Hall, and the 1864 conference story — Canada's birthplace explored through guided heritage stops in Charlottetown.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Heritage sites cluster within 1–2 km of the cruise terminal in downtown Charlottetown.",
    transferRequired: false,
    transferNote:
      "Most Confederation tours are walking or short coach loops downtown. Some add a drive to nearby heritage properties.",
    bestFor: [
      "Canadian history enthusiasts",
      "Passengers interested in Confederation origins",
      "Those combining culture with minimal travel time",
    ],
    returnConfidence: "High",
    returnNote:
      "Downtown heritage tours keep passengers close to the cruise terminal — excellent return-to-ship confidence even on shorter port calls.",
    weatherConsiderations:
      "Mix indoor museum time with outdoor heritage walks. Province House exterior and grounds remain worthwhile in light rain.",
    cruiseSnapshot:
      "Charlottetown hosted the 1864 conference that led to Canadian Confederation — a pivotal moment taught in every Canadian history classroom. A Confederation tour gives cruise passengers context that transforms a pretty waterfront into the birthplace of a nation.",
    snapshotFields: {
      timeInPort: "4–6 hours works well",
      bestFor: "History, Confederation, museums",
      activityLevel: "Easy — museum and street walking",
      familyFriendly: "Good for older children and teens",
      returnToShip: "Very high",
      popularTypes: "Walking heritage tours, museum combos",
    },
    description: [
      "Delegates from Nova Scotia, New Brunswick, and the Province of Canada arrived in Charlottetown in September 1864 for what was supposed to be a regional meeting — and left with the framework for a broader union. Province House, still an active legislative building, anchors the story guides tell on Confederation-themed tours.",
      "Confederation Centre of the Arts houses exhibits, the Anne of Green Gables musical in season, and programming that connects PEI culture to national history. Founders' Hall and waterfront interpretive panels extend the narrative along the harbour walk.",
      "This tour pairs naturally with a harbour lunch or independent shopping on Victoria Row. Passengers with eight hours ashore might add an afternoon coach run to Green Gables after a morning Confederation focus.",
    ],
    highlights: [
      "Province House and Confederation conference history",
      "Confederation Centre of the Arts",
      "Founders' Hall and waterfront interpretation",
      "Compact downtown routing from cruise port",
    ],
    faqs: [
      {
        question: "Is Province House open to visitors?",
        answer:
          "Access varies during restoration and legislative sessions. Tours typically include exterior interpretation and nearby exhibits when interior access is limited.",
      },
      {
        question: "How is this different from the general walking tour?",
        answer:
          "The Confederation tour emphasises 1864 history and heritage sites. General walking tours cover broader city highlights.",
      },
      {
        question: "Is this suitable for a four-hour port call?",
        answer:
          "Yes — Confederation tours are among the best options for shorter Charlottetown port days.",
      },
    ],
    relatedSlugs: [
      "charlottetown-walking-tour",
      "best-of-prince-edward-island-tour",
      "lobster-experience-tour",
    ],
  },
  {
    slug: "lobster-experience-tour",
    path: "/lobster-experience-tour",
    title: "PEI Lobster Experience Tour from Charlottetown",
    shortTitle: "Lobster Experience",
    summary:
      "Fresh Atlantic lobster, fishing harbour culture, and island dining — a taste-focused excursion for cruise passengers visiting PEI in season.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Lobster experiences typically involve 15–30 km drives to harbour restaurants or coastal villages.",
    transferRequired: true,
    transferNote:
      "Coach or van to a harbour-side venue. Some tours include a fishing harbour walk or trap demonstration before the meal.",
    bestFor: [
      "Food lovers and seafood enthusiasts",
      "Passengers visiting May through October",
      "Groups wanting a relaxed, taste-of-PEI experience",
    ],
    returnConfidence: "High",
    returnNote:
      "Meal-based tours use fixed venues with predictable timing — reliable return scheduling when booked through cruise-aware operators.",
    weatherConsiderations:
      "Outdoor lobster boils depend on fair weather; indoor harbour restaurants provide rainy-day backup at most venues.",
    cruiseSnapshot:
      "PEI lobster needs no introduction — sweet Atlantic shellfish served steps from the boats that caught it. A lobster experience tour turns a port day into a culinary memory without the driving commitment of a full island circuit.",
    snapshotFields: {
      timeInPort: "5–6 hours recommended",
      bestFor: "Seafood, culture, harbour scenes",
      activityLevel: "Easy — seated dining focus",
      familyFriendly: "Good — check menu options for children",
      returnToShip: "High on fixed-venue tours",
      popularTypes: "Lobster suppers, harbour dining tours",
    },
    description: [
      "Prince Edward Island lands more lobster than almost anywhere in Atlantic Canada, and cruise passengers taste the difference at harbour-side restaurants where traps are stacked on the wharf and menus change with the tide. Tours may include a short fishing-village walk, trap-setting demonstration, or mussel farm drive-by before the main event.",
      "Traditional lobster suppers — all-you-can-eat affairs in rural community halls — are an island institution but require longer drives and fixed seating times that do not always suit cruise schedules. Harbour-restaurant formats near Charlottetown are the practical choice for most port days.",
      "May through October delivers the freshest product. Confirm dietary alternatives when you enquire if your party includes non-seafood eaters.",
    ],
    highlights: [
      "Fresh PEI Atlantic lobster dining",
      "Fishing harbour culture and wharf scenes",
      "Seasonal mussels and local sides",
      "Relaxed pacing with strong return timing",
    ],
    faqs: [
      {
        question: "When is lobster season in PEI?",
        answer:
          "Lobster fisheries operate in spring and fall with fresh product available to restaurants throughout the cruise season, May through October.",
      },
      {
        question: "Are alternatives available for non-seafood eaters?",
        answer:
          "Most venues offer chicken, fish, or vegetarian options. Confirm when booking for your group.",
      },
      {
        question: "Does this tour visit Green Gables?",
        answer:
          "Typically no — this is a food-focused product. Pair it with a morning walking tour or book a separate Anne tour on a longer port day.",
      },
    ],
    relatedSlugs: [
      "charlottetown-walking-tour",
      "prince-edward-island-scenic-drive",
      "historic-confederation-tour",
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/charlottetown-cruise-port-guide",
  "/best-charlottetown-shore-excursions",
  "/things-to-do-in-charlottetown-from-a-cruise-ship",
  "/one-day-in-charlottetown-from-a-cruise-ship",
  "/anne-of-green-gables-guide",
  "/prince-edward-island-guide",
  "/cavendish-from-charlottetown",
  "/prince-edward-island-lighthouses",
  "/confederation-history-guide",
  "/walking-charlottetown-from-cruise-port",
  "/best-time-to-visit-charlottetown",
  "/charlottetown-cruise-ship-schedule",
  "/faq",
  "/cruise-planner",
  "/enquire",
  "/excursions",
];
