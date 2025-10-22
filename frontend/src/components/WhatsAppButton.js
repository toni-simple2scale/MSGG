import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/351913253290?text=Olá! Gostaria de mais informações sobre os produtos MSGG.',
      '_blank'
    );
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <MessageCircle size={28} color="white" />
    </div>
  );
};

export default WhatsAppButton;