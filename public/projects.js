import Column from './components/column.js';
import MultiColumn from './components/multi-column.js';
import ColumnImage from './components/column-image.js';

(async () => {
  await Promise.all([
    Column(),
    MultiColumn(),
    ColumnImage(),
  ]);

  window.document.body.classList.add('is-loaded');
})();