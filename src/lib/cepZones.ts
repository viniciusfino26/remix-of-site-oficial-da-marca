// ─── MAPA DE PREFIXOS DE CEP DE SÃO PAULO CAPITAL ──────────────────────────
// Faixas oficiais dos Correios para SP capital (CEP 01000-000 a 05999-999, 08000-000 a 08499-999)
// Mapeia prefixo de 3 dígitos → zona + loja recomendada + coordenadas aproximadas do prefixo

export type SPZone = 'Centro' | 'Norte' | 'Sul' | 'Leste' | 'Oeste';

export interface CepZoneInfo {
  zone: SPZone;
  recommendedStoreId: 'paulista' | 'moema' | 'pacaembu' | 'santana';
  lat: number;
  lng: number;
  district: string;
}

// Helper para criar entradas
const z = (zone: SPZone, store: CepZoneInfo['recommendedStoreId'], lat: number, lng: number, district: string): CepZoneInfo =>
  ({ zone, recommendedStoreId: store, lat, lng, district });

// Mapa de prefixos (3 primeiros dígitos do CEP) → info da zona
// Baseado nas faixas dos Correios: https://www.correios.com.br/enviar/precisa-de-ajuda/tudo-sobre-cep
const CEP_PREFIX_MAP: Record<string, CepZoneInfo> = {
  // ─── ZONA CENTRAL (010xx-015xx) → Paulista ──────────────────────────────
  '010': z('Centro', 'paulista', -23.5505, -46.6333, 'Sé / República'),
  '011': z('Centro', 'paulista', -23.5475, -46.6361, 'Centro Histórico'),
  '012': z('Centro', 'paulista', -23.5400, -46.6300, 'Bom Retiro / Luz'),
  '013': z('Centro', 'paulista', -23.5614, -46.6565, 'Bela Vista / Paulista'),
  '014': z('Centro', 'paulista', -23.5587, -46.6608, 'Consolação / Higienópolis'),
  '015': z('Centro', 'paulista', -23.5450, -46.6450, 'República / Sta. Cecília'),

  // ─── ZONA NORTE (020xx-029xx) → Santana ─────────────────────────────────
  '020': z('Norte', 'santana', -23.5180, -46.6280, 'Santana'),
  '021': z('Norte', 'santana', -23.5060, -46.6200, 'Casa Verde / Limão'),
  '022': z('Norte', 'santana', -23.4900, -46.6100, 'Tucuruvi / Mandaqui'),
  '023': z('Norte', 'santana', -23.4669, -46.6367, 'Imirim / Vila Nova Cachoeirinha'),
  '024': z('Norte', 'santana', -23.4500, -46.6500, 'Brasilândia / Cachoeirinha'),
  '025': z('Norte', 'santana', -23.4800, -46.5800, 'Vila Maria / Vila Guilherme'),
  '026': z('Norte', 'santana', -23.4700, -46.5700, 'Jaçanã / Tremembé'),
  '027': z('Norte', 'santana', -23.4600, -46.5500, 'Vila Medeiros'),
  '028': z('Norte', 'santana', -23.4400, -46.6300, 'Pirituba / Perus'),
  '029': z('Norte', 'santana', -23.4500, -46.7000, 'Anhanguera / Jaraguá'),

  // ─── ZONA LESTE (030xx-039xx, 080xx-084xx) → Santana (mais próxima do norte) ou Paulista
  '030': z('Leste', 'paulista', -23.5400, -46.6000, 'Brás / Pari'),
  '031': z('Leste', 'paulista', -23.5500, -46.5800, 'Mooca / Belém'),
  '032': z('Leste', 'paulista', -23.5400, -46.5600, 'Tatuapé'),
  '033': z('Leste', 'paulista', -23.5300, -46.5400, 'Vila Formosa / Carrão'),
  '034': z('Leste', 'paulista', -23.5500, -46.5200, 'Aricanduva'),
  '035': z('Leste', 'paulista', -23.5600, -46.5000, 'Vila Matilde / Penha'),
  '036': z('Leste', 'paulista', -23.5300, -46.4800, 'Ermelino Matarazzo'),
  '037': z('Leste', 'paulista', -23.5400, -46.4500, 'São Miguel Paulista'),
  '038': z('Leste', 'paulista', -23.5500, -46.4200, 'Itaim Paulista'),
  '039': z('Leste', 'paulista', -23.5800, -46.5500, 'Vila Prudente / Sapopemba'),
  '080': z('Leste', 'paulista', -23.5600, -46.4800, 'Itaquera'),
  '081': z('Leste', 'paulista', -23.5700, -46.4600, 'Cidade Líder / Guaianases'),
  '082': z('Leste', 'paulista', -23.5500, -46.4000, 'Lajeado'),
  '083': z('Leste', 'paulista', -23.5800, -46.4500, 'São Mateus'),
  '084': z('Leste', 'paulista', -23.6000, -46.4700, 'Iguatemi'),

  // ─── ZONA SUL (040xx-058xx) → Moema ─────────────────────────────────────
  '040': z('Sul', 'moema', -23.5870, -46.6440, 'Vila Mariana / Paraíso'),
  '041': z('Sul', 'moema', -23.6114, -46.6658, 'Moema / Indianópolis'),
  '042': z('Sul', 'moema', -23.6300, -46.6400, 'Saúde / Bosque da Saúde'),
  '043': z('Sul', 'moema', -23.6500, -46.6300, 'Jabaquara / Mirandópolis'),
  '044': z('Sul', 'moema', -23.6700, -46.6800, 'Santo Amaro / Brooklin'),
  '045': z('Sul', 'moema', -23.6500, -46.7000, 'Campo Belo / Santo Amaro'),
  '046': z('Sul', 'moema', -23.6800, -46.7200, 'Capão Redondo'),
  '047': z('Sul', 'moema', -23.7000, -46.7000, 'Campo Limpo / M\'Boi Mirim'),
  '048': z('Sul', 'moema', -23.6800, -46.6500, 'Cidade Ademar / Pedreira'),
  '049': z('Sul', 'moema', -23.7200, -46.6800, 'Cidade Dutra / Grajaú'),
  '050': z('Oeste', 'pacaembu', -23.5279, -46.6658, 'Barra Funda / Pacaembu'),
  '051': z('Oeste', 'pacaembu', -23.5350, -46.6800, 'Perdizes / Pompeia'),
  '052': z('Oeste', 'pacaembu', -23.5400, -46.7000, 'Lapa / Vila Leopoldina'),
  '053': z('Oeste', 'pacaembu', -23.5300, -46.7200, 'Vila Romana / Água Branca'),
  '054': z('Oeste', 'pacaembu', -23.5600, -46.6900, 'Pinheiros / Sumaré'),
  '055': z('Oeste', 'pacaembu', -23.5700, -46.7000, 'Vila Madalena / Alto de Pinheiros'),
  '056': z('Oeste', 'pacaembu', -23.5800, -46.7200, 'Butantã / Morumbi'),
  '057': z('Oeste', 'pacaembu', -23.6000, -46.7400, 'Rio Pequeno / Vila Sônia'),
  '058': z('Oeste', 'pacaembu', -23.6200, -46.7600, 'Raposo Tavares / Jaguaré'),
};

/**
 * Busca info da zona pelo prefixo do CEP (3 primeiros dígitos).
 * Aceita CEP com ou sem hífen.
 */
export function getCepZoneInfo(cep: string): CepZoneInfo | null {
  const digits = cep.replace(/\D/g, '');
  if (digits.length < 3) return null;
  const prefix = digits.slice(0, 3);
  return CEP_PREFIX_MAP[prefix] ?? null;
}

/**
 * Verifica se o CEP é da Grande SP (capital).
 */
export function isSPCapital(cep: string): boolean {
  return getCepZoneInfo(cep) !== null;
}
