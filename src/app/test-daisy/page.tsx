export default function TestDaisyPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">🧪 Test DaisyUI Debug</h1>
      
      {/* Info debug */}
      <div className="alert alert-info mb-8">
        <span>Thème actuel: synthwave | Classes détectées mais couleurs manquantes</span>
      </div>
      
      {/* Test boutons avec différentes approches */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-bold">Test Boutons:</h2>
        <button className="btn">Bouton Normal</button>
        <button className="btn btn-primary">Bouton Primary</button>
        <button className="btn btn-secondary">Bouton Secondary</button>
        <button className="btn btn-accent">Bouton Accent</button>
        <button className="btn btn-error">Bouton Error</button>
        <button className="btn btn-warning">Bouton Warning</button>
      </div>
      
      {/* Test avec style inline pour comparer */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-bold">Test avec couleurs forcées:</h2>
        <button className="btn" style={{backgroundColor: '#ff7ac6', color: 'white'}}>Synthwave Pink</button>
        <button className="btn" style={{backgroundColor: '#bf95f9', color: 'white'}}>Synthwave Purple</button>
      </div>
      
      {/* Test card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title">Test Card</h2>
          <p>Est-ce que cette card a les bonnes couleurs de fond ?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Primaire</button>
            <button className="btn btn-ghost">Ghost</button>
          </div>
        </div>
      </div>
      
      {/* Test badges */}
      <div className="mb-8 space-x-2">
        <h2 className="text-xl font-bold mb-2">Test Badges:</h2>
        <div className="badge">Normal</div>
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
        <div className="badge badge-accent">Accent</div>
      </div>
      
      {/* Variables CSS debug */}
      <div className="bg-base-200 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Variables CSS Debug:</h2>
        <div className="text-sm font-mono">
          <div>--p (primary): <span style={{color: 'hsl(var(--p))'}}>TEST</span></div>
          <div>--s (secondary): <span style={{color: 'hsl(var(--s))'}}>TEST</span></div>
          <div>--a (accent): <span style={{color: 'hsl(var(--a))'}}>TEST</span></div>
        </div>
      </div>
    </div>
  )
} 