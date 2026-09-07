// prisma/seed.ts
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import "dotenv/config"

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Seeding database with long-form editorial posts...")

  // 1. Ensure author exists
  const author = await prisma.user.upsert({
    where: { email: "danish@test.com" },
    update: {},
    create: {
      id: "test_user123",
      email: "danish@test.com",
      name: "Danish Khan",
      avatarUrl: "/images/avatar.png",
      bio: "AIML Engineer & Founder at Reado.ai. Writing about multimodal AI, systems engineering, and creative technology.",
      countryTag: "🇮🇳 India",
    },
  })

  // 2. Clear old posts to prevent slug collisions
  await prisma.post.deleteMany({})

  // 3. Editorial Posts Dataset (13 items)
  const posts = [
    {
      title: "Best productivity hacks for creative freelancers today",
      slug: "best-productivity-hacks-for-creative-freelancers-today",
      excerpt: "Dive into actionable systems, deep-work protocols, and digital workspace hygiene tailored for modern creative professionals navigating context-switching.",
      content: `The modern knowledge worker battles an unprecedented volume of fragmented attention. For creative freelancers, the problem compounds: when creative flow collides directly with client communication, billing logistics, and iterative revisions, cognitive fatigue becomes inevitable.

The solution is not working longer hours, but enforcing deliberate constraints. Implementing asynchronous-first communication channels creates protected four-hour deep-work blocks each morning. By treating focused ideation as an immutable meeting on the calendar, creators protect the cognitive reserves essential for high-fidelity output.

Pairing time-blocking with environmental minimalism—such as single-task browser profiles, tactile note-taking, and scheduled email processing—transforms creative momentum from an unpredictable burst into a repeatable, sustainable system.`,
      banners: ["/images/featured-image.png"],
      category: "TECH",
      tags: ["Productivity", "Freelancing", "Workflow", "DeepWork"],
      readTime: 7,
      isFeatured: true,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 1420,
      authorId: author.id,
    },
    {
      title: "The Multimodal Architecture: Unifying Vision and Language",
      slug: "multimodal-architecture-unifying-vision-language",
      excerpt: "How cross-attention layers and joint contrastive embeddings are transforming autonomous editorial content synthesis.",
      content: `Modern publishing pipelines have outgrown single-modality pipelines. When text embeddings and visual latent representations remain siloed, editorial workflows require constant human arbitration to align tone, visual aesthetic, and narrative pacing.

By utilizing unified contrastive learning objectives—pairing vision encoders with transformer language heads—platforms can analyze prose cadence and predict corresponding typographic styles, visual palettes, and dynamic layout structures simultaneously.

This cross-attention mechanism does not replace editorial judgment. Instead, it eliminates generative dissonance by ensuring that synthesized banners, video excerpts, and typographic styling reflect the semantic density of the written piece.`,
      banners: ["https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"],
      category: "TECH",
      tags: ["AI", "Multimodal", "DeepLearning", "Transformers"],
      readTime: 6,
      isFeatured: false,
      isEditorsChoice: true,
      isWatchSection: false,
      views: 2150,
      authorId: author.id,
    },
    {
      title: "Decentralized Micro-Economies in the Creator Era",
      slug: "decentralized-micro-economies-in-the-creator-era",
      excerpt: "An empirical deep-dive into digital subscriptions, micro-transactions, and self-hosted creator distribution hubs.",
      content: `Platform lock-in has long remained the unspoken compromise of online journalism. Aggregators capture audience attention while publishers bear operational overhead and volatility from algorithmic distribution shifts.

The emergence of sovereign digital storefronts, open-protocol syndication, and direct subscriber relationships has restructured this dynamic. Creators who control their relational data layer convert transient page impressions into durable, predictable memberships.

Building on serverless database primitives and direct billing APIs enables lean media collectives to achieve operational independence without requiring monolithic enterprise distribution networks.`,
      banners: ["https://images.pexels.com/photos/6777570/pexels-photo-6777570.jpeg"],
      category: "FINANCE",
      tags: ["Finance", "SaaS", "CreatorEconomy", "Monetization"],
      readTime: 5,
      isFeatured: false,
      isEditorsChoice: true,
      isWatchSection: false,
      views: 980,
      authorId: author.id,
    },
    {
      title: "Inside the Edit Room: Video Essayists on Narrative Rhythm",
      slug: "inside-the-edit-room-video-essayists-on-narrative-rhythm",
      excerpt: "Watch top visual documentarians break down pacing, jump cuts, and auditory tension in long-form digital documentaries.",
      content: `A compelling visual essay operates on musical principles. The duration of an establishing shot, the frequency of audio cutaways, and the deliberate pause preceding an argumentative thesis dictate viewer retention far more than production budget alone.

Through micro-dissections of editing timelines, master documentarians explain how intentional friction—deliberately letting a frame breathe past comfort—primes the viewer for emotional resonance.

Balancing kinetic montage sequences with quiet, unadorned dialogue creates the narrative friction required to keep modern audiences engaged through complex philosophical arguments.`,
      banners: ["https://images.pexels.com/photos/11063289/pexels-photo-11063289.jpeg"],
      category: "LIFESTYLE",
      tags: ["VideoEssay", "Storytelling", "Editing", "VisualCulture"],
      readTime: 8,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: true,
      views: 3400,
      authorId: author.id,
    },
    {
      title: "Cognitive Load Theory and Digital Minimalism",
      slug: "cognitive-load-theory-and-digital-minimalism",
      excerpt: "Exploring the neurological consequences of infinite scroll mechanisms and how curated publications foster deliberate retention.",
      content: `Human working memory is biologically constrained. When interactive applications overload cognitive channels with persistent alerts, modal prompts, and dynamic re-renders, the brain switches into triage mode, sacrificing deep comprehension for immediate survival scanning.

Digital editorial spaces designed with deliberate typographic hierarchy, static reading flows, and generous whitespace honor cognitive limits. The result is deeper engagement, elevated critical reflection, and measurable information retention.

Architectural restraint is not simply an aesthetic preference; it is an ergonomic necessity for sustainable reading comprehension in an attention-starved world.`,
      banners: ["https://images.pexels.com/photos/27544693/pexels-photo-27544693.jpeg"],
      category: "HEALTH",
      tags: ["Mindfulness", "Neuroscience", "UX", "Reading"],
      readTime: 6,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 890,
      authorId: author.id,
    },
    {
      title: "The Return of Independent Web Standards",
      slug: "the-return-of-independent-web-standards",
      excerpt: "Why modern web architects are returning to semantic HTML, server components, and unbundled protocols.",
      content: `Over the past decade, web engineering became saturated with multi-layered client-side runtimes, heavy JavaScript bundles, and brittle state hydration chains. In reaction, the software ecosystem is staging a deliberate return to lean fundamentals.

With Server Components, streaming SSR, and edge computing runtimes, platforms deliver instant interactivity alongside the resilience of classic static documents. Semantic markup, lightweight native styling, and decoupled database drivers represent the mature future of resilient web engineering.`,
      banners: ["https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg"],
      category: "TECH",
      tags: ["WebDev", "Architecture", "JavaScript", "TypeScript"],
      readTime: 5,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 1120,
      authorId: author.id,
    },
    {
      title: "Global Supply Chains Under Macroeconomic Turbulence",
      slug: "global-supply-chains-macroeconomic-turbulence",
      excerpt: "Analyzing shifts from just-in-time delivery networks to regional manufacturing buffers across key technological hubs.",
      content: `Decades of optimization around hyper-efficient, just-in-time logistics chains exposed systemic vulnerabilities during recent global shocks. As cross-border freight volatility and geopolitical realignments intensify, global corporations are abandoning singular dependencies in favor of regionalized redundancy.

This structural reorientation requires substantial initial capital outlays, but yields unmatched resilience against localized disruptions. As supply lines contract and regional hubs expand, modern manufacturing enters a decentralized, distributed epoch.`,
      banners: ["https://images.pexels.com/photos/27676687/pexels-photo-27676687.jpeg"],
      category: "BUSINESS",
      tags: ["Macroeconomics", "Logistics", "GlobalTrade", "Business"],
      readTime: 9,
      isFeatured: false,
      isEditorsChoice: true,
      isWatchSection: false,
      views: 1750,
      authorId: author.id,
    },
    {
      title: "Culinary Heritage and Modern Fermentation Science",
      slug: "culinary-heritage-modern-fermentation-science",
      excerpt: "How traditional preservation techniques and microbial gastronomy are redefining sustainable culinary practices.",
      content: `Fermentation is ancestral biotechnology. Long before modern refrigeration and industrial chemical stabilizers, communities relied on lactic acid bacteria, koji molds, and wild yeasts to unlock bioavailable nutrients and extend seasonal yields.

Contemporary culinary laboratories are synthesizing these historic practices with microbiological sequencing. By calibrating salinity gradients, temperature curves, and moisture parameters with laboratory precision, chefs extract novel umami profiles while championing zero-waste kitchens.`,
      banners: ["https://images.pexels.com/photos/7243886/pexels-photo-7243886.jpeg"],
      category: "FOOD",
      tags: ["Gastronomy", "Fermentation", "CulinaryScience", "Heritage"],
      readTime: 4,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: true,
      views: 640,
      authorId: author.id,
    },
    {
      title: "Solitude as a Creative Catalyst in Dense Metropolises",
      slug: "solitude-creative-catalyst-dense-metropolises",
      excerpt: "Carving out physical and mental silence in bustling city centers to fuel breakthrough creative endeavors.",
      content: `The modern metropolis is an engine of relentless sensory immersion. Streetscapes hum with traffic, transit corridors reverberate with movement, and digital screens command every public horizon.

Yet throughout history, some of the most enduring creative voices flourished not by escaping urban centers, but by discovering solitary rhythms within them. Cultivating internal stillness amidst urban dynamism transforms chaotic stimulation into disciplined, visionary output.`,
      banners: ["https://images.pexels.com/photos/29719913/pexels-photo-29719913.jpeg"],
      category: "LIFESTYLE",
      tags: ["UrbanLife", "Solitude", "Creativity", "Writing"],
      readTime: 5,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 1290,
      authorId: author.id,
    },
    {
      title: "The Architecture of Algorithmic Venture Capital",
      slug: "architecture-of-algorithmic-venture-capital",
      excerpt: "How quantitative models, code repository signals, and network graphs are reshaping early-stage seed investing.",
      content: `Venture capital long prided itself on intuition, interpersonal pedigree, and club dynamics. However, data-informed syndicates are steadily altering this status quo.

By ingesting public developer activity, open-source velocity metrics, and early team composition graph data, quantitative seed funds identify hyper-growth technology vectors before traditional pitch decks circulate. Human discernment remains vital for final allocation, but quantitative filters increasingly define the top of the funnel.`,
      banners: ["https://images.pexels.com/photos/25626449/pexels-photo-25626449.jpeg"],
      category: "FINANCE",
      tags: ["VentureCapital", "DataScience", "Startups", "Finance"],
      readTime: 7,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 1890,
      authorId: author.id,
    },
    {
      title: "Nomadic Architecture: Off-Grid Micro-Dwellings",
      slug: "nomadic-architecture-off-grid-micro-dwellings",
      excerpt: "A documentary review of minimalist kinetic structures, solar arrays, and high-efficiency regional residences.",
      content: `The intersection of remote technical employment and modern environmental consciousness has sparked a design renaissance in kinetic architecture. Micro-homes constructed from cross-laminated timber, passive heat exchangers, and integrated solar canopies decouple modern lifestyle needs from static municipal grids.

These self-contained structures demonstrate that downscaling physical footprints does not require compromising architectural elegance or technological capability.`,
      banners: ["https://images.pexels.com/photos/18040158/pexels-photo-18040158.jpeg"],
      category: "LIFESTYLE",
      tags: ["Architecture", "OffGrid", "Minimalism", "Design"],
      readTime: 6,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: true,
      views: 2430,
      authorId: author.id,
    },
    {
      title: "Foundational LLM Fine-Tuning on Custom Corpora",
      slug: "foundational-llm-fine-tuning-custom-corpora",
      excerpt: "A technical overview of parameter-efficient fine-tuning (PEFT), LoRA adapters, and quantization strategies for domain-specific publishing platforms.",
      content: `Deploying foundational open-weight models directly into specialized vertical domains frequently yields generic phrasing and factual drift. Fine-tuning models using Low-Rank Adaptation (LoRA) and 4-bit quantization allows resource-conscious engineering teams to instill deep domain vocabulary without exorbitant compute costs.

By constraining trainable parameters to low-rank decomposition matrices while freezing the base model weights, teams train lightweight, task-specific adapters on consumer GPUs, serving low-latency inference directly to production editorial interfaces.`,
      banners: ["https://images.pexels.com/photos/33199981/pexels-photo-33199981.jpeg"],
      category: "TECH",
      tags: ["MachineLearning", "LoRA", "LLMs", "NLP"],
      readTime: 8,
      isFeatured: false,
      isEditorsChoice: true,
      isWatchSection: false,
      views: 3100,
      authorId: author.id,
    },
    {
      title: "Circadian Rhythms and Cognitive Longevity",
      slug: "circadian-rhythms-cognitive-longevity",
      excerpt: "How timing light exposure, thermal regulation, and nutritional cycles reinforces neurovascular resilience over time.",
      content: `The suprachiasmatic nucleus orchestrates nearly every cellular repair process in the human organism. Misaligning daily activity with solar light cues impairs endocrine signaling and disrupts restorative slow-wave sleep phases critical for glymphatic clearance of neural waste.

Aligning early morning photic exposure with scheduled physical exertion and deliberate evening dimming stabilizes core metabolic markers, providing a foundational physiological scaffold for sustained creative focus and longevity.`,
      banners: ["https://images.pexels.com/photos/6237500/pexels-photo-6237500.jpeg"],
      category: "HEALTH",
      tags: ["Health", "Neurobiology", "Sleep", "Wellness"],
      readTime: 7,
      isFeatured: false,
      isEditorsChoice: false,
      isWatchSection: false,
      views: 1540,
      authorId: author.id,
    },
  ]

  for (const post of posts) {
    await prisma.post.create({ data: post })
  }

  console.log(`Successfully seeded ${posts.length} editorial posts!`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })