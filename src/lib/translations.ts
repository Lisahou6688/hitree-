import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useContext } from 'react'
import { LanguageContext } from '@/contexts/LanguageContext'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 定义支持的语言类型
export type Language = 'zh' | 'en' | 'de';

// 翻译内容接口
interface TranslationData {
  [key: string]: {
    zh: string;
    en: string;
    de: string;
  }
}

// 翻译数据
export const translations: TranslationData = {
  // 品牌信息
  brandName: {
    zh: "HITREE",
    en: "HITREE",
    de: "HITREE"
  },
  brandTagline: {
    zh: "以循证营养为核心的高端功能营养品牌",
    en: "Premium Evidence-Based Functional Nutrition Brand",
    de: "Premium evidenzbasierte funktionelle Nährstoffmarke"
  },
  brandSlogan: {
    zh: "让身体回到本该有的健康状态",
    en: "Bring Your Body Back to Its Natural Healthy State",
    de: "Bring deinen Körper in seinen natürlichen gesunden Zustand zurück"
  },
  
  // 导航
  navHome: {
    zh: "首页",
    en: "Home",
    de: "Startseite"
  },
  navBrand: {
    zh: "品牌",
    en: "Brand",
    de: "Marke"
  },
  navScience: {
    zh: "科学",
    en: "Science",
    de: "Wissenschaft"
  },
  navProducts: {
    zh: "产品",
    en: "Products",
    de: "Produkte"
  },
  navTrust: {
    zh: "信任",
    en: "Trust",
    de: "Vertrauen"
  },
  navContact: {
    zh: "联系",
    en: "Contact",
    de: "Kontakt"
  },
  
  // 首页内容
  heroTitle: {
    zh: "以循证营养为核心的高端功能营养品牌",
    en: "Premium Evidence-Based Functional Nutrition Brand",
    de: "Premium evidenzbasierte funktionelle Nährstoffmarke"
  },
  heroSubtitle: {
    zh: "让身体回到本该有的健康状态",
    en: "Bring Your Body Back to Its Natural Healthy State",
    de: "Bring deinen Körper in seinen natürlichen gesunden Zustand zurück"
  },
  learnMore: {
    zh: "了解更多",
    en: "Learn More",
    de: "Erfahren Sie mehr"
  },
  exploreProducts: {
    zh: "探索产品",
    en: "Explore Products",
    de: "Produkte erkunden"
  },
  coreValues: {
    zh: "我们的核心价值",
    en: "Our Core Values",
    de: "Unsere Kernwerte"
  },
  valueEvidence: {
    zh: "循证营养",
    en: "Evidence-Based Nutrition",
    de: "Evidenzbasierte Ernährung"
  },
  valueEvidenceDesc: {
    zh: "坚持以循证医学与营养科学为基础，只选择有研究背景、有数据支持的功能成分。",
    en: "Adhering to evidence-based medicine and nutritional science, we only select functional ingredients with research background and data support.",
    de: "Basierend auf evidenzbasierter Medizin und Ernährungswissenschaft wählen wir nur funktionelle Inhaltsstoffe mit Forschungsgrundlage und Datendokumentation aus."
  },
  valuePrecision: {
    zh: "精准配方",
    en: "Precision Formula",
    de: "Präzise Formulierung"
  },
  valuePrecisionDesc: {
    zh: "不追求成分数量的堆叠，每一种成分都有明确的功能定位，每一个剂量都基于有效性与安全性的平衡。",
    en: "We don't pursue stacking of ingredients. Each ingredient has a clear functional positioning, and each dosage is based on the balance of effectiveness and safety.",
    de: "Wir streben keine Anhäufung von Inhaltsstoffen an. Jeder Inhaltsstoff hat eine klare funktionelle Positionierung, und jede Dosierung basiert auf dem Gleichgewicht von Wirksamkeit und Sicherheit."
  },
  valueLongTerm: {
    zh: "长期有效",
    en: "Long-Term Effectiveness",
    de: "Langfristige Wirksamkeit"
  },
  valueLongTermDesc: {
    zh: "Hitree 关注的不是短期刺激，而是身体状态的持续改善。产品设计以长期使用的合理性为前提，强调体验的稳定性、节奏的适配性，以及在不同使用周期中所呈现的整体感受是否依然值得信任。我们设计产品时，始终以\"长期使用是否合理\"为核心前提。",
    en: "Hitree focuses not on short-term stimulation, but on the continuous improvement of physical condition. Product design is based on the premise of long-term rational use, emphasizing the stability of experience, adaptability of rhythm, and whether the overall feeling presented in different usage cycles is still trustworthy. When designing products, we always take \"whether long-term use is reasonable\" as the core premise.",
    de: "Hitree konzentriert sich nicht auf kurzfristige Stimulation, sondern auf die kontinuierliche Verbesserung des körperlichen Zustands. Die Produktgestaltung basiert auf der Prämisse einer langfristigen rationalen Nutzung, betont die Stabilität der Erfahrung, die Anpassungsfähigkeit des Rhythmus und ob das in verschiedenen Nutzungszyklen dargestellte Gesamterlebnis immer noch vertrauenswürdig ist. Bei der Entwicklung von Produkten legen wir immer \"ob langfristige Nutzung vernünftig ist\" als Kernprämisse zugrunde."
  },
  valueTransparency: {
    zh: "透明可信",
    en: "Transparency & Trust",
    de: "Transparenz und Vertrauen"
  },
  valueTransparencyDesc: {
    zh: "真正的信任来自透明，而非承诺。成分来源清晰，剂量标注明确，功效边界清楚。",
    en: "True trust comes from transparency, not promises. Clear ingredient sources, precise dosage labeling, and well-defined efficacy boundaries.",
    de: "Wahres Vertrauen entsteht aus Transparenz, nicht aus Versprechen. Klare Herkunft von Inhaltsstoffen, genaue Dosierungsbezeichnung und wohldefinierte Wirksamkeitsgrenzen."
  },
  
  // 产品体系
  productSystem: {
    zh: "我们的产品体系",
    en: "Our Product System",
    de: "Unser Produktsystem"
  },
  productSystemDesc: {
    zh: "Hitree 相信，真正有价值的营养，应当具备长期逻辑，而非片段式存在。我们以生命阶段为线索，构建彼此关联、逻辑清晰的产品体系，让营养成为一种有秩序的选择。",
    en: "Hitree believes that truly valuable nutrition should have long-term logic, not fragmented existence. We use life stages as clues to build an interconnected, logically clear product system, making nutrition an orderly choice.",
    de: "Hitree glaubt, dass wirklich wertvolle Ernährung langfristige Logik haben sollte, keine fragmentierte Existenz. Wir nutzen Lebensphasen als Hinweise, um ein miteinander verbundenes, logisch klares Produktsystem aufzubauen und Ernährung zu einer geordneten Wahl zu machen."
  },
  productChildren: {
    zh: "儿童成长与认知支持",
    en: "Children's Growth and Cognitive Support",
    de: "Kinderwachstum und kognitive Unterstützung"
  },
  productChildrenDesc: {
    zh: "围绕成长阶段的基础营养需求，强调产品在使用过程中的稳定性、适配性与长期合理性。该方向聚焦于儿童与青少年阶段的日常营养补充场景，注重配方设计的克制与体验友好，帮助家庭建立更有秩序的营养选择方式。",
    en: "Focusing on basic nutritional needs during growth stages, emphasizing stability, adaptability, and long-term rationality during product use. This direction focuses on daily nutritional supplement scenarios for children and adolescents, emphasizing restraint in formula design and user-friendly experience to help families establish a more orderly way of nutritional selection.",
    de: "Konzentration auf grundlegende Ernährungsbedürfnisse in Wachstumsphasen, Betonung von Stabilität, Anpassungsfähigkeit und langfristiger Rationalität bei der Produktnutzung. Diese Richtung konzentriert sich auf tägliche Nahrungsergänzungsszenarien für Kinder und Jugendliche, betont Zurückhaltung in der Formulierungsgestaltung und benutzerfreundliche Erfahrung, um Familien zu helfen, eine geordnetere Art der Ernährungsauswahl zu etablieren."
  },
  productAdult: {
    zh: "成人代谢与能量管理",
    en: "Adult Metabolism and Energy Management",
    de: "Erwachsenenmetabolismus und Energiemanagement"
  },
  productAdultDesc: {
    zh: "基于现代生活方式下的使用场景，关注成年人在高节奏环境中的日常状态平衡需求。该方向的产品强调结构清晰、使用逻辑明确，适用于长期纳入日常营养管理体系，而非零散、临时性的补充。",
    en: "Based on usage scenarios in modern lifestyles, focusing on the daily state balance needs of adults in high-paced environments. Products in this direction emphasize clear structure and usage logic, suitable for long-term integration into daily nutrition management systems, rather than scattered, temporary supplements.",
    de: "Basierend auf Nutzungsszenarien im modernen Lebensstil, konzentriert sich auf die täglichen Zustandsgleichgewichtsbedürfnisse von Erwachsenen in schnelllebigen Umgebungen. Produkte in dieser Richtung betonen klare Struktur und Nutzungslogik, geeignet für die langfristige Integration in tägliche Ernährungsmanagementsysteme, anstatt für verstreute, temporäre Ergänzungen."
  },
  productAntiaging: {
    zh: "细胞抗衰与修复支持",
    en: "Cellular Anti-aging and Repair Support",
    de: "Zelluläre Anti-Aging und Reparaturunterstützung"
  },
  productAntiagingDesc: {
    zh: "从更长期的使用视角出发，关注产品在持续使用过程中的合理性与稳定性。该方向为品牌的长期发展预留空间，用以承载更具系统性的营养设计理念，满足不同阶段用户对长期管理的需求。",
    en: "From a longer-term usage perspective, focusing on the rationality and stability of products during continuous use. This direction reserves space for the brand's long-term development to carry more systematic nutrition design concepts and meet the long-term management needs of users at different stages.",
    de: "Aus langfristiger Nutzungsperspektive, konzentriert sich auf die Rationalität und Stabilität von Produkten bei kontinuierlicher Nutzung. Diese Richtung reserviert Raum für die langfristige Entwicklung der Marke, um systematischere Ernährungsdesignkonzepte zu tragen und die langfristigen Managementbedürfnisse von Benutzern in verschiedenen Phasen zu erfüllen."
  },
  
  // 科学循证
  ourScience: {
    zh: "我们的科学循证",
    en: "Our Scientific Evidence",
    de: "Unsere wissenschaftliche Evidenz"
  },
  scienceDesc: {
    zh: "Hitree 坚持以循证医学与营养科学为基础进行产品研发，只选择有研究背景、有数据支持的功能成分。",
    en: "Hitree insists on developing products based on evidence-based medicine and nutritional science, only selecting functional ingredients with research background and data support.",
    de: "Hitree entwickelt Produkte auf der Grundlage evidenzbasierter Medizin und Ernährungswissenschaft und wählt nur funktionelle Inhaltsstoffe mit Forschungsgrundlage und Datendokumentation aus."
  },
  scienceDesc2: {
    zh: "我们不售卖模糊概念，也不依赖营销话术制造信任。科学本身，就是最重要的背书。",
    en: "We don't sell vague concepts, nor do we rely on marketing jargon to build trust. Science itself is the most important endorsement.",
    de: "Wir verkaufen keine vagen Konzepte und verlassen uns nicht auf Marketingjargon, um Vertrauen aufzubauen. Die Wissenschaft selbst ist die wichtigste Bestätigung."
  },
  researchImpact: {
    zh: "我们的研究影响力",
    en: "Our Research Impact",
    de: "Unsere Forschungsauswirkung"
  },
  publications: {
    zh: "学术发表",
    en: "Publications",
    de: "Publikationen"
  },
  clinicalTrials: {
    zh: "临床试验",
    en: "Clinical Trials",
    de: "Klinische Studien"
  },
  learnMoreResearch: {
    zh: "了解更多研究",
    en: "Learn More About Research",
    de: "Erfahren Sie mehr über die Forschung"
  },
  
  // 品牌页面
  brandStory: {
    zh: "品牌故事",
    en: "Brand Story",
    de: "Markengeschichte"
  },
  brandStoryDesc: {
    zh: "在信息高度透明、营养知识被广泛传播的今天，消费者并不缺乏'营养品选择'，真正稀缺的是——可信、有效、长期可坚持的健康解决方案。",
    en: "In today's era of highly transparent information and widely disseminated nutritional knowledge, consumers are not lacking in 'nutritional supplement choices'. What is truly scarce is trustworthy, effective, and long-term sustainable health solutions.",
    de: "In der heutigen Ära der hochtransparenten Informationen und weit verbreiteten Ernährungswissen mangelt es Verbrauchern nicht an 'Nahrungsergänzungsmittelauswahlen'. Was wirklich knapp ist, sind vertrauenswürdige, wirksame und langfristig nachhaltige Gesundheitslösungen."
  },
  brandMission: {
    zh: "品牌使命",
    en: "Brand Mission",
    de: "Markenmission"
  },
  brandMissionDesc: {
    zh: "让营养回归本质，让健康真正发生。",
    en: "Let nutrition return to its essence, let health truly happen.",
    de: "Lassen Sie die Ernährung zu ihrem Wesen zurückkehren, lassen Sie die Gesundheit wirklich geschehen."
  },
  brandMissionDesc2: {
    zh: "Hitree 致力于以科学为基础，以循证营养为方法，帮助不同生命阶段的人群，补充真正被身体需要、且能够持续发挥作用的关键营养。",
    en: "Hitree is committed to using science as the foundation and evidence-based nutrition as the method to help people at different life stages supplement the key nutrients that are truly needed by the body and can continue to function.",
    de: "Hitree ist bestrebt, Wissenschaft als Grundlage und evidenzbasierte Ernährung als Methode zu nutzen, um Menschen in verschiedenen Lebensphasen zu helfen, die Schlüssel-nährstoffe zu ergänzen, die der Körper wirklich braucht und die kontinuierlich wirken können."
  },
  brandVision: {
    zh: "品牌愿景",
    en: "Brand Vision",
    de: "Markensicht"
  },
  brandVisionDesc: {
    zh: "成为一个让用户在长期使用后，不再频繁更换品牌的功能营养品牌。",
    en: "To become a functional nutrition brand that users no longer frequently switch from after long-term use.",
    de: "Eine funktionelle Nährstoffmarke zu werden, von der Benutzer nach langfristiger Nutzung nicht mehr häufig wechseln."
  },
  brandVisionDesc2: {
    zh: "Hitree 希望陪伴用户从儿童成长、认知发展，到成人代谢管理、细胞抗衰，在不同阶段，用同一套可信逻辑，解决不同的健康问题。",
    en: "Hitree hopes to accompany users from childhood growth and cognitive development to adult metabolic management and cellular anti-aging, solving different health problems at different stages with the same set of credible logic.",
    de: "Hitree hofft, Benutzern von der kindlichen Entwicklung und kognitiven Entwicklung bis hin zum metabolischen Management von Erwachsenen und zellulärer Anti-Aging zu begleiten und verschiedene Gesundheitsprobleme in verschiedenen Phasen mit demselben Satz an vertrauenswürdiger Logik zu lösen."
  },
  brandPhilosophy: {
    zh: "品牌理念",
    en: "Brand Philosophy",
    de: "Markenphilosophie"
  },
  brandPhilosophyDesc: {
    zh: "Hitree 并不追求'补得更多'，而是坚持'补得更准'。我们相信，真正有效的营养，必须同时满足三点：有明确的科学依据、有清晰的作用机制路径、有可被感知的长期价值。",
    en: "Hitree does not pursue 'supplementing more', but insists on 'supplementing more accurately'. We believe that truly effective nutrition must simultaneously meet three points: clear scientific basis, clear mechanism of action path, and perceivable long-term value.",
    de: "Hitree strebt nicht danach, 'mehr zu ergänzen', sondern besteht darauf, 'genauer zu ergänzen'. Wir glauben, dass eine wirklich wirksame Ernährung gleichzeitig drei Punkte erfüllen muss: klare wissenschaftliche Grundlage, klare Wirkmechanismus-Pfade und wahrnehmbare langfristige Werte."
  },
  brandPersonality: {
    zh: "品牌气质",
    en: "Brand Personality",
    de: "Markenpersönlichkeit"
  },
  brandCharacter: {
    zh: "品牌性格",
    en: "Brand Character",
    de: "Markencharakter"
  },
  brandCharacter1: {
    zh: "理性但不冷漠",
    en: "Rational but not indifferent",
    de: "Vernünftig, aber nicht gleichgültig"
  },
  brandCharacter2: {
    zh: "专业但不说教",
    en: "Professional but not preachy",
    de: "Professionell, aber nicht predigend"
  },
  brandCharacter3: {
    zh: "克制、清晰、可信",
    en: "Restrained, clear, credible",
    de: "Zurückhaltend, klar, vertrauenswürdig"
  },
  brandExpression: {
    zh: "表达原则",
    en: "Expression Principles",
    de: "Ausdrucksprinzipien"
  },
  brandExpression1: {
    zh: "不夸大功效",
    en: "Don't exaggerate efficacy",
    de: "Keine Übertreibung der Wirksamkeit"
  },
  brandExpression2: {
    zh: "不制造焦虑",
    en: "Don't create anxiety",
    de: "Keine Angst schüren"
  },
  brandExpression3: {
    zh: "不使用模糊、无法验证的承诺",
    en: "Don't use vague, unprovable promises",
    de: "Keine vagen, nicht überprüfbaren Versprechen"
  },
  brandExpression4: {
    zh: "清楚地说明'适合谁、不适合谁'",
    en: "Clearly explain 'who it's for, who it's not for'",
    de: "Klar erklären, 'für wen es ist, für wen es nicht ist'"
  },
  targetAudience: {
    zh: "目标人群",
    en: "Target Audience",
    de: "Zielgruppe"
  },
  targetAudienceDesc: {
    zh: "Hitree 的核心用户，是理性且高要求的健康管理人群：",
    en: "Hitree's core users are rational and demanding health management population:",
    de: "Hitrees Kernnutzer sind rationale und anspruchsvolle Gesundheitsmanagement-Personen:"
  },
  targetAudience1: {
    zh: "有基础认知",
    en: "Basic knowledge",
    de: "Grundlegende Kenntnisse"
  },
  targetAudience1Desc: {
    zh: "对成分、剂量、来源有基础认知，不盲目跟从。",
    en: "Have basic knowledge of ingredients, dosages, and sources, not blindly following.",
    de: "Haben Grundkenntnisse über Inhaltsstoffe, Dosierungen und Herkunft, folgen nicht blind."
  },
  targetAudience2: {
    zh: "重视科学",
    en: "Value science",
    de: "Wertschätzen der Wissenschaft"
  },
  targetAudience2Desc: {
    zh: "不盲从网红推荐，更重视真实效果和科学依据。",
    en: "Not following influencer recommendations blindly, more valuing real effects and scientific basis.",
    de: "Folgen nicht blind Influencer-Empfehlungen, legen mehr Wert auf tatsächliche Wirksamkeit und wissenschaftliche Grundlage."
  },
  targetAudience3: {
    zh: "愿意付费",
    en: "Willing to pay",
    de: "Bereit zu zahlen"
  },
  targetAudience3Desc: {
    zh: "愿意为科学、品质与确定性付费。",
    en: "Willing to pay for science, quality and certainty.",
    de: "Bereit, für Wissenschaft, Qualität und Gewissheit zu zahlen."
  },
  targetAudience4: {
    zh: "健康决策者",
    en: "Health decision-makers",
    de: "Gesundheitsentscheider"
  },
  targetAudience4Desc: {
    zh: "通常是家庭健康决策者或自我管理意识较强的人群。",
    en: "Usually family health decision-makers or people with strong self-management awareness.",
    de: "Normalerweise Familien-Gesundheitsentscheider oder Menschen mit starker Selbstmanagement-Bewusstsein."
  },
  ctaRealHealth: {
    zh: "为真实健康，而非短期刺激",
    en: "For real health, not short-term stimulation",
    de: "Für echte Gesundheit, nicht für kurzfristige Stimulation"
  },
  ctaRealHealthDesc: {
    zh: "Hitree 是一个慢而确定的品牌。我们不追逐短期热点，不依赖情绪营销，而是选择一条更难、但更值得走的路——用科学，建立长期信任；用效果，赢得持续选择。",
    en: "Hitree is a slow but certain brand. We don't chase short-term hotspots, don't rely on emotional marketing, but choose a more difficult but more worthwhile path - using science to build long-term trust; using effects to win continuous choice.",
    de: "Hitree ist eine langsame, aber sichere Marke. Wir jagen keinen kurzfristigen Trends nach, verlassen uns nicht auf emotionales Marketing, sondern wählen einen schwierigeren, aber lohnenderen Weg - die Verwendung von Wissenschaft, um langfristiges Vertrauen aufzubauen; die Verwendung von Effekten, um kontinuierliche Wahl zu gewinnen."
  },
  
  // 联系页面
  contactUs: {
    zh: "联系我们",
    en: "Contact Us",
    de: "Kontaktieren Sie uns"
  },
  contactInfo: {
    zh: "联系信息",
    en: "Contact Information",
    de: "Kontaktinformationen"
  },
  contactDesc: {
    zh: "我们随时为您提供帮助，解答您关于产品或健康的问题。",
    en: "We are always here to help you and answer your questions about products or health.",
    de: "Wir stehen Ihnen jederzeit zur Verfügung, um Ihnen bei Fragen zu Produkten oder Gesundheit zu helfen."
  },
  yourName: {
    zh: "姓名",
    en: "Name",
    de: "Name"
  },
  yourEmail: {
    zh: "邮箱",
    en: "Email",
    de: "E-Mail"
  },
  subject: {
    zh: "主题",
    en: "Subject",
    de: "Betreff"
  },
  message: {
    zh: "留言内容",
    en: "Message",
    de: "Nachricht"
  },
  sendMessage: {
    zh: "发送信息",
    en: "Send Message",
    de: "Nachricht senden"
  },
  email: {
    zh: "邮箱",
    en: "Email",
    de: "E-Mail"
  },
  phone: {
    zh: "电话",
    en: "Phone",
    de: "Telefon"
  },
  address: {
    zh: "地址",
    en: "Address",
    de: "Adresse"
  },
  businessHours: {
    zh: "工作时间",
    en: "Business Hours",
    de: "Geschäftszeiten"
  },
  followUs: {
    zh: "关注我们",
    en: "Follow Us",
    de: "Folgen Sie uns"
  },
  officeLocation: {
    zh: "办公地点",
    en: "Office Location",
    de: "Bürostandort"
  },
  connectWithUs: {
    zh: "让我们连接",
    en: "Let's Connect",
    de: "Lassen Sie uns verbinden"
  },
  connectWithUsDesc: {
    zh: "对我们的产品或研究有疑问？我们随时为您提供帮助。",
    en: "Have questions about our products or research? We're here to help anytime.",
    de: "Haben Sie Fragen zu unseren Produkten oder Forschungen? Wir stehen Ihnen jederzeit zur Verfügung."
  },
  
  // 产品页面
  allProducts: {
    zh: "所有产品",
    en: "All Products",
    de: "Alle Produkte"
  },
  productRationale: {
    zh: "产品研发理念",
    en: "Product Development Philosophy",
    de: "Produktentwicklungsphilosophie"
  },
  productRationaleDesc: {
    zh: "所有 Hitree 产品，始终遵循同一核心原则：以系统化、可持续的产品设计，替代碎片化、无序的营养补充方式。",
    en: "All Hitree products always follow the same core principle: using systematic, sustainable product design to replace fragmented, disorderly nutritional supplementation methods.",
    de: "Alle Hitree-Produkte folgen stets demselben Kernprinzip: Die Verwendung systematischer, nachhaltiger Produktdesigns, um fragmentierte, ungeordnete Nahrungsergänzungsmethoden zu ersetzen."
  },
  supplementAccurately: {
    zh: "补得更准，而不是更多",
    en: "Supplement Accurately, Not More",
    de: "Genauer ergänzen, nicht mehr"
  },
  supplementAccuratelyDesc: {
    zh: "了解哪款产品适合您的特定健康需求，开启精准营养之旅。",
    en: "Find out which product is suitable for your specific health needs and start your precise nutrition journey.",
    de: "Erfahren Sie, welches Produkt für Ihre spezifischen Gesundheitsbedürfnisse geeignet ist, und starten Sie Ihre präzise Ernährungsreise."
  },
  contactAdvisor: {
    zh: "联系营养顾问",
    en: "Contact Nutrition Advisor",
    de: "Kontaktieren Sie einen Ernährungsberater"
  },
  
  // 科学页面
  scienceBehindProducts: {
    zh: "产品背后的科学",
    en: "The Science Behind Our Products",
    de: "Die Wissenschaft hinter unseren Produkten"
  },
  scienceDescPage: {
    zh: "我们坚持以循证医学与营养科学为基础进行产品研发，科学本身，就是最重要的背书。",
    en: "We insist on developing products based on evidence-based medicine and nutritional science. Science itself is the most important endorsement.",
    de: "Wir entwickeln Produkte auf der Grundlage evidenzbasierter Medizin und Ernährungswissenschaft. Die Wissenschaft selbst ist die wichtigste Bestätigung."
  },
  ourResearchApproach: {
    zh: "我们的研究方法",
    en: "Our Research Approach",
    de: "Unser Forschungsansatz"
  },
  ourResearchApproachDesc: {
    zh: "我们遵循严格的流程，确保我们的产品有最高质量的科学证据支持。",
    en: "We follow strict processes to ensure our products have the highest quality scientific evidence support.",
    de: "Wir folgen strengen Prozessen, um sicherzustellen, dass unsere Produkte die höchste Qualität an wissenschaftlicher Evidenzunterstützung haben."
  },
  literatureResearch: {
    zh: "文献研究",
    en: "Literature Research",
    de: "Literaturforschung"
  },
  literatureResearchDesc: {
    zh: "我们对现有科学文献进行全面回顾，确定有前景的成分和配方。",
    en: "We conduct comprehensive reviews of existing scientific literature to identify promising ingredients and formulations.",
    de: "Wir führen umfassende Überprüfungen existierender wissenschaftlicher Literatur durch, um vielversprechende Inhaltsstoffe und Formulierungen zu identifizieren."
  },
  formulaDevelopment: {
    zh: "配方开发",
    en: "Formula Development",
    de: "Formulierungsentwicklung"
  },
  formulaDevelopmentDesc: {
    zh: "我们的科学家团队基于最佳剂量和成分组合开发精确的配方。",
    en: "Our team of scientists develops precise formulas based on optimal dosages and ingredient combinations.",
    de: "Unser Wissenschaftlerteam entwickelt präzise Formulierungen basierend auf optimalen Dosierungen und Inhaltsstoffkombinationen."
  },
  clinicalTrials2: {
    zh: "临床试验",
    en: "Clinical Trials",
    de: "Klinische Studien"
  },
  clinicalTrials2Desc: {
    zh: "我们进行或赞助临床试验，验证我们配方的有效性和安全性。",
    en: "We conduct or sponsor clinical trials to verify the effectiveness and safety of our formulas.",
    de: "Wir führen klinische Studien durch oder sponsern sie, um die Wirksamkeit und Sicherheit unserer Formulierungen zu überprüfen."
  },
  researchGrowth: {
    zh: "研究增长",
    en: "Research Growth",
    de: "Forschungswachstum"
  },
  clinicalEfficacy: {
    zh: "临床有效性",
    en: "Clinical Efficacy",
    de: "Klinische Wirksamkeit"
  },
  ingredientScience: {
    zh: "原料科学",
    en: "Ingredient Science",
    de: "Inhaltsstoffwissenschaft"
  },
  cognitiveFunction: {
    zh: "认知功能",
    en: "Cognitive Function",
    de: "Kognitive Funktion"
  },
  immuneSystem: {
    zh: "免疫系统",
    en: "Immune System",
    de: "Immunsystem"
  },
  energyLevels: {
    zh: "能量水平",
    en: "Energy Levels",
    de: "Energielevel"
  },
  recoveryAbility: {
    zh: "恢复能力",
    en: "Recovery Ability",
    de: "Erholungsfähigkeit"
  },
  baseline: {
    zh: "基线",
    en: "Baseline",
    de: "Baseline"
  },
  afterUse: {
    zh: "使用后",
    en: "After Use",
    de: "Nach der Verwendung"
  },
  participantImprovementPercentage: {
    zh: "不同健康指标显示改善的参与者百分比",
    en: "Percentage of participants showing improvement in different health indicators",
    de: "Prozentsatz der Teilnehmer, die Verbesserungen bei verschiedenen Gesundheitsindikatoren zeigen"
  },
  researchGrowthDesc: {
    zh: "我们为在营养科学领域的贡献感到自豪。",
    en: "We are proud of our contributions to the field of nutritional science.",
    de: "Wir sind stolz auf unsere Beiträge auf dem Gebiet der Ernährungswissenschaft."
  },
  ingredientScienceDesc: {
    zh: "我们根据科学证据和质量标准精心选择每种成分。",
    en: "We carefully select each ingredient based on scientific evidence and quality standards.",
    de: "Wir wählen jeden Inhaltsstoff sorgfältig basierend auf wissenschaftlicher Evidenz und Qualitätsstandards aus."
  },
  qualityStandards: {
    zh: "质量标准",
    en: "Quality Standards",
    de: "Qualitätsstandards"
  },
  qualityStandardsDesc: {
    zh: "我们产品中的每种成分都符合最高质量标准。我们从与我们一样致力于纯度、效力和可持续性的供应商处采购。",
    en: "Each ingredient in our products meets the highest quality standards. We source from suppliers who share our commitment to purity, potency, and sustainability.",
    de: "Jeder Inhaltsstoff in unseren Produkten erfüllt die höchsten Qualitätsstandards. Wir beziehen unsere Rohstoffe von Lieferanten, die unser Engagement für Reinheit, Wirksamkeit und Nachhaltigkeit teilen."
  },
  contaminantTesting: {
    zh: "严格的第三方污染物检测",
    en: "Strict third-party contaminant testing",
    de: "Strenge Fremdstofftests durch Dritte"
  },
  identityVerification: {
    zh: "所有原材料的身份验证",
    en: "Identity verification of all raw materials",
    de: "Identitätsüberprüfung aller Rohstoffe"
  },
  potencyTesting: {
    zh: "效力测试以确保最佳效果",
    en: "Potency testing to ensure optimal results",
    de: "Wirksamkeitstests zur Gewährleistung optimaler Ergebnisse"
  },
  stabilityTesting: {
    zh: "稳定性测试以确保保质期",
    en: "Stability testing to ensure shelf life",
    de: "Stabilitätstests zur Gewährleistung der Haltbarkeit"
  },
  ingredientSourcing: {
    zh: "原料来源",
    en: "Ingredient Sourcing",
    de: "Inhaltsstoffbeschaffung"
  },
  organicIngredients: {
    zh: "有机原料",
    en: "Organic Ingredients",
    de: "Bio-Inhaltsstoffe"
  },
  nonGMO: {
    zh: "非转基因",
    en: "Non-GMO",
    de: "Nicht-GVO"
  },
  sustainableSourcing: {
    zh: "可持续来源",
    en: "Sustainable Sourcing",
    de: "Nachhaltige Beschaffung"
  },
  featuredPublications: {
    zh: "精选研究发表",
    en: "Featured Publications",
    de: "Ausgewählte Publikationen"
  },
  featuredPublicationsDesc: {
    zh: "浏览我们最近的一些研究发表和临床试验。",
    en: "Browse some of our recent research publications and clinical trials.",
    de: "Durchsuchen Sie einige unserer jüngsten Forschungs publikationen und klinischen Studien."
  },
  viewAbstract: {
    zh: "查看摘要",
    en: "View Abstract",
    de: "Abstract anzeigen"
  },
  experienceScientificNutrition: {
    zh: "体验科学营养的不同",
    en: "Experience the Difference of Scientific Nutrition",
    de: "Erleben Sie den Unterschied wissenschaftlicher Ernährung"
  },
  experienceScientificNutritionDesc: {
    zh: "了解我们基于证据的配方如何支持您的长期健康目标。",
    en: "Learn how our evidence-based formulas can support your long-term health goals.",
    de: "Erfahren Sie, wie unsere evidenzbasierten Formulierungen Ihre langfristigen Gesundheitsziele unterstützen können."
  },
  
  // 信任页面
  ourTrustPhilosophy: {
    zh: "我们的信任观",
    en: "Our Trust Philosophy",
    de: "Unsere Vertrauensphilosophie"
  },
  ourTrustPhilosophyDesc: {
    zh: "Hitree 相信，真正的信任来自透明，而非承诺。我们不追求'看起来很厉害'，而追求'经得起长期验证'。",
    en: "Hitree believes that true trust comes from transparency, not promises. We don't pursue 'looking impressive', but pursue 'withstanding long-term verification'.",
    de: "Hitree glaubt, dass wahres Vertrauen aus Transparenz entsteht, nicht aus Versprechen. Wir streben nicht danach, 'imponierend auszusehen', sondern danach, 'langfristige Überprüfung zu bestehen'."
  },
  rigorousQualityStandards: {
    zh: "严苛的质量标准",
    en: "Rigorous Quality Standards",
    de: "Strenge Qualitätsstandards"
  },
  rigorousQualityStandardsDesc: {
    zh: "我们为产品设定了最高标准，从原料采购到生产制造和测试环节，每一步都精益求精。",
    en: "We set the highest standards for our products, striving for excellence in every step from raw material procurement to manufacturing and testing.",
    de: "Wir legen die höchsten Standards für unsere Produkte fest und streben in jedem Schritt von der Rohstoffbeschaffung über die Herstellung bis hin zum Testen nach Exzellenz."
  },
  ingredientTraceability: {
    zh: "原料溯源",
    en: "Ingredient Traceability",
    de: "Inhaltsstoffverfolgung"
  },
  ingredientTraceabilityDesc: {
    zh: "我们只从符合严格标准的可信供应商采购最高品质的原料，并保持从农场到成品的完整可追溯性。",
    en: "We source only the highest quality ingredients from trusted suppliers who meet strict standards, maintaining complete traceability from farm to finished product.",
    de: "Wir beziehen nur die höchste Qualität an Inhaltsstoffen von vertrauenswürdigen Lieferanten, die strenge Standards erfüllen, und gewährleisten eine vollständige Verfolgung von der Farm bis zum fertigen Produkt."
  },
  gmpManufacturing: {
    zh: "GMP生产",
    en: "GMP Manufacturing",
    de: "GMP-Herstellung"
  },
  gmpManufacturingDesc: {
    zh: "我们的生产设施严格遵循GMP良好生产规范，确保产品安全和一致性。",
    en: "Our manufacturing facilities strictly follow GMP (Good Manufacturing Practices) to ensure product safety and consistency.",
    de: "Unsere Produktionsanlagen folgen streng den GMP (Gute Herstellungspraxis), um Produktsicherheit und Konsistenz zu gewährleisten."
  },
  thirdPartyTesting: {
    zh: "第三方检测",
    en: "Third-Party Testing",
    de: "Tests durch Dritte"
  },
  thirdPartyTestingDesc: {
    zh: "每一批产品都经过独立实验室的测试，以验证纯度、效力和安全性。",
    en: "Every batch of products is tested by independent laboratories to verify purity, potency, and safety.",
    de: "Jede Produkt Charge wird von unabhängigen Laboratorien getestet, um Reinheit, Wirksamkeit und Sicherheit zu überprüfen."
  },
  fullTransparency: {
    zh: "全程透明",
    en: "Full Transparency",
    de: "Vollständige Transparenz"
  },
  fullTransparencyDesc: {
    zh: "我们保持所有原料从来源到生产全过程的完全可追溯性。",
    en: "We maintain complete traceability of all ingredients from source to production process.",
    de: "Wir gewährleisten eine vollständige Verfolgung aller Inhaltsstoffe von der Quelle bis zum Produktionsprozess."
  },
  strictCompliance: {
    zh: "严格合规",
    en: "Strict Compliance",
    de: "Strenge Konformität"
  },
  strictComplianceDesc: {
    zh: "我们严格遵守所有适用的法规和标准，确保产品的安全和质量。",
    en: "We strictly comply with all applicable regulations and standards to ensure product safety and quality.",
    de: "Wir halten uns streng an alle anwendbaren Vorschriften und Standards, um Produktsicherheit und Qualität zu gewährleisten."
  },
  fdaCompliance: {
    zh: "FDA合规认证",
    en: "FDA Compliance Certification",
    de: "FDA-Konformitätszertifizierung"
  },
  fdaComplianceDesc: {
    zh: "我们的产品和制造流程符合FDA对膳食补充剂的所有法规要求。",
    en: "Our products and manufacturing processes comply with all FDA regulatory requirements for dietary supplements.",
    de: "Unsere Produkte und Herstellungsprozesse entsprechen allen FDA-Vorschriften für Nahrungsergänzungsmittel."
  },
  gmpCertification: {
    zh: "GMP认证",
    en: "GMP Certification",
    de: "GMP-Zertifizierung"
  },
  gmpCertificationDesc: {
    zh: "我们的设施通过GMP认证，确保最高标准的制造实践。",
    en: "Our facilities are GMP certified to ensure the highest standards of manufacturing practice.",
    de: "Unsere Anlagen sind GMP-zertifiziert, um die höchsten Standards an Herstellungspraxis zu gewährleisten."
  },
  isoStandards: {
    zh: "ISO标准",
    en: "ISO Standards",
    de: "ISO-Standards"
  },
  isoStandardsDesc: {
    zh: "我们遵循ISO质量管理体系和实验室测试标准。",
    en: "We follow ISO quality management systems and laboratory testing standards.",
    de: "Wir folgen ISO-Qualitätsmanagementsystemen und Laborprüfstandards."
  },
  yourTrustOurPriority: {
    zh: "您的信任是我们的首要任务",
    en: "Your Trust is Our Priority",
    de: "Ihr Vertrauen hat bei uns oberste Priorität"
  },
  yourTrustOurPriorityDesc: {
    zh: "我们致力于通过透明度、质量和诚信来建立和维护您的信任。",
    en: "We are committed to building and maintaining your trust through transparency, quality, and integrity.",
    de: "Wir sind bestrebt, Ihr Vertrauen durch Transparenz, Qualität und Integrität aufzubauen und zu erhalten."
  },
  clearIngredientSources: {
    zh: "成分来源清晰",
    en: "Clear Ingredient Sources",
    de: "Klare Inhaltsstoffquellen"
  },
  clearIngredientSourcesDesc: {
    zh: "我们明确披露每种成分的来源和规格，让您了解产品的每一个细节。",
    en: "We clearly disclose the source and specification of each ingredient, allowing you to understand every detail of the product.",
    de: "Wir offenbaren die Quelle und Spezifikation jedes Inhaltsstoffs klar, damit Sie jede Einzelheit des Produkts verstehen können."
  },
  preciseDosageLabeling: {
    zh: "剂量标注明确",
    en: "Precise Dosage Labeling",
    de: "Präzise Dosierungsbezeichnung"
  },
  preciseDosageLabelingDesc: {
    zh: "我们精确标注每种成分的含量，不使用模糊的'专有配方'来掩盖信息。",
    en: "We precisely label the content of each ingredient and do not use vague 'proprietary formulas' to obscure information.",
    de: "Wir kennzeichnen den Gehalt jedes Inhaltsstoffs genau und verwenden keine vagen 'proprietären Formulierungen', um Informationen zu verschleiern."
  },
  clearEfficacyBoundaries: {
    zh: "功效边界清楚",
    en: "Clear Efficacy Boundaries",
    de: "Klare Wirksamkeitsgrenzen"
  },
  clearEfficacyBoundariesDesc: {
    zh: "我们诚实地说明产品的预期效果，不做出无法验证的夸大承诺。",
    en: "We honestly state the expected effects of our products and do not make exaggerated promises that cannot be verified.",
    de: "Wir stellen die erwarteten Wirkungen unserer Produkte ehrlich dar und machen keine übertriebenen Versprechen, die nicht überprüft werden können."
  },
  experienceHitreeDifference: {
    zh: "体验Hitree的不同",
    en: "Experience the Hitree Difference",
    de: "Erleben Sie den Hitree-Unterschied"
  },
  experienceHitreeDifferenceDesc: {
    zh: "了解为什么健康专业人士和有鉴别力的消费者信任Hitree满足他们的营养需求。",
    en: "Learn why health professionals and discerning consumers trust Hitree to meet their nutritional needs.",
    de: "Erfahren Sie, warum Gesundheitsexperten und anspruchsvolle Verbraucher Hitree vertrauen, um ihre Ernährungsbedürfnisse zu erfüllen."
  },
  
  // 页脚
  resources: {
    zh: "资源",
    en: "Resources",
    de: "Ressourcen"
  },
  scientificPapers: {
    zh: "科学论文",
    en: "Scientific Papers",
    de: "Wissenschaftliche Artikel"
  },
  nutritionGuides: {
    zh: "营养指南",
    en: "Nutrition Guides",
    de: "Ernährungsleitfäden"
  },
  faq: {
    zh: "常见问题",
    en: "FAQ",
    de: "Häufig gestellte Fragen"
  },
  blog: {
    zh: "博客",
    en: "Blog",
    de: "Blog"
  },
  legal: {
    zh: "法律",
    en: "Legal",
    de: "Recht"
  },
  privacyPolicy: {
    zh: "隐私政策",
    en: "Privacy Policy",
    de: "Datenschutzrichtlinie"
  },
  termsOfService: {
    zh: "服务条款",
    en: "Terms of Service",
    de: "Nutzungsbedingungen"
  },
  cookiePolicy: {
    zh: "Cookie政策",
    en: "Cookie Policy",
    de: "Cookie-Richtlinie"
  },
  copyright: {
    zh: "© {year} HITREE Nutrition. 保留所有权利。",
    en: "© {year} HITREE Nutrition. All rights reserved.",
    de: "© {year} HITREE Nutrition. Alle Rechte vorbehalten."
  },
  
  // 表单相关
  formSubmitted: {
    zh: "感谢您的留言！",
    en: "Thank you for your message!",
    de: "Vielen Dank für Ihre Nachricht!"
  },
  formSubmittedDesc: {
    zh: "我们已收到您的信息，将尽快与您联系。",
    en: "We have received your information and will contact you as soon as possible.",
    de: "Wir haben Ihre Informationen erhalten und werden Sie so schnell wie möglich kontaktieren."
  },
  productInquiry: {
    zh: "产品咨询",
    en: "Product Inquiry",
    de: "Produktanfrage"
  },
  researchCollaboration: {
    zh: "研究合作",
    en: "Research Collaboration",
    de: "Forschungs Zusammenarbeit"
  },
  businessPartnership: {
    zh: "商务合作",
    en: "Business Partnership",
    de: "Geschäftliche Partnerschaft"
  },
  other: {
    zh: "其他",
    en: "Other",
    de: "Andere"
  },
  selectSubject: {
    zh: "请选择主题",
    en: "Please select a subject",
    de: "Bitte wählen Sie ein Thema"
  }
};

// 翻译钩子函数
export function useTranslation() {
  // 使用全局语言上下文
  const context = useContext(LanguageContext);
  
  // 如果上下文不存在（即在LanguageProvider之外使用），提供默认值作为后备
  if (!context) {
    const defaultLanguage: Language = 'zh';
    
    const t = (key: string, variables: Record<string, string> = {}): string => {
      const translation = translations[key];
      if (!translation) return key;
      
      let text = translation[defaultLanguage];
      
      // 替换变量
      Object.keys(variables).forEach(variable => {
        text = text.replace(`{${variable}}`, variables[variable]);
      });
      
      return text;
    };
    
    return {
      language: defaultLanguage,
      setLanguage: () => {}, // 空函数作为后备
      t
    };
  }
  
  const { language, setLanguage } = context;
  
  const t = (key: string, variables: Record<string, string> = {}): string => {
    const translation = translations[key];
    if (!translation) return key;
    
    let text = translation[language];
    
    // 替换变量
    Object.keys(variables).forEach(variable => {
      text = text.replace(`{${variable}}`, variables[variable]);
    });
    
    return text;
  };
  
  return {
    language,
    setLanguage,
    t
  };
}