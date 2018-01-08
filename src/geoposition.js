const error = 'Impossible de récupérer la position de l\'utilisateur, le navigateur ne supporte pas la fonctionnalité';

export default function geoposition() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((p) => {
        resolve(p.coords);
      });
    } else {
      reject(new Error(error));
    }
  });
}
