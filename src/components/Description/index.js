import React from 'react';

import './style.scss';

const Description = () => {
  console.log('composant footer');
  return (
    <div className="description">
      <h2 className="description-title">Bienvenue dans la gestion de votre potager</h2>
      <p className="description-content">Si vous êtes lassés de semer vos légumes pour des récoltes très faibles, vous êtes au bon endroit. Le jardinage efficace nécessite quelques connaissances et beaucoup d'expérience.</p>
      <p className="description-content">Nous vous proposons d'acquérir rapidement de l'expérience. Comment ?</p>
      <ul className="description-list">
        <li>Apprenez en mémorisant tous les événements et en obtenant des conseils.</li>
        <li>Apprenez à plusieurs jardiniers grâce au partage de vos historiques et en discutant, tout simplement !</li>
      </ul>
    </div>
  )
}

export default Description;
