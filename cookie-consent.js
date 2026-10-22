(function () {
  'use strict';

  var CONSENT_KEY = 'bonix-cookie-consent';
  var GOOGLE_ANALYTICS_ID = 'G-XERNC4ZQ1J';
  var consent = null;

  try {
    consent = window.localStorage.getItem(CONSENT_KEY);
  } catch (error) {
    // If storage is unavailable, keep analytics disabled until the user accepts.
  }

  function clearAnalyticsCookies() {
    var analyticsCookieName = /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)|^_gac_/;
    var cookieNames = document.cookie.split(';').map(function (cookie) {
      return cookie.trim().split('=')[0];
    }).filter(function (name) {
      return analyticsCookieName.test(name);
    });
    var hostParts = window.location.hostname.split('.');
    var domains = [null, window.location.hostname];

    while (hostParts.length > 1) {
      domains.push('.' + hostParts.join('.'));
      hostParts.shift();
    }

    cookieNames.forEach(function (name) {
      domains.forEach(function (domain) {
        var domainAttribute = domain ? '; domain=' + domain : '';
        document.cookie = name + '=; max-age=0; path=/' + domainAttribute + '; samesite=lax';
      });
    });
  }

  function loadAnalytics() {
    if (window.__bonixAnalyticsLoaded) return;
    window.__bonixAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ANALYTICS_ID);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GOOGLE_ANALYTICS_ID;
    document.head.appendChild(script);
  }

  if (consent === 'accepted') loadAnalytics();
  if (consent === 'declined') clearAnalyticsCookies();

  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (consent !== 'accepted' && consent !== 'declined') {
    window.setTimeout(function () { banner.classList.add('show'); }, 900);
  }

  function dismiss(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      // The current choice still applies to this page if storage is unavailable.
    }
    if (value === 'accepted') loadAnalytics();
    if (value === 'declined') clearAnalyticsCookies();
    banner.classList.remove('show');
    window.setTimeout(function () { banner.remove(); }, 420);
  }

  var acceptButton = document.getElementById('cookie-accept');
  var declineButton = document.getElementById('cookie-decline');
  if (acceptButton) acceptButton.addEventListener('click', function () { dismiss('accepted'); });
  if (declineButton) declineButton.addEventListener('click', function () { dismiss('declined'); });
})();
