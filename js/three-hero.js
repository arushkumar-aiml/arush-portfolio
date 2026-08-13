// ============================================================
// ARUSH KUMAR — 3D neural-network hero background (three.js)
// A slowly rotating point-cloud with nearest-neighbour edges,
// standing in for "AI-native" — orange accent on transparent bg.
// ============================================================

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hero = canvas.closest('.hero');
  let width = hero.clientWidth;
  let height = hero.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
  camera.position.set(0, 0, 9);

  const NODE_COUNT = window.innerWidth < 700 ? 34 : 60;
  const RADIUS = 5.4;
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(new THREE.Vector3(
      (Math.random() - 0.5) * RADIUS * 2.2,
      (Math.random() - 0.5) * RADIUS * 1.3,
      (Math.random() - 0.5) * RADIUS
    ));
  }

  // Points (nodes)
  const pointGeo = new THREE.BufferGeometry().setFromPoints(nodes);
  const pointMat = new THREE.PointsMaterial({
    color: 0xff6a3d,
    size: 0.09,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true
  });
  const points = new THREE.Points(pointGeo, pointMat);
  scene.add(points);

  // Edges — connect each node to its few nearest neighbours
  const MAX_DIST = 2.6;
  const linePositions = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < MAX_DIST) {
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
        linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  const group = new THREE.Group();
  group.add(points, lines);
  scene.add(group);

  let mouseX = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  });

  function onResize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);

  let raf;
  function animate() {
    raf = requestAnimationFrame(animate);
    group.rotation.y += 0.0016;
    group.rotation.x = Math.sin(Date.now() * 0.0002) * 0.08;
    camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.02;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  if (prefersReducedMotion) {
    group.rotation.x = 0.15;
    renderer.render(scene, camera);
  } else {
    animate();
  }

  // Pause when hero is off-screen to save battery/CPU
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!prefersReducedMotion) {
          if (entry.isIntersecting && !raf) animate();
          if (!entry.isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
        }
      });
    }, { threshold: 0.05 });
    io.observe(hero);
  }
})();
