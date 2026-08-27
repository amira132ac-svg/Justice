export interface HighlightArea {
  id: string;
  label: string;
  description: string;
  top: string;
  left: string;
  width: string;
  height: string;
  critical?: boolean;
}

export interface EvidenceDocument {
  id: string;
  docNumber: string;
  title: string;
  shortCaption: string;
  category: 'account_transfer' | 'playtime_stats' | 'identity_avatar' | 'chat_evidence';
  categoryLabel: string;
  dateOrTime?: string;
  sourceType: string;
  description: string;
  keyFindings: string[];
  transcription?: {
    speaker?: string;
    text: string;
    time?: string;
    isKey?: boolean;
  }[];
  statHighlights?: {
    label: string;
    value: string;
    verified: boolean;
  }[];
  imageType: 'ps5_interface' | 'chat_leak_1' | 'chat_leak_2' | 'chat_leak_3' | 'chat_leak_4' | 'hamid_safar_1';
  highlights: HighlightArea[];
  svgVisualType: string;
}

export interface PlayerStatRecord {
  accountName: string;
  gameTitle: string;
  platform: string;
  hoursPlayed: number;
  trophyProgress: string;
  trophiesUnlocked: string;
  lastActive: string;
  verifiedSource: string;
  notes: string;
}
