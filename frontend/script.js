async function removeBackground() {
  const input = document.getElementById('imageInput');
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear previous output

  if (!input.files.length) {
    alert("Please select an image");
    return;
  }

  const formData = new FormData();
  formData.append("file", input.files[0]);

  // 👇 Replace with your actual Codespace backend URL
  const backendURL = "https://background-remover-python.onrender.com/";

  try {
    const response = await fetch(backendURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to remove background");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    // Create image preview
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Image with background removed";
    img.style.maxWidth = "90%";

    // Create download button
    const downloadBtn = document.createElement('a');
    downloadBtn.href = url;
    downloadBtn.download = 'no-background.png';
    downloadBtn.textContent = 'Download Image';
    downloadBtn.className = 'download-button';

    // Append to result div
    resultDiv.appendChild(img);
    resultDiv.appendChild(document.createElement('br'));
    resultDiv.appendChild(downloadBtn);

  } catch (err) {
    alert("Error: " + err.message);
  }
}