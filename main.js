fetch('heat_step_guide.json')
  .then(response => response.json())
  .then(data => {
    const guideList = document.getElementById('guide-list');
    const guides = data.devices[0].guides;
    guides.forEach(guide => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${guide.guideName}</h2><p>${guide.description}</p>`;
      guideList.appendChild(div);
    });
  });