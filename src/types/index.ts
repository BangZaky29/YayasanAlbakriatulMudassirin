export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface JenjangCard {
  id: number;
  tag: string;
  tabTitle: string;
  tabSubtitle: string;
  label: string;
  ageRange: string;
  subtitle: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  features: JenjangFeature[];
  ctaLabel: string;
  ctaNote: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  imageCaptionSub: string;
  footerLabel: string;
  color: 'terracotta' | 'forest' | 'gold';
}

export interface JenjangFeature {
  icon?: string;
  title: string;
  description: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  color: 'forest' | 'gold';
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  hours: string;
}

export interface PPDBFormData {
  jenjang: 'TK' | 'SMP_IT' | 'SMK';
  namaCalon: string;
  namaOrtu: string;
  whatsapp: string;
  asalSekolah: string;
  catatan: string;
}
