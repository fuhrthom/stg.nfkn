function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  function confirmEmail() {
    var email = document.getElementById('email-input').value;
    if (email) {
      alert('Erfolgreich abboniert!');
      document.getElementById('popup').style.display = 'none';
    } else {
      alert('Bitte eine gültige Email eingeben');
}
}