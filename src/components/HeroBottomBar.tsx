export default function HeroBottomBar() {
  return (
    <div className="relative -mt-10 w-full px-6">
      <div className="relative z-20 overflow-hidden rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur max-w-5xl ml-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="flex items-center gap-4 p-5 sm:p-7">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.98 0 1.84.64 2.114 1.575l.59 2.065a2.25 2.25 0 0 1-.568 2.2l-1.13 1.13a.75.75 0 0 0-.185.76c.518 1.518 1.73 2.73 3.248 3.248a.75.75 0 0 0 .76-.185l1.13-1.13a2.25 2.25 0 0 1 2.2-.568l2.065.59A2.25 2.25 0 0 1 19.5 17.46v2.04a2.25 2.25 0 0 1-2.25 2.25H16.5c-8.008 0-14.25-6.242-14.25-14.25v-.75Z" />
              </svg>
            </span>
            <div>
              <div className="text-base font-semibold text-gray-900">7/24 Hizmet</div>
              <div className="text-sm text-gray-500">Çağrı ve talep yönetimi</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 sm:p-7">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75Zm.75 4.5a.75.75 0 0 0-1.5 0V9h-.375a2.625 2.625 0 0 0 0 5.25h2.25a1.125 1.125 0 1 1 0 2.25H10.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0V18h.375a2.625 2.625 0 1 0 0-5.25h-2.25a1.125 1.125 0 1 1 0-2.25H13.5a.75.75 0 0 0 0-1.5h-.75V8.25Z" />
              </svg>
            </span>
            <div>
              <div className="text-base font-semibold text-gray-900">Hızlı Müdahale</div>
              <div className="text-sm text-gray-500">Aynı gün servis yönlendirme</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 sm:p-7">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm13.036-2.586a.75.75 0 0 0-1.072-1.048l-4.18 4.278-1.745-1.74a.75.75 0 1 0-1.06 1.062l2.28 2.275c.293.293.767.287 1.053-.014l4.724-4.813Z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <div className="text-base font-semibold text-gray-900">%98 Memnuniyet</div>
              <div className="text-sm text-gray-500">Müşteri odaklı çözüm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


