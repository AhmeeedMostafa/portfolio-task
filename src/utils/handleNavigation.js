export default (event) => {
  const targetUrl = event.currentTarget.href;
  const startOfSectionId = targetUrl.indexOf('#') + 1;
  const sectionId = targetUrl.substr(startOfSectionId);
  const requestedSection = document.getElementById(sectionId);
  
  if (requestedSection) {
    event.preventDefault();
    requestedSection.scrollIntoView({ behavior: 'smooth' });
  }
}
