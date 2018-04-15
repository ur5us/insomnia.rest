import React from 'react';

export const Twitter = ({title}) => (
  <a
    href="http://twitter.com/share?url={{ .Permalink | safeURL }}&text={{ .Title | safeURL }}&via={{ .Site.Params.twitter }}"
    onClick={e => {
      e.preventDefault();
      const href = `http://twitter.com/share?url=${encodeURIComponent(window.location.url)}&text=${encodeURIComponent(title || document.title)}&via=GetInsomnia`;
      window.open(href, 'twitter-share', 'width=800,height=600');
    }}
    title="Share on Twitter"
    className="button--share button twitter">
    <svg className="icon" viewBox="0 0 512 512">
      <path
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
    </svg>
  </a>
);

export const GooglePlus = ({title}) => (
  <a href="#" onClick={e => {
    e.preventDefault();
    const href = `https://plus.google.com/share?url=${encodeURIComponent(window.location.href)}?title=${encodeURIComponent(title || document.title)}`;
    window.open(href, 'google-plus-share');
  }} title="Share on Google+" className="button--share button google-plus">
    <svg className="icon" viewBox="0 0 640 512">
      <path
        d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"/>
    </svg>
  </a>
);

export const Reddit = ({title}) => (
  <a href="#" onClick={e => {
    e.preventDefault();
    const href = `http://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title || document.title)}`;
    window.open(href, 'reddit-share', 'width=900,height=600');
  }} title="Post to Reddit" className="button--share button reddit">
    <svg className="icon" viewBox="0 0 512 512">
      <path
        d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/>
    </svg>
  </a>
);

export const Facebook = ({title}) => (
  <a href="#" onClick={e => {
    e.preventDefault();
    const href = `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(href, 'facebook-share', 'width=800,height=600');
  }} title="Share on Facebook" className="button--share button facebook">
    <svg className="icon" viewBox="0 0 448 512">
      <path
        d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"/>
    </svg>
  </a>
);

export const Email = ({title}) => (
  <a href="#" title="Share via email" onClick={e => {
    e.preventDefault();
    const href = `mailto:?subject=${encodeURIComponent(title || document.title)}&body=${encodeURIComponent(window.location.href)}`;
    window.open(href, 'email-share', 'width=800,height=600');
  }} className="button--share button email">
    <svg className="icon" viewBox="0 0 512 512">
      <path
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
    </svg>
  </a>
);

const ShareButtons = ({title}) => (
  <div className="share-buttons">
    <Twitter title={title}/>
    <GooglePlus title={title}/>
    <Reddit title={title}/>
    <Facebook title={title}/>
    <Email title={title}/>
  </div>
);

export default ShareButtons;
