import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { ContactSection, DestinationCard, PageHero } from '@/components/Sections';
import { img } from '@/data/images';
import { destinations, extraDestinations, regions, type RegionId } from '@/data/destinations';
import { wa } from '@/data/site';

type Tab = 'all' | RegionId;

const tabs: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All Regions' },
  ...regions.map((r) => ({ id: r.id, label: r.label })),
];

const tabFromHash = (hash: string): Tab => {
  const id = hash.replace('#', '');
  return tabs.some((t) => t.id === id) ? (id as Tab) : 'all';
};

export default function Destinations() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('all');

  // The header dropdown links here with #europe, #uk-ireland or #north-america-oceania.
  useEffect(() => {
    const sync = () => setTab(tabFromHash(window.location.hash));
    sync();
    router.events.on('hashChangeComplete', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      router.events.off('hashChangeComplete', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, [router.events]);

  const selectTab = (id: Tab) => {
    setTab(id);
    window.history.replaceState(null, '', id === 'all' ? window.location.pathname : `#${id}`);
  };

  const visibleRegions = regions.filter((r) => tab === 'all' || tab === r.id);
  // Armenia is outside the Schengen area, so it is only listed under "All Regions".
  const extras = extraDestinations.filter((d) => tab === 'all' || (tab === 'europe' && d.schengen));

  return (
    <Layout
      title="Global Study Destinations | Europe, UK, USA & Australia"
      description="Discover top study abroad destinations offering recognized qualifications, rich cultural experiences, and excellent graduate perspectives."
    >
      <PageHero
        eyebrow="Find your fit"
        title="Global Study Destinations"
        copy="Discover top study abroad destinations offering recognized qualifications, rich cultural experiences, and excellent graduate perspectives."
        image={img.worldMap}
        crumbs={[{ label: 'Study Destinations' }]}
      />

      <section className="section destinations">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Filter destinations by region">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`tab${tab === t.id ? ' active' : ''}`}
                onClick={() => selectTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {visibleRegions.map((r) => (
            <div className="region" id={r.id} key={r.id}>
              <div className="region-head">
                <div>
                  <span className="eyebrow">{r.label}</span>
                  <h2>{r.heading}</h2>
                </div>
                <p>{r.intro}</p>
              </div>
              <div className="destination-grid">
                {destinations
                  .filter((d) => d.region === r.id)
                  .map((d) => (
                    <DestinationCard key={d.slug} d={d} />
                  ))}
              </div>

              {r.id === 'europe' && extras.length > 0 && (
                <div className="extra-destinations">
                  <h3>Additional European Academic Destinations</h3>
                  <div className="card-grid">
                    {extras.map((d) => (
                      <article className="feature" key={d.name}>
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </article>
                    ))}
                  </div>
                  <a className="wa-link" href={wa('I’d like to study in Europe', 'eu')} target="_blank" rel="noopener">
                    ◉ Chat with Europe Advisor on WhatsApp →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
