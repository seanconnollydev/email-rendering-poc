import renderEmailHtml from './renderEmailHtml';

(async () => {
  const html = await renderEmailHtml({ templateId: 'basic' });
  console.log(html);
})();