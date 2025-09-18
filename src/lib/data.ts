export const IZMIR_DISTRICTS = [
  "aliağa","balçova","bayındır","bayraklı","bergama","beydağ","bornova","buca",
  "çeşme","çiğli","dikili","foça","gaziemir","güzelbahçe","karabağlar","karaburun",
  "karşıyaka","kemalpaşa","kınık","kiraz","konak","menderes","menemen","narlıdere",
  "ödemiş","seferihisar","selçuk","tire","torbalı","urla"
] as const;

export const SERVICES = [
  { slug: "klima-servisi", label: "Klima Servisi" },
  { slug: "kombi-servisi", label: "Kombi Servisi" },
  { slug: "bulasik-makinesi-servisi", label: "Bulaşık Makinesi Servisi" },
  { slug: "camasir-makinesi-servisi", label: "Çamaşır Makinesi Servisi" },
  { slug: "buzdolabi-servisi", label: "Buzdolabı Servisi" },
] as const;

export function toTitle(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (a) => a.toLocaleUpperCase("tr-TR"));
}


