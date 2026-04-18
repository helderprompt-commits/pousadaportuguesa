import React from 'react';

interface Column {
  header: string;
  key: string;
  align?: 'left' | 'center' | 'right';
  render?: (row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
  actionButton?: React.ReactNode;
  emptyMessage?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data, title, actionButton, emptyMessage = "Nenhum dado encontrado" }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 opacity-0 animate-fade-in-up animate-delay-200">
      {(title || actionButton) && (
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          {title && <h3 className="text-lg font-bold text-[#1D3557]">{title}</h3>}
          {actionButton && <div>{actionButton}</div>}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8f9fa] text-slate-500 text-xs uppercase tracking-widest font-bold border-b border-slate-100">
              {columns.map((col, idx) => (
                <th key={idx} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length > 0 ? data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}`}>
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            )) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-500 font-medium">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {data.length > 0 && (
        <div className="p-4 bg-[#f8f9fa] flex justify-between items-center text-sm text-slate-500 border-t border-slate-100">
          <span>Mostrando {data.length} registros</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-400 cursor-not-allowed">Anterior</button>
            <button className="px-3 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Próxima</button>
          </div>
        </div>
      )}
    </div>
  );
};
