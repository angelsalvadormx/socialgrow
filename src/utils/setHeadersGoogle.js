export const setHeadersGoogle = (g_key) => {
  if (process.env.NODE_ENV !== "production") return;
  if (!g_key) return;
  if (document.querySelector(`script[src*="${g_key}"]`)) return;

  const scriptTag1 = document.createElement("script");
  scriptTag1.src = `https://www.googletagmanager.com/gtag/js?id=${g_key}`;
  scriptTag1.async = true;
  document.head.appendChild(scriptTag1);

  const scriptTag2 = document.createElement("script");
  scriptTag2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', g_key);
    `;
  document.head.appendChild(scriptTag2);
};
