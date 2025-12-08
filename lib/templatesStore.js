let store = [];
let nextId = 1;

export function listTemplates(){ return store; }
export function createTemplate(data){ data.id = String(nextId++); data.createdAt = new Date().toISOString(); data.status = 'draft'; store.push(data); return data; }
export function updateTemplate(id, data){ const idx = store.findIndex(x=>x.id === id); if(idx === -1) return null; store[idx] = { ...store[idx], ...data }; return store[idx]; }
export function deleteTemplateById(id){ store = store.filter(x=>x.id !== id); return true; }
export function getTemplateById(id){ return store.find(x=>x.id === id) || null; }
export function submitTemplateById(id){ const t = getTemplateById(id); if(!t) return null; t.status = 'submitted'; return t; }
