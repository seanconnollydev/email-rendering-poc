import renderEmailHtml from './renderEmailHtml';

(async () => {
  const html = await renderEmailHtml();
  console.log(html);
})();