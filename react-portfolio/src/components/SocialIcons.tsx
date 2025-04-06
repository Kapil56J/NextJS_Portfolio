import React from 'react';
import Icon from './Icon';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

type IconName = 'github' | 'linkedin' | 'instagram' | 'hackerrank' | 'email';

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className = '', 
  iconSize = 26,
  iconColor = '#000000'
}) => {
  const socialLinks = [
    {
      name: 'github' as IconName,
      url: 'https://github.com/Kapil56J',
      label: 'GitHub'
    },
    {
      name: 'linkedin' as IconName,
      url: 'https://www.linkedin.com/in/kapil-jadhav5656/',
      label: 'LinkedIn'
    },
    {
      name: 'instagram' as IconName,
      url: 'https://www.instagram.com/i_am_kapildj?igsh=MWc0dnIzZjZwNHl4MA==',
      label: 'Instagram'
    },
    {
      name: 'hackerrank' as IconName,
      url: 'https://www.hackerrank.com/profile/kapiljadhav5656',
      label: 'HackerRank'
    }
  ];

  return (
    <div className={`flex ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:opacity-80 transition-opacity"
          aria-label={social.label}
        >
          <Icon name={social.name} size={iconSize} color={iconColor} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 