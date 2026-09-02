import { useState } from 'react';

import LocacoesPage from './pages/LocacoesPage';
import VeiculosPage from './pages/VeiculosPage';
import CategoriasPage from './pages/CategoriasPage';
import ClientesPage from './pages/ClientesPage';
import SegurosPage from './pages/SegurosPage';
import MultasPage from './pages/MultasPage';
import ManutencaoPage from './pages/ManutencaoPage';
import { Login } from './pages/LoginPage';

type Aba =
  | 'locacoes'
  | 'veiculos'
  | 'categorias'
  | 'clientes'
  | 'seguros'
  | 'multas'
  | 'manutencao';

const NAV_ITEMS = [
  { id: 'locacoes' as Aba, label: 'Locações', icon: '🔑' },
  { id: 'veiculos' as Aba, label: 'Veículos', icon: '🚗' },
  { id: 'categorias' as Aba, label: 'Categorias', icon: '🏷️' },
  { id: 'clientes' as Aba, label: 'Clientes', icon: '👤' },
  { id: 'seguros' as Aba, label: 'Seguros', icon: '🛡️' },
  { id: 'multas' as Aba, label: 'Multas', icon: '⚠️' },
  { id: 'manutencao' as Aba, label: 'Manutenção', icon: '🔧' },
];

export default function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [aba, setAba] = useState<Aba>('locacoes');

  if (!autenticado) {
    return (
      <Login
        onLoginSuccess={() => setAutenticado(true)}
      />
    );
  }

  return (
    <div className="shell">

      {/* MENU LATERAL */}
      <aside className="sidebar">

        <div className="brand">
          <span className="brand-mark">RV</span>

          <div>
            <div className="brand-name">
              RodaViva
            </div>

            <div className="brand-sub">
              Locadora de veículos
            </div>
          </div>
        </div>

        <nav className="side-nav">

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                'side-link' +
                (aba === item.id ? ' active' : '')
              }
              onClick={() => setAba(item.id)}
            >
              <span className="side-icon">
                {item.icon}
              </span>

              <span>
                {item.label}
              </span>
            </button>
          ))}

        </nav>

        <div style={{ padding: '15px' }}>
          <button
            type="button"
            onClick={() => setAutenticado(false)}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#dc2626',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sair
          </button>
        </div>

        <div className="sidebar-footer">
          UC9 · Manutenção de sistemas
          <br />
          Senac DF
        </div>

      </aside>

      {/* CONTEÚDO */}
      <main className="content">

        {aba === 'locacoes' && (
          <LocacoesPage />
        )}

        {aba === 'veiculos' && (
          <VeiculosPage />
        )}

        {aba === 'categorias' && (
          <CategoriasPage />
        )}

        {aba === 'clientes' && (
          <ClientesPage />
        )}

        {aba === 'seguros' && (
          <SegurosPage />
        )}

        {aba === 'multas' && (
          <MultasPage />
        )}

        {aba === 'manutencao' && (
          <ManutencaoPage />
        )}

      </main>

    </div>
  );
}