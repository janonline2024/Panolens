// Initialize Panolens viewer
const viewer = new PANOLENS.Viewer({
    container: document.getElementById('container')
  });
  
  // Create a panorama image
  const panorama = new PANOLENS.ImagePanorama('New_Panorama2.jpg');
  
  // Add the panorama to the viewer
  viewer.add(panorama);
  
