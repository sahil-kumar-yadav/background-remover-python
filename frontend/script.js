async function removeBackground() {
  const input = document.getElementById('imageInput');
  if (!input.files.length) return alert('Please select an image');

  const formData = new FormData();
  formData.append('file', input.files[0]);

  const response = await fetch('https://shiny-dollop-x6pvxqr6jqwcvvxq-5500.app.github.dev/frontend/', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    return alert('Error removing background');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  document.getElementById('result').innerHTML = `<img src="${url}" alt="No Background Image" />`;
}
