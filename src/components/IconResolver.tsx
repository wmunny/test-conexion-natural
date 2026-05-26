import React from 'react';
import {
  Eye,
  Wind,
  Volume2,
  Feather,
  Droplet,
  Sprout,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Check,
  AlertTriangle,
  Mail,
  Send,
  Download,
  Flame,
  Heart,
  Building2,
  Award,
  Sparkles,
  ExternalLink,
  Printer,
  ChevronRight,
  ShieldCheck,
  Zap,
  Leaf
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconResolver: React.FC<IconResolverProps> = ({ name, className = '', size }) => {
  const iconProps = { className, size };

  switch (name.toLowerCase()) {
    case 'eye':
      return <Eye {...iconProps} />;
    case 'wind':
      return <Wind {...iconProps} />;
    case 'volume2':
      return <Volume2 {...iconProps} />;
    case 'feather':
      return <Feather {...iconProps} />;
    case 'droplet':
      return <Droplet {...iconProps} />;
    case 'sprout':
      return <Sprout {...iconProps} />;
    case 'arrowleft':
      return <ArrowLeft {...iconProps} />;
    case 'arrowright':
      return <ArrowRight {...iconProps} />;
    case 'rotateccw':
      return <RotateCcw {...iconProps} />;
    case 'check':
      return <Check {...iconProps} />;
    case 'alerttriangle':
      return <AlertTriangle {...iconProps} />;
    case 'mail':
      return <Mail {...iconProps} />;
    case 'send':
      return <Send {...iconProps} />;
    case 'download':
      return <Download {...iconProps} />;
    case 'flame':
      return <Flame {...iconProps} />;
    case 'heart':
      return <Heart {...iconProps} />;
    case 'building2':
      return <Building2 {...iconProps} />;
    case 'award':
      return <Award {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'externallink':
      return <ExternalLink {...iconProps} />;
    case 'printer':
      return <Printer {...iconProps} />;
    case 'chevronright':
      return <ChevronRight {...iconProps} />;
    case 'shieldcheck':
      return <ShieldCheck {...iconProps} />;
    case 'zap':
      return <Zap {...iconProps} />;
    case 'leaf':
      return <Leaf {...iconProps} />;
    default:
      return <Leaf {...iconProps} />;
  }
};
